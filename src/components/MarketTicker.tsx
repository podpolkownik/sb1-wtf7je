import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const marketData = [
  { symbol: 'BTC', price: '67,890', change: '+5.2%', up: true },
  { symbol: 'ETH', price: '3,890', change: '+3.8%', up: true },
  { symbol: 'SOL', price: '145', change: '-2.1%', up: false },
  { symbol: 'BNB', price: '420', change: '+1.2%', up: true },
  { symbol: 'XRP', price: '0.65', change: '-0.8%', up: false },
];

export function MarketTicker() {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-b border-gray-800 overflow-hidden">
      <div className="relative">
        <div className="flex animate-ticker">
          {[...marketData, ...marketData].map((coin, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-6 py-2 whitespace-nowrap"
            >
              <span className="font-semibold">{coin.symbol}</span>
              <span className="text-gray-400">${coin.price}</span>
              <span className={`flex items-center gap-1 ${
                coin.up ? 'text-green-400' : 'text-red-400'
              }`}>
                {coin.up ? 
                  <TrendingUp className="w-4 h-4" /> : 
                  <TrendingDown className="w-4 h-4" />
                }
                {coin.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}