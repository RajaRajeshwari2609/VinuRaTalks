import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padded?: boolean;
  variant?: 'white' | 'muted' | 'bordered';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padded = true,
  variant = 'white',
  ...props
}) => {
  const baseStyle = 'rounded-3xl transition-all duration-300';
  
  const variants = {
    white: 'bg-surface/80 border border-white/8 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
    muted: 'bg-white/5 border border-white/5 backdrop-blur-md',
    bordered: 'bg-transparent border border-white/8'
  };

  const hoverStyle = hover 
    ? 'hover:shadow-[0_12px_40px_rgba(255,87,34,0.08)] hover:border-primary/20 hover:-translate-y-0.5' 
    : '';

  const paddingStyle = padded ? 'p-6 md:p-8' : '';

  return (
    <div
      className={`${baseStyle} ${variants[variant]} ${hoverStyle} ${paddingStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
