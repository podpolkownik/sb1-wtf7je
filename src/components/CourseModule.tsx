import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface CourseModuleProps {
  icon: LucideIcon;
  title: string;
  duration: string;
  topics: string[];
}

export function CourseModule({ icon: Icon, title, duration, topics }: CourseModuleProps) {
  return (
    <div className="glass-effect gradient-border p-6 rounded-xl hover-card group animate-float">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-lg group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm pulse-ring">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-glow">{title}</h3>
          <p className="text-blue-400">{duration}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-3 group/item hover-scale">
            <div className="p-1 rounded-full bg-green-500/20 group-hover/item:bg-green-500/30 transition-colors">
              <Check className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-gray-300 group-hover/item:text-blue-400 transition-colors">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
}