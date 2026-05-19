import React from 'react';
import { cn } from '../../utils/cn';

export function VisualAsset({ className, colorFrom = 'from-primary/20', colorTo = 'to-card' }) {
  return (
    <div className={cn(
      `bg-gradient-to-br ${colorFrom} ${colorTo} rounded-2xl border border-white/5 backdrop-blur-sm relative overflow-hidden`,
      className
    )}>
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
    </div>
  );
}