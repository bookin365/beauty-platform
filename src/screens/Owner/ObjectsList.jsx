import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ObjectsList() {
  const navigate = useNavigate();

  // Заглушка объектов
  const objects = [
    { id: "salon-1", name: "Pink Studio", address: "Tbilisi, Rustaveli 10", status: "Активен" },
    { id: "salon-2", name: "Glow Beauty", address: "Batumi, Chavchavadze 5", status: "На модерации" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Мои объекты</h1>
        <Link to="/owner/objects/new" className="bg-pink-600 text-white px-4 py-2 rounded-lg">
          + Добавить объект
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3">Название</th>
              <th className="text-left px-4 py-3">Адрес</th>
              <th className="text-left px-4 py-3">Статус</th>
              <th className="text-right px-4 py-3">Действия</th>
            </tr>
          </thead>
          <tbody>
            {objects.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="px-4 py-3 font-medium">{o.name}</td>
                <td className="px-4 py-3 text-gray-600">{o.address}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded bg-pink-50 text-pink-600">{o.status}</span>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => navigate(`/owner/objects/${o.id}`)}
                    className="px-3 py-1 rounded border hover:bg-gray-50"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => navigate(`/owner/objects/${o.id}/gallery`)}
                    className="px-3 py-1 rounded border hover:bg-gray-50"
                  >
                    Галерея
                  </button>
                  <button
                    onClick={() => navigate(`/owner/objects/${o.id}/services`)}
                    className="px-3 py-1 rounded border hover:bg-gray-50"
                  >
                    Услуги
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
