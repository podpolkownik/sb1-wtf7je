import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Signal {
  pair: string;
  type: 'long' | 'short';
  entry: string;
  target: string;
  profit: string;
  date: string;
}

const recentSignals: Signal[] = [
  {
    pair: 'BTC/USDT',
    type: 'long',
    entry: '63,450',
    target: '69,800',
    profit: '+23.4%',
    date: '2024-03-15'
  },
  {
    pair: 'ETH/USDT',
    type: 'short',
    entry: '3,850',
    target: '3,400',
    profit: '+15.2%',
    date: '2024-03-14'
  },
  {
    pair: 'SOL/USDT',
    type: 'long',
    entry: '125',
    target: '145',
    profit: '+18.7%',
    date: '2024-03-13'
  }
];

export function SignalsPreview() {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-bold">Последние сигналы</h3>
          </div>
          <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
            Все сигналы
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {recentSignals.map((signal, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{signal.pair}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    signal.type === 'long' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {signal.type.toUpperCase()}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{signal.date}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="space-y-1">
                  <div className="text-gray-400">Вход: ${signal.entry}</div>
                  <div className="text-gray-400">Цель: ${signal.target}</div>
                </div>
                <div className={`flex items-center gap-1 ${
                  signal.type === 'long' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {signal.type === 'long' ? 
                    <ArrowUpRight className="w-4 h-4" /> : 
                    <ArrowDownRight className="w-4 h-4" />
                  }
                  {signal.profit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <button className="w-full bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors font-medium">
          Получить доступ к сигналам
        </button>
      </div>
    </div>
  );
}