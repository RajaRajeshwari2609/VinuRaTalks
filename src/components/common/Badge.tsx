import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'neutral',
  size = 'md',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center font-semibold rounded-full tracking-wide uppercase';
  
  const variants = {
    primary: 'bg-primary-light text-primary',
    success: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    warning: 'bg-amber-50 text-amber-600 border border-amber-100',
    danger: 'bg-red-50 text-red-600 border border-red-100',
    neutral: 'bg-slate-100 text-slate-600'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs'
  };

  return (
    <span
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
