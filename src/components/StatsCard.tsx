import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  isHighlighted?: boolean;
}

export function StatsCard({ icon: Icon, label, isHighlighted }: StatsCardProps) {
  return (
    <div className={`flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer glass-effect hover-card
      ${isHighlighted 
        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 hover:from-yellow-500/30 hover:to-orange-500/30 neon-glow' 
        : 'bg-gradient-to-r from-blue-500/20 to-blue-400/20 text-blue-400 hover:from-blue-500/30 hover:to-blue-400/30'}`}>
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}