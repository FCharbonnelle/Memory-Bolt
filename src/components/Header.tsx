import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { themes } from '@/data/themes';
import { useState, useEffect } from 'react';

interface HeaderProps {
  selectedTheme: string | null;
  onThemeSelect: (themeId: string) => void;
}

export function Header({ selectedTheme, onThemeSelect }: HeaderProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [glowColors, setGlowColors] = useState<string[]>([]);
  
  // Effet pour créer une animation lors du chargement
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1500);
    
    // Couleurs pour l'effet de brillance
    setGlowColors(['#FFD700', '#FF1493', '#00BFFF', '#FF4500', '#9400D3', '#FF69B4']);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Effet pour animer quand un thème est sélectionné
  useEffect(() => {
    if (selectedTheme) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [selectedTheme]);

  return (
    <header className={`w-screen p-2 sm:p-3 md:p-4 shadow-lg relative overflow-hidden transition-all duration-500 ${
      isAnimating ? 'animate-pulse' : ''
    }`} style={{
      background: selectedTheme 
        ? 'linear-gradient(135deg, rgba(147,51,234,0.9) 0%, rgba(79,70,229,0.9) 100%)' 
        : 'linear-gradient(135deg, rgba(124,58,237,0.9) 0%, rgba(219,39,119,0.9) 100%)',
      width: '100vw',
      maxWidth: '100vw'
    }}>
      {/* Effet de rayons magiques */}
      <div className="absolute inset-0 overflow-hidden">
        {glowColors.map((color, index) => (
          <div 
            key={index} 
            className="absolute rounded-full animate-pulse opacity-30"
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              filter: 'blur(40px)',
              left: `${(index * 15) + Math.random() * 10}%`,
              top: index % 2 === 0 ? '-50px' : '30px',
              animation: `float ${5 + index}s infinite ease-in-out alternate`
            }}
          />
        ))}
      </div>
      
      <div className="w-screen flex flex-col md:flex-row items-center justify-between relative z-10 px-2" style={{ maxWidth: '100vw' }}>
        <div className="mb-3 md:mb-0 transform transition-transform hover:scale-105 w-full md:w-auto text-center md:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white flex items-center justify-center md:justify-start flex-wrap">
            <span className="mr-1 sm:mr-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">🎮</span>
            <span className="gradient-text">Quiz Magique pour Enfants</span>
            <span className="ml-1 sm:ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">✨</span>
          </h1>
        </div>
        
        <div className="relative group w-full md:w-auto mt-2 md:mt-0">
          {/* Effet de brillance autour du select */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg blur-sm group-hover:blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          <Select value={selectedTheme || undefined} onValueChange={onThemeSelect}>
            <SelectTrigger className="w-full md:w-[220px] lg:w-[300px] bg-white/90 backdrop-blur-sm border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 rounded-lg shadow-xl text-xs sm:text-sm">
              <SelectValue placeholder="✨ Choisis un thème magique ✨" />
            </SelectTrigger>
            <SelectContent className="bg-white/90 backdrop-blur-md border border-purple-200 shadow-xl rounded-lg max-h-[300px]">
              {themes.map((theme) => (
                <SelectItem 
                  key={theme.id} 
                  value={theme.id}
                  className="cursor-pointer py-2 sm:py-3 hover:bg-purple-50 transition-colors duration-200 font-medium text-xs sm:text-sm"
                >
                  <div className="flex items-center">
                    <span className="text-xl sm:text-2xl mr-1 sm:mr-2">{theme.emoji}</span>
                    <span>{theme.title}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Styles pour les effets visuels */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(5px) rotate(-5deg); }
        }
        
        .gradient-text {
          background: linear-gradient(to right, #fff, #f0f0f0, #fff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
        
        @media (max-width: 640px) {
          .gradient-text {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </header>
  );
}