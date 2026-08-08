import React from 'react';

export interface ProgressRingProps {
  value: number; // 0 to 100
  size?: number; // width and height in pixels
  strokeWidth?: number;
  className?: string;
  label?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  value,
  size = 120,
  strokeWidth = 10,
  className = '',
  label
}) => {
  const percentage = Math.max(0, Math.min(100, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90 w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        {/* Track circle */}
        <circle
          className="text-slate-100"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className="text-primary transition-all duration-1000 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold tracking-tight text-foreground-app">{percentage}</span>
        {label && <span className="text-[10px] font-medium text-muted-app uppercase tracking-wider">{label}</span>}
      </div>
    </div>
  );
};
