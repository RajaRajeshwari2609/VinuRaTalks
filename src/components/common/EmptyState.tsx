import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  actionText,
  onAction,
  className = ''
}) => {
  return (
    <Card className={`flex flex-col items-center text-center p-8 border-dashed border-2 border-white/10 bg-white/2 ${className}`}>
      {icon && (
        <div className="mb-4 p-4 bg-primary/10 rounded-2xl text-primary animate-pulse-ring">
          {icon}
        </div>
      )}
      <h3 className="text-base font-bold text-foreground-app mb-1.5">{title}</h3>
      <p className="text-xs text-muted-app font-medium max-w-[280px] leading-relaxed mb-5">
        {description}
      </p>
      {actionText && onAction && (
        <Button size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </Card>
  );
};
