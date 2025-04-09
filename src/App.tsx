import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { QuizCarousel } from '@/components/QuizCarousel';
import { themes } from '@/data/themes';
import { GameState } from '@/types';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentTheme: null,
    currentCategory: null,
    completedQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
  });
  const [particles, setParticles] = useState<{x: number, y: number, size: number, color: string, ascendSpeed: number, descendSpeed: number, direction: number, animationDelay: number, animationType: string, translateX: number, translateY: number, ascending: boolean, rotationAngle: number}[]>([]);

  const currentTheme = themes.find(t => t.id === gameState.currentTheme);
  const currentCategory = currentTheme?.categories.find(c => c.id === gameState.currentCategory);
  const currentQuestion = currentCategory?.questions[gameState.currentQuestionIndex];

  // Vérifier si toutes les questions de la catégorie actuelle sont complétées
  const isCategoryCompleted = currentCategory?.questions.every(q => 
    gameState.completedQuestions.includes(q.id)
  );

  // Calcul du pourcentage de progression
  const progress = currentCategory 
    ? (gameState.completedQuestions.filter(qId => 
        currentCategory.questions.some(q => q.id === qId)
      ).length / currentCategory.questions.length) * 100
    : 0;

  // Effet pour générer des particules magiques flottantes
  useEffect(() => {
    const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#7FFFD4', '#FF7F50', '#9370DB'];
    const newParticles = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      ascendSpeed: Math.random() * 0.7 + 0.3, // Vitesse pour monter
      descendSpeed: Math.random() * 0.4 + 0.2, // Vitesse plus lente pour descendre
      direction: Math.random() > 0.5 ? 1 : -1,
      animationDelay: Math.random() * 5,
      animationType: Math.random() > 0.5 ? 'pulse-smooth' : 'twinkle',
      translateX: 0,
      translateY: 0,
      ascending: true,
      rotationAngle: Math.random() * 360 // Angle de rotation pour plus de variété
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      requestAnimationFrame(() => {
        setParticles(prev => prev.map(p => {
          // Calculer les translations
          let newTranslateY = p.translateY;
          let newTranslateX = p.translateX + (Math.random() * 0.3 - 0.15) * p.direction;
          let isAscending = p.ascending;
          
          // Si la particule monte
          if (isAscending) {
            newTranslateY = p.translateY - p.ascendSpeed;
            
            // Si la particule atteint le haut de l'écran, commencer à descendre
            if (p.y + newTranslateY <= 0) {
              isAscending = false;
              // Légère pause en haut (effet de flottement)
              newTranslateY = p.translateY;
            }
          } 
          // Si la particule descend
          else {
            newTranslateY = p.translateY + p.descendSpeed;
            
            // Si la particule atteint le bas de l'écran, réinitialiser
            if (p.y + newTranslateY >= 100) {
              return {
                ...p,
                y: Math.random() * 40 + 60, // Apparaît principalement en bas de l'écran
                x: Math.random() * 100,
                translateX: 0,
                translateY: 0,
                ascending: true,
                rotationAngle: Math.random() * 360,
                color: colors[Math.floor(Math.random() * colors.length)] // Changement de couleur
              };
            }
          }
          
          return {
            ...p,
            translateX: newTranslateX,
            translateY: newTranslateY,
            ascending: isAscending
          };
        }));
      });
    }, 16); // 60 FPS pour une animation très fluide
    
    return () => clearInterval(interval);
  }, []);

  const handleThemeSelect = (themeId: string) => {
    setGameState({
      currentTheme: themeId,
      currentCategory: themes.find(t => t.id === themeId)?.categories[0].id || null,
      completedQuestions: [],
      currentQuestionIndex: 0,
      score: 0,
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    setGameState(prev => ({
      ...prev,
      currentCategory: categoryId,
      currentQuestionIndex: 0,
    }));
  };

  const handleCorrectAnswer = () => {
    if (currentQuestion) {
      setGameState(prev => {
        // Ajouter l'ID de la question actuelle aux questions complétées
        const updatedCompletedQuestions = [...prev.completedQuestions, currentQuestion.id];
        
        // Calculer le nouvel index de question
        const nextQuestionIndex = prev.currentQuestionIndex + 1;
        const hasMoreQuestions = currentCategory && nextQuestionIndex < currentCategory.questions.length;
        
        return {
          ...prev,
          completedQuestions: updatedCompletedQuestions,
          currentQuestionIndex: hasMoreQuestions ? nextQuestionIndex : prev.currentQuestionIndex,
          score: prev.score + 10, // 10 points par bonne réponse
        };
      });
    }
  };

  // Définir le fond en fonction du thème sélectionné
  const getBackgroundStyle = () => {
    if (!gameState.currentTheme) return {};
    
    const themeBackgrounds: Record<string, string> = {
      animals: 'linear-gradient(to bottom, #a8edea, #fed6e3)',
      space: 'linear-gradient(to bottom, #0f172a, #334155)',
      nature: 'linear-gradient(to bottom, #81fbb8, #28c76f)',
      tales: 'linear-gradient(to bottom, #e0c3fc, #8ec5fc)',
      inventions: 'linear-gradient(to bottom, #f5f7fa, #c3cfe2)',
      'human-body': 'linear-gradient(to bottom, #ff9a9e, #fecfef)',
      colors: 'linear-gradient(to bottom, #fdcbf1, #e6dee9)',
      dinosaurs: 'linear-gradient(to bottom, #d4fc79, #96e6a1)',
      countries: 'linear-gradient(to bottom, #84fab0, #8fd3f4)',
      cartoons: 'linear-gradient(to bottom, #a1c4fd, #c2e9fb)'
    };
    
    return {
      background: themeBackgrounds[gameState.currentTheme] || 'linear-gradient(to bottom, #a6c0fe, #f68084)'
    };
  };

  return (
    <div 
      className="w-screen h-screen min-h-screen relative overflow-hidden transition-all duration-1000" 
      style={{
        ...getBackgroundStyle(),
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto'
      }}
    >
      {/* Particules magiques */}
      {particles.map((particle, i) => (
        <div 
          key={i} 
          className={`absolute rounded-full animate-${particle.animationType}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            opacity: 0.7,
            zIndex: 1,
            transform: `translate(${particle.translateX}px, ${particle.translateY}px) rotate(${particle.rotationAngle}deg)`,
            transition: 'transform 0.1s linear, background-color 1s ease-out',
            animationDelay: `${particle.animationDelay}s`,
            willChange: 'transform, opacity'
          }}
        />
      ))}

      <Header 
        selectedTheme={gameState.currentTheme} 
        onThemeSelect={handleThemeSelect}
      />
      <main className="w-screen py-4 sm:py-6 md:py-8 px-0 relative z-10" style={{ maxWidth: '100vw', width: '100vw' }}>
        {!gameState.currentTheme && (
          <div className="text-center py-10 sm:py-16 md:py-20 bg-white/30 backdrop-blur-md rounded-xl shadow-xl animate-fade-in mx-2 sm:mx-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-purple-900 animate-bounce px-3">Bienvenue au Quiz Magique pour Enfants ! 🎮</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 px-4">
              Choisis un thème pour commencer à jouer et apprendre en t'amusant ! 🌟
            </p>
            <div className="mt-6 sm:mt-8 animate-pulse">
              <span className="text-3xl sm:text-4xl">⬆️</span>
              <p className="text-base sm:text-lg mt-2 text-purple-700 font-semibold px-3">Sélectionne un thème dans le menu</p>
            </div>
          </div>
        )}

        {currentTheme && (
          <div className="mb-4 sm:mb-6 bg-white/30 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 shadow-xl animate-slide-in mx-2 sm:mx-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl sm:text-4xl mr-2 animate-wobble">{currentTheme.emoji}</span> 
                <span>{currentTheme.title}</span>
              </h2>
              
              <div className="text-left sm:text-right bg-purple-100/70 rounded-lg p-2 sm:p-3 animate-pulse w-full sm:w-auto">
                <div className="text-lg sm:text-xl font-bold text-purple-800">Score: {gameState.score}</div>
                {currentCategory && (
                  <div className="text-xs sm:text-sm text-purple-600">
                    {gameState.completedQuestions.filter(qId => 
                      currentCategory.questions.some(q => q.id === qId)
                    ).length} / {currentCategory.questions.length} questions
                  </div>
                )}
              </div>
            </div>
            
            {currentCategory && (
              <div className="mb-4 sm:mb-6">
                <Progress value={progress} className="h-2 sm:h-3 bg-purple-200" 
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                  }}
                />
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
              {currentTheme.categories.map(category => (
                <Button
                  key={category.id}
                  variant={category.id === gameState.currentCategory ? "default" : "outline"}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`flex items-center gap-1 sm:gap-2 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm ${
                    category.id === gameState.currentCategory 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:shadow-xl' 
                      : 'hover:bg-purple-100'
                  }`}
                  size="sm"
                >
                  <span className="text-base sm:text-xl">{category.emoji}</span> {category.title}
                </Button>
              ))}
            </div>
          </div>
        )}

        {currentQuestion && (
          <div className="animate-fade-in px-2 sm:px-0">
            <div className="mb-2 sm:mb-4 text-xs sm:text-sm text-purple-700 font-medium bg-white/40 p-1 sm:p-2 rounded-lg inline-block">
              Question {gameState.currentQuestionIndex + 1} / {currentCategory?.questions.length}
            </div>
            <QuizCarousel
              question={currentQuestion}
              onCorrectAnswer={handleCorrectAnswer}
              themeEmoji={currentTheme?.emoji || '🌟'}
            />
          </div>
        )}

        {currentCategory && isCategoryCompleted && currentCategory.questions.length > 0 && (
          <div className="text-center py-6 sm:py-8 md:py-10 rounded-lg mt-4 sm:mt-6 md:mt-8 animate-scale-in bg-gradient-to-r from-purple-300 to-pink-200 shadow-2xl mx-2 sm:mx-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-purple-900">🎉 Félicitations ! 🎉</h3>
            <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4 text-purple-800 px-3">Tu as complété toutes les questions de cette catégorie !</p>
            <div className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 bg-white/50 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-pulse">
              Score: {gameState.score}
            </div>
            
            {currentTheme && currentTheme.categories.length > 1 && (
              <div className="mt-4 sm:mt-6 md:mt-8 px-3">
                <p className="mb-3 sm:mb-4 text-base sm:text-lg text-purple-700">Essaie une autre catégorie :</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {currentTheme.categories
                    .filter(cat => cat.id !== gameState.currentCategory)
                    .map(category => (
                      <Button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-1 sm:py-2 px-2 sm:px-4 rounded-lg transform transition-transform hover:scale-105 shadow-md text-xs sm:text-sm"
                      >
                        <span className="text-base sm:text-xl">{category.emoji}</span> {category.title}
                      </Button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Styles pour animations */}
      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse-smooth {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-wobble { animation: wobble 3s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
        .animate-scale-in { animation: scale-in 0.8s ease-out; }
        .animate-pulse-smooth { animation: pulse-smooth 3s infinite ease-in-out; }
        .animate-twinkle { animation: twinkle 2s infinite ease-in-out; }
        
        /* Styles spécifiques pour le responsive et le plein écran */
        @media screen and (max-width: 768px) {
          body, html, #root {
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
          }
        }
        
        @media screen and (min-width: 769px) {
          body, html, #root {
            width: 100vw !important;
            height: 100vh !important;
            overflow-x: hidden !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;