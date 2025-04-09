import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Question } from '@/types';
import Confetti from 'react-confetti';
import { Button } from "@/components/ui/button";

// Cache global pour les images préchargées
const preloadedImages: Record<string, boolean> = {};

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
  themeEmoji: string;
  isLastQuestion?: boolean;
  onThemeComplete?: () => void;
}

export function QuizCarousel({ 
  question, 
  onCorrectAnswer,
  themeEmoji,
  isLastQuestion = false,
  onThemeComplete
}: QuizCarouselProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showThemeComplete, setShowThemeComplete] = useState(false);
  const [showThemeCompleteConfetti, setShowThemeCompleteConfetti] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [sparkles, setSparkles] = useState<{x: number, y: number, size: number, color: string}[]>([]);
  const [magicEffect, setMagicEffect] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Mémorisation des options mélangées
  const shuffledOptions = useMemo(() => {
    const newArray = [...question.options];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, [question.options]);

  // Préchargement des images optimisé
  useEffect(() => {
    let mounted = true;
    const loadImages = async () => {
      const loadPromises = question.options.map(option => {
        if (preloadedImages[option.image]) return Promise.resolve();
        
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = option.image;
          
          if (img.complete) {
            preloadedImages[option.image] = true;
            resolve();
          } else {
            img.onload = () => {
              if (mounted) {
                preloadedImages[option.image] = true;
                resolve();
              }
            };
            img.onerror = () => resolve();
          }
        });
      });

      await Promise.all(loadPromises);
    };

    loadImages();
    return () => { mounted = false; };
  }, [question.options]);

  // Gestion des animations optimisée
  useEffect(() => {
    const generateSparkles = () => {
      if (!questionRef.current) return;
      
      const rect = questionRef.current.getBoundingClientRect();
      const newSparkles = Array.from({ length: 4 }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 2 + 1,
        color: '#FFD700'
      }));
      
      setSparkles(newSparkles);
    };

    generateSparkles();
    setMagicEffect(true);

    const timer = setTimeout(() => {
      setMagicEffect(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [question.id]);

  // Gestion des clics optimisée
  const handleOptionClick = useCallback((option: { id: string; isCorrect: boolean; description: string }) => {
    if (selectedOptionId !== null) return;
    
    setSelectedOptionId(option.id);
    playSound(popSound);
    
    if (option.isCorrect) {
      setTimeout(() => {
        playSound(successSound);
        setShowSuccess(true);
        setShowConfetti(true);
        
        if (questionRef.current) {
          const rect = questionRef.current.getBoundingClientRect();
          const newSparkles = Array.from({ length: 5 }, () => ({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            size: 2 + Math.random() * 3,
            color: '#FFD700'
          }));
          setSparkles(newSparkles);
        }
        
        setTimeout(() => {
          setShowSuccess(false);
          setShowConfetti(false);
          setSparkles([]);
          setSelectedOptionId(null);
          
          if (isLastQuestion && onThemeComplete) {
            setShowThemeComplete(true);
            setShowThemeCompleteConfetti(true);
          } else {
            onCorrectAnswer();
          }
        }, 2500);
      }, 200);
    } else {
      setErrorMessage(`Ce n'est pas la bonne réponse. Essaie encore !`);
      setTimeout(() => {
        playSound(errorSound);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setSelectedOptionId(null);
        }, 1500);
      }, 300);
    }
  }, [selectedOptionId, isLastQuestion, onThemeComplete, onCorrectAnswer]);

  // Réinitialiser l'option sélectionnée quand la question change
  useEffect(() => {
    setSelectedOptionId(null);
  }, [question.id]);

  // Styles optimisés
  const styles = useMemo(() => `
    @keyframes magic-appear {
      0% { transform: scale(0.9) translateY(20px); opacity: 0; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }
    .animate-magic-appear { animation: magic-appear 4s ease-out; }
    
    @keyframes correct-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      50% { box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
    }
    .animate-correct-pulse { animation: correct-pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    
    @keyframes wrong-shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      75% { transform: translateX(6px); }
    }
    .animate-wrong-shake { animation: wrong-shake 2s cubic-bezier(.36,.07,.19,.97) both; }

    @keyframes sparkle-slide {
      0% { transform: translateX(-100px) translateY(-50px); opacity: 0; }
      50% { transform: translateX(0) translateY(0); opacity: 1; }
      100% { transform: translateX(100px) translateY(50px); opacity: 0; }
    }
    .animate-sparkle-slide { animation: sparkle-slide 10s ease-in-out infinite; }

    @keyframes ping {
      0% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(2); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0.7; }
    }
    .animate-ping { animation: ping 8s cubic-bezier(0, 0, 0.2, 1) infinite; }
  `, []);

  return (
    <>
      {showConfetti && (
        <Confetti 
          recycle={false} 
          numberOfPieces={150}
          gravity={0.2}
          tweenDuration={3000}
          colors={['#FFD700', '#FF69B4', '#00BFFF']}
        />
      )}
      
      {showThemeCompleteConfetti && (
        <Confetti 
          recycle={true}
          numberOfPieces={300}
          gravity={0.15}
          tweenDuration={5000}
          colors={['#FFD700', '#FF69B4', '#00BFFF', '#8A2BE2', '#FF4500', '#00FF7F']}
        />
      )}
      
      <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6 pb-4 sm:pb-6 md:pb-8" ref={containerRef}>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-white/30 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl">
          {shuffledOptions.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                selectedOptionId === option.id
                  ? option.isCorrect
                    ? 'ring-4 ring-green-500 animate-correct-pulse'
                    : 'ring-4 ring-red-500 animate-wrong-shake'
                  : 'hover:ring-2 hover:ring-purple-300'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <CardContent className="p-0 overflow-hidden rounded-t-lg">
                <div className="relative group">
                  <img 
                    src={option.image} 
                    alt={option.description}
                    className={`w-full h-36 sm:h-48 object-cover transition-transform hover:scale-105 duration-300 cursor-pointer hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-purple-500`}
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                    style={{ 
                      contentVisibility: "auto",
                      backgroundSize: "cover",
                      backgroundPosition: "center", 
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%23f0f0f0"/></svg>')`
                    }}
                  />
                  {!selectedOptionId && (
                    <div className="absolute inset-0 bg-purple-700/0 group-hover:bg-purple-700/10 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">👆</span>
                    </div>
                  )}
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
          ))}
        </div>
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

      <Dialog open={showThemeComplete} onOpenChange={(open) => {
        setShowThemeComplete(open);
        if (!open) setShowThemeCompleteConfetti(false);
      }}>
        <DialogContent className="bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-purple-200 shadow-xl max-w-sm sm:max-w-md" hideCloseButton>
          <DialogHeader>
            <DialogTitle className="text-center text-xl sm:text-2xl text-purple-700 animate-bounce">
              🎊 Félicitations ! Thème terminé ! 🎊
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-3 sm:py-6 px-3 bg-white/50 rounded-lg text-purple-800 font-medium text-sm sm:text-base">
            <p>Tu as terminé toutes les questions de ce thème avec succès !</p>
            <p className="mt-2">Veux-tu découvrir un nouveau thème avec d'autres questions passionnantes ?</p>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-5">
            <Button
              onClick={() => {
                setShowThemeComplete(false);
                setShowThemeCompleteConfetti(false);
                onCorrectAnswer();
              }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-3 sm:px-6 py-1 sm:py-3 rounded-full"
            >
              Continuer
            </Button>
            <Button
              onClick={() => {
                setShowThemeComplete(false);
                setShowThemeCompleteConfetti(false);
                if (onThemeComplete) onThemeComplete();
              }}
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-3 sm:px-6 py-1 sm:py-3 rounded-full"
            >
              Nouveau thème
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <style>{styles}</style>
    </>
  );
}