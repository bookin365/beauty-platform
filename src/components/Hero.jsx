import React from 'react';

export default function Hero() {
  return (
    <section className="bg-pink-100 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 text-pink-600">
        Красота начинается здесь
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Запишитесь на процедуры и почувствуйте себя великолепно.
      </p>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
        Записаться
      </button>
    </section>
  );
}
