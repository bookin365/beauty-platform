import React from 'react';

export default function Header() {
  return (
    <header className="bg-pink-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Beauty Platform</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:underline">Главная</a></li>
          <li><a href="#" className="hover:underline">Услуги</a></li>
          <li><a href="#" className="hover:underline">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}
