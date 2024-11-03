import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlowingButton({ children, className = '', onClick }: GlowingButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`relative group ${className}`}
    >
      {/* Animated background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
      
      {/* Sparkles */}
      <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce-slow">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="absolute -bottom-2 -left-2 text-blue-400 animate-bounce-slower">
        <Sparkles className="w-4 h-4" />
      </div>

      {/* Button content */}
      <div className="relative glass-effect bg-gradient-to-r from-blue-600/80 to-blue-400/80 hover:to-blue-500/80 px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center gap-2 justify-center group">
        <span className="relative">
          {/* Text glow effect */}
          <span className="absolute inset-0 text-blue-300 blur-sm">{children}</span>
          <span className="relative text-white">{children}</span>
        </span>
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
    </button>
  );
}