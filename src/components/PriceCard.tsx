import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PriceCard({ title, price, features, isPopular }: PriceCardProps) {
  return (
    <div className={`relative rounded-2xl p-6 sm:p-8 glass-effect hover-card animate-float ${
      isPopular 
        ? 'gradient-border neon-glow' 
        : 'bg-gradient-to-br from-gray-800/40 to-transparent border border-gray-700/50'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-0 sm:w-auto">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium neon-glow flex items-center gap-2 justify-center whitespace-nowrap mx-auto">
            <Sparkles className="w-4 h-4" />
            Популярный выбор
            <Sparkles className="w-4 h-4" />
          </span>
        </div>
      )}
      
      <div className="text-center mb-8 mt-4">
        <h3 className="text-2xl font-bold mb-4 text-glow">{title}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">₽{price}</span>
          <span className="text-gray-400">/ единоразово</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 group hover-scale">
            <div className="p-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors pulse-ring">
              <Check className={`w-4 h-4 ${isPopular ? 'text-blue-400' : 'text-green-400'}`} />
            </div>
            <span className="group-hover:text-blue-400 transition-colors">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all relative overflow-hidden ${
        isPopular
          ? 'glass-effect bg-gradient-to-r from-blue-600/80 to-blue-400/80 hover:to-blue-500/80 text-white neon-glow'
          : 'bg-white/10 backdrop-blur-sm text-blue-400 hover:bg-blue-500/20 border border-blue-500/30'
      }`}>
        <span className="relative z-10">Начать обучение</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
        
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/20 to-blue-600/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      </button>
    </div>
  );
}