import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  src,
  size = 'md',
  className = '',
  ...props
}) => {
  const getInitials = (userName: string) => {
    const parts = userName.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return userName.slice(0, 2).toUpperCase();
  };

  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl'
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden select-none bg-indigo-50 border border-indigo-100 text-primary font-bold ${currentSize} ${className}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Remove image on error to trigger fallback text
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};
