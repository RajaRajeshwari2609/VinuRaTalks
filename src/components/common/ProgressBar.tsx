import React from 'react';

export interface ProgressBarProps {
  value: number; // 0 to 100
  height?: number; // pixel height, e.g. 8
  className?: string;
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = 8,
  className = '',
  showLabel = false
}) => {
  const percentage = Math.max(0, Math.min(100, value));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1 text-xs font-semibold text-muted-app">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      ) }
      <div 
        className="w-full bg-slate-100 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
