import React from 'react';
import { Card } from './Card';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendDirection = 'neutral',
  description,
  className = ''
}) => {
  const trendColors = {
    up: 'text-emerald-600 bg-emerald-50 border border-emerald-100',
    down: 'text-red-600 bg-red-50 border border-red-100',
    neutral: 'text-slate-500 bg-slate-50 border border-slate-100'
  };

  return (
    <Card className={`flex flex-col justify-between overflow-hidden relative ${className}`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-muted-app uppercase tracking-wider">{title}</span>
        {icon && <div className="text-primary p-2 bg-indigo-50/50 rounded-xl">{icon}</div>}
      </div>

      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-2xl font-bold tracking-tight text-foreground-app">{value}</span>
        {trend && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${trendColors[trendDirection]}`}>
            {trend}
          </span>
        )}
      </div>

      {description && (
        <p className="text-xs text-muted-app mt-2 font-medium line-clamp-1">{description}</p>
      )}
    </Card>
  );
};
