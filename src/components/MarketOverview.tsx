import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

const marketData = [
  { symbol: 'BTC', name: 'Bitcoin', price: '67,890', change: '+5.2%', up: true },
  { symbol: 'ETH', name: 'Ethereum', price: '3,890', change: '+3.8%', up: true },
  { symbol: 'SOL', name: 'Solana', price: '145', change: '-2.1%', up: false },
  { symbol: 'BNB', name: 'Binance', price: '420', change: '+1.2%', up: true },
  { symbol: 'XRP', name: 'Ripple', price: '0.65', change: '-0.8%', up: false },
  { symbol: 'ADA', name: 'Cardano', price: '0.89', change: '+4.2%', up: true }
];

export function MarketOverview() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Обзор рынка</h2>
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            Полный анализ
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketData.map((coin) => (
            <div 
              key={coin.symbol}
              className="bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-transparent backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{coin.symbol}</h3>
                  <p className="text-gray-400">{coin.name}</p>
                </div>
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
              <div className="text-2xl font-bold">${coin.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}