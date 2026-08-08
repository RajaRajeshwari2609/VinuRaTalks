import React from 'react';

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'mobile-only' | 'dashboard' | 'landing' | 'full';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  size = 'landing',
  ...props
}) => {
  const sizes = {
    // Specifically tailored for evaluating at 390px mobile, but centered on larger screens
    'mobile-only': 'max-w-[390px] mx-auto w-full px-4',
    // Dashboard page is optimized for mobile size but expands gracefully
    'dashboard': 'max-w-md mx-auto w-full px-4 md:max-w-2xl lg:max-w-4xl py-6 md:py-8 pb-24 md:pb-8',
    // Landing page layout ranges from mobile to full-width desktop
    'landing': 'max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-16',
    'full': 'w-full px-4'
  };

  return (
    <div
      className={`${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
