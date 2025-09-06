import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Отзывы клиентов</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map(item => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
