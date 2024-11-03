import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function Timer() {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 px-6 py-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
      <Clock className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
      <div className="text-2xl font-mono bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
        {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </div>
      <div className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">до конца акции</div>
    </div>
  );
}