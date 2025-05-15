import React from 'react';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  color = 'bg-blue-500', 
  height = 2,
  className = ''
}) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`} style={{ height: `${height}px` }}>
      <div 
        className={`${color} rounded-full h-full transition-all duration-300 ease-in-out`}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;