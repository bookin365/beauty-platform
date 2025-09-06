import React from "react";
import { useNavigate } from "react-router-dom";

export default function ObjectNew() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API: POST /owner/objects
    alert("Объект создан (заглушка)");
    navigate("/owner/objects");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Новый объект</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow space-y-3 max-w-2xl">
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Название" />
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Адрес" />
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Город" />
        <textarea className="w-full border rounded-lg px-3 py-2" rows={4} placeholder="Описание" />
        <div className="grid md:grid-cols-2 gap-3">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Телефон" />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Сайт / Instagram" />
        </div>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">Сохранить</button>
      </form>
    </div>
  );
}
