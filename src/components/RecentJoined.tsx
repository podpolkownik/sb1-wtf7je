import React from 'react';

export function RecentJoined() {
  return (
    <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group">
      <div className="flex -space-x-4">
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop" 
          className="w-12 h-12 rounded-full ring-4 ring-gray-900 group-hover:ring-blue-900/50 transition-all duration-300" 
          alt="Student 1"
        />
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=40&h=40&auto=format&fit=crop" 
          className="w-12 h-12 rounded-full ring-4 ring-gray-900 group-hover:ring-blue-900/50 transition-all duration-300" 
          alt="Student 2"
        />
        <img 
          src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=40&h=40&auto=format&fit=crop" 
          className="w-12 h-12 rounded-full ring-4 ring-gray-900 group-hover:ring-blue-900/50 transition-all duration-300" 
          alt="Student 3"
        />
      </div>
      <div>
        <p className="font-semibold text-lg">Присоединились недавно</p>
        <p className="text-blue-400">+15 новых студентов за последние 24 часа</p>
      </div>
    </div>
  );
}