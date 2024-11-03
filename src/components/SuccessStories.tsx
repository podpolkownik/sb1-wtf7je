import React from 'react';
import { Star, Quote } from 'lucide-react';

const stories = [
  {
    name: 'Александр М.',
    role: 'Выпускник PRO курса',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'После 6 месяцев обучения мой торговый счет вырос на 312%. Самое ценное - это поддержка наставника и сообщества.',
    profit: '+312%',
    rating: 5
  },
  {
    name: 'Елена К.',
    role: 'Трейдер',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'Благодаря курсу я научилась управлять рисками и психологией. Теперь торговля приносит стабильный доход.',
    profit: '+187%',
    rating: 5
  },
  {
    name: 'Дмитрий В.',
    role: 'Инвестор',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: 'Профессиональный подход к обучению. Особенно впечатлила работа с реальными кейсами и торговыми сигналами.',
    profit: '+256%',
    rating: 5
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Истории успеха
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Присоединяйтесь к сотням успешных трейдеров, которые уже изменили свою жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-transparent backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500/50"
                />
                <div>
                  <h4 className="font-semibold text-lg">{story.name}</h4>
                  <p className="text-gray-400">{story.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
              
              <p className="text-gray-300 mb-4">{story.content}</p>
              
              <div className="text-green-400 font-semibold">
                Результат: {story.profit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}