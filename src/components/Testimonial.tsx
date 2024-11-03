import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  content: string;
  profit: string;
}

export function Testimonial({ name, role, image, content, profit }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="text-green-400 font-semibold">Прибыль: {profit}</div>
    </div>
  );
}