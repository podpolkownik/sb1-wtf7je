import React from 'react';
import { Play, Users, Calendar, Clock } from 'lucide-react';

export function LiveWebinar() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790551116-18e150f248e3?q=80&w=2832&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
          </div>
          
          <div className="relative p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Сейчас</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Бесплатный вебинар: "Секреты успешного трейдинга"
              </h2>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>1,234 участников</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Сегодня</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>19:00 МСК</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Присоединиться к вебинару
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}