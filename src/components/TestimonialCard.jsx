import React from 'react';

export default function TestimonialCard({ name, text, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
  );
}
