import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ObjectEdit() {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API: PATCH /owner/objects/:id
    alert(`Изменения для ${id} сохранены (заглушка)`);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Редактирование объекта</h1>
        <div className="space-x-2">
          <Link to={`/owner/objects/${id}/gallery`} className="px-3 py-2 rounded border hover:bg-gray-50">
            Галерея
          </Link>
          <Link to={`/owner/objects/${id}/services`} className="px-3 py-2 rounded border hover:bg-gray-50">
            Услуги
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow space-y-3 max-w-2xl">
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Название" defaultValue="Pink Studio" />
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Адрес" defaultValue="Tbilisi, Rustaveli 10" />
        <textarea className="w-full border rounded-lg px-3 py-2" rows={4} placeholder="Описание" defaultValue="Красивое описание салона" />
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">Сохранить</button>
      </form>
    </div>
  );
}
