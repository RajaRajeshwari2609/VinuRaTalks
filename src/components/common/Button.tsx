import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-primary-foreground focus:ring-primary shadow-[0_4px_20px_rgba(255,87,34,0.25)] hover:shadow-[0_6px_25px_rgba(255,87,34,0.4)]',
    secondary: 'bg-white/5 hover:bg-white/10 text-foreground-app border border-white/10 focus:ring-primary',
    ghost: 'bg-transparent hover:bg-white/5 text-foreground-app focus:ring-primary',
    danger: 'bg-danger-app/10 hover:bg-danger-app/20 text-red-400 border border-danger-app/25 focus:ring-danger-app'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const currentVariant = variants[variant] || variants.primary;
  const currentSize = sizes[size] || sizes.md;

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyle} ${currentVariant} ${currentSize} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin text-current" />}
      {!loading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </button>
  );
};
