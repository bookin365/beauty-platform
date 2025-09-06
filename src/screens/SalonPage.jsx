import React from "react";
import { useParams, Link } from "react-router-dom";

const SalonPage = () => {
  const { id } = useParams();
  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-pink-600">← Назад</Link>
      </div>
      <h1 className="text-2xl font-bold mb-2">Салон #{id}</h1>
      <p className="text-gray-500 mb-6">Адрес, описание, контакты (номер скрываем на карточке), кнопка «Как добраться».</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Галерея</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Услуги</h2>
          <ul className="space-y-2">
            <li className="flex justify-between"><span>Маникюр</span><span className="font-semibold">40 ₾</span></li>
            <li className="flex justify-between"><span>Педикюр</span><span className="font-semibold">60 ₾</span></li>
            <li className="flex justify-between"><span>Стрижка</span><span className="font-semibold">50 ₾</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalonPage;
