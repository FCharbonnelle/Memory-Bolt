import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Question } from '@/types';
import Confetti from 'react-confetti';
import { Button } from "@/components/ui/button";

// Chargement des sons
const successSound = new Audio('/sounds/success.mp3');
const errorSound = new Audio('/sounds/error.mp3');
const popSound = new Audio('/sounds/pop.mp3');

successSound.volume = 0.5;
errorSound.volume = 0.3;
popSound.volume = 0.2;

// Fonction pour jouer un son
const playSound = (sound: HTMLAudioElement) => {
  try {
    sound.currentTime = 0;
    sound.play();
  } catch (e) {
    console.log('Audio non supporté', e);
  }
};

interface QuizCarouselProps {
  question: Question;
  onCorrectAnswer: () => void;
  themeColor: string;
  themeEmoji: string;
}

export function QuizCarousel({ question, onCorrectAnswer, themeColor, themeEmoji }: QuizCarouselProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [sparkles, setSparkles] = useState<{x: number, y: number, size: number, color: string}[]>([]);
  const [magicEffect, setMagicEffect] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);

  // Effet pour créer un effet magique sur la question
  useEffect(() => {
    // Animation d'entrée pour la question
    setMagicEffect(true);
    
    // Génération de petites étincelles autour de la question
    const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#7FFFD4', '#FF7F50'];
    const newSparkles = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setSparkles(newSparkles);
    
    // Reset l'effet après le chargement
    const timer = setTimeout(() => {
      setMagicEffect(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [question.id]);

  const handleOptionClick = (option: { id: string; isCorrect: boolean; description: string }) => {
    if (selectedOptionId !== null) return; // Empêcher les clics multiples
    setSelectedOptionId(option.id);
    
    playSound(popSound);
    
    if (option.isCorrect) {
      // Réponse correcte
      setTimeout(() => {
        playSound(successSound);
        setShowSuccess(true);
        setShowConfetti(true);
        
        // Générer des étincelles autour de la question
        if (questionRef.current) {
          const rect = questionRef.current.getBoundingClientRect();
          const newSparkles = Array.from({ length: 15 }, () => ({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            size: 3 + Math.random() * 5,
            color: '#FFD700'
          }));
          setSparkles(newSparkles);
        }
        
        setTimeout(() => {
          setShowSuccess(false);
          setShowConfetti(false);
          setSparkles([]);
          onCorrectAnswer(); // Passer à la question suivante
        }, 2000);
      }, 500);
    } else {
      // Réponse incorrecte
      setErrorMessage(`Ce n'est pas la bonne réponse. Essaie encore !`);
      setTimeout(() => {
        playSound(errorSound);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setSelectedOptionId(null);
        }, 2000);
      }, 500);
    }
  };

  return (
    <>
      {showConfetti && (
        <Confetti 
          recycle={false} 
          numberOfPieces={300}
          gravity={0.15}
          colors={['#FFD700', '#FF69B4', '#00BFFF', '#7FFFD4', '#FF7F50', '#9370DB']}
        />
      )}
      
      <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6 pb-4 sm:pb-6 md:pb-8" ref={containerRef}>
        {/* Sparkles animation */}
        {sparkles.map((sparkle, i) => (
          <div 
            key={i} 
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: sparkle.color,
              borderRadius: '50%',
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
              zIndex: 1,
              opacity: 0.7
            }}
          />
        ))}
        
        <h2 
          ref={questionRef}
          className={`text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-purple-800 p-2 sm:p-4 rounded-xl relative z-10 ${
            magicEffect ? 'animate-magic-appear' : ''
          }`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-lg mx-auto mb-2 sm:mb-3">
            <span className="text-xl sm:text-2xl">{themeEmoji}</span>
          </div>
          <span className="inline-block mr-2 text-2xl sm:text-3xl">✨</span>
          {question.question}
          <span className="inline-block ml-2 text-2xl sm:text-3xl">✨</span>
        </h2>
        
        <Carousel className="w-full bg-white/30 backdrop-blur-md rounded-xl p-2 sm:p-4 md:p-6 shadow-xl">
          <CarouselContent>
            {question.options.map((option) => (
              <CarouselItem key={option.id} className="md:basis-1/2 lg:basis-1/3">
                <Card 
                  className={`cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    selectedOptionId === option.id
                      ? option.isCorrect
                        ? 'ring-4 ring-green-500 animate-correct-pulse'
                        : 'ring-4 ring-red-500 animate-wrong-shake'
                      : 'hover:ring-2 hover:ring-purple-300'
                  }`}
                  onClick={() => !selectedOptionId && handleOptionClick(option)}
                >
                  <CardContent className="p-0 overflow-hidden rounded-t-lg">
                    <div className="relative">
                      <img 
                        src={option.image} 
                        alt={option.description}
                        className="w-full h-36 sm:h-48 object-cover transition-transform hover:scale-110 duration-700"
                      />
                      {selectedOptionId === option.id && option.isCorrect && (
                        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl animate-bounce">✅</span>
                        </div>
                      )}
                      {selectedOptionId === option.id && !option.isCorrect && (
                        <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl">❌</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardDescription className="text-purple-700 font-medium text-xs sm:text-sm">{option.description}</CardDescription>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 sm:mt-6">
            <CarouselPrevious className="relative -left-0 top-0 translate-y-0 mr-2 sm:mr-4 bg-purple-100 hover:bg-purple-200 text-purple-800" />
            <CarouselNext className="relative -right-0 top-0 translate-y-0 ml-2 sm:ml-4 bg-purple-100 hover:bg-purple-200 text-purple-800" />
          </div>
        </Carousel>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-green-200 shadow-xl max-w-sm sm:max-w-md" hideCloseButton>
          <DialogHeader>
            <DialogTitle className="text-center text-xl sm:text-2xl text-green-700 animate-bounce">
              🎉 Bravo ! Tu as trouvé la bonne réponse ! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-2 sm:py-4 px-2 bg-white/50 rounded-lg text-green-800 font-medium text-sm sm:text-base">
            {question.explanation}
          </div>
          <div className="flex justify-center mt-2 sm:mt-4">
            <Button
              onClick={() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setSparkles([]);
                onCorrectAnswer();
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 sm:px-6 py-1 sm:py-3 rounded-full"
            >
              Continuer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showError} onOpenChange={setShowError}>
        <DialogContent className="bg-gradient-to-r from-red-50 to-pink-50 border-4 border-red-100 max-w-sm sm:max-w-md" hideCloseButton>
          <DialogHeader>
            <DialogTitle className="text-center text-lg sm:text-xl text-red-600">
              Oups ! Essaie encore ! 🤔
            </DialogTitle>
          </DialogHeader>
          <p className="text-center py-2 sm:py-4 bg-white/50 rounded-lg text-red-700 text-sm sm:text-base">{errorMessage}</p>
          <div className="flex justify-center mt-2 sm:mt-4">
            <Button
              onClick={() => {
                setShowError(false);
                setSelectedOptionId(null);
              }}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-3 sm:px-6 py-1 sm:py-3 rounded-full"
            >
              Réessayer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        @keyframes magic-appear {
          0% { transform: scale(0.8); opacity: 0; filter: blur(8px); }
          50% { transform: scale(1.05); opacity: 0.8; filter: blur(2px); }
          100% { transform: scale(1); opacity: 1; filter: blur(0); }
        }
        .animate-magic-appear { animation: magic-appear 1.5s ease-out; }
        
        @keyframes correct-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
        }
        .animate-correct-pulse { animation: correct-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        @keyframes wrong-shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-wrong-shake { animation: wrong-shake 0.8s cubic-bezier(.36,.07,.19,.97) both; }
      `}</style>
    </>
  );
}