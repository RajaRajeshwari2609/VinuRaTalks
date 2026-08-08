import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, User } from 'lucide-react';

export interface BottomNavigationProps {
  active: 'home' | 'challenges' | 'progress' | 'profile';
  onChallengeClick?: () => void;
  onProfileClick?: () => void;
  onProgressClick?: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  active,
  onChallengeClick,
  onProfileClick,
  onProgressClick
}) => {
  const navigate = useNavigate();

  const handleChallengeClick = () => {
    if (onChallengeClick) {
      onChallengeClick();
    } else {
      navigate('/day/12');
    }
  };

  const handleHomeClick = () => {
    navigate('/dashboard');
  };

  const handlePlaceholderClick = (tabName: string, customHandler?: () => void) => {
    if (customHandler) {
      customHandler();
    } else {
      alert(`${tabName} tab is a mock placeholder for this hackathon branch.`);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-lg border-t border-white/8 px-4 py-2 md:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
      <div className="max-w-[390px] mx-auto flex justify-between items-center">
        
        {/* Home/Dashboard Tab */}
        <button
          onClick={handleHomeClick}
          className={`flex flex-col items-center justify-center py-1.5 px-3.5 rounded-2xl transition-all duration-200 cursor-pointer ${
            active === 'home'
              ? 'text-primary font-bold bg-primary/10'
              : 'text-muted-app hover:text-foreground-app'
          }`}
        >
          <LayoutDashboard className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Home</span>
        </button>

        {/* Challenges/Day Tab */}
        <button
          onClick={handleChallengeClick}
          className={`flex flex-col items-center justify-center py-1.5 px-3.5 rounded-2xl transition-all duration-200 cursor-pointer ${
            active === 'challenges'
              ? 'text-primary font-bold bg-primary/10'
              : 'text-muted-app hover:text-foreground-app'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Challenges</span>
        </button>

        {/* Progress Tab */}
        <button
          onClick={() => handlePlaceholderClick('Progress', onProgressClick)}
          className={`flex flex-col items-center justify-center py-1.5 px-3.5 rounded-2xl transition-all duration-200 cursor-pointer ${
            active === 'progress'
              ? 'text-primary font-bold bg-primary/10'
              : 'text-muted-app hover:text-foreground-app'
          }`}
        >
          <BarChart3 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Progress</span>
        </button>

        {/* Profile Tab */}
        <button
          onClick={() => handlePlaceholderClick('Profile', onProfileClick)}
          className={`flex flex-col items-center justify-center py-1.5 px-3.5 rounded-2xl transition-all duration-200 cursor-pointer ${
            active === 'profile'
              ? 'text-primary font-bold bg-primary/10'
              : 'text-muted-app hover:text-foreground-app'
          }`}
        >
          <User className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Profile</span>
        </button>

      </div>
    </div>
  );
};
