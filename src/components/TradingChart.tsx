import React from 'react';
import { Play, Lock } from 'lucide-react';

export function TradingChart() {
  return (
    <div className="relative py-10">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-black/40 backdrop-blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2832&auto=format&fit=crop" 
            alt="Trading Chart"
            className="w-full h-[600px] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-blue-500/30">
                <Lock className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">
                  Доступно после начала обучения
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Профессиональный торговый терминал
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Анализируйте рынок с помощью продвинутых инструментов, 
                стройте графики и совершайте сделки в одном интерфейсе
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Play className="w-4 h-4" />
                Демо-доступ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}