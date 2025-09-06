import React from "react";
import { Link } from "react-router-dom";

export default function DashboardOwner() {
  // Заглушки статистики
  const stats = [
    { label: "Мои объекты", value: 2, to: "/owner/objects" },
    { label: "Активные записи сегодня", value: 5, to: "/owner/objects" },
    { label: "Выручка за месяц", value: "2,340 ₾", to: "/owner/payments" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Панель владельца</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.to}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="text-gray-500">{s.label}</div>
            <div className="text-2xl font-bold">{s.value}</div>
          </Link>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Последние записи</h2>
          <Link to="/owner/objects" className="text-pink-600 text-sm">Все записи</Link>
        </div>
        <ul className="divide-y">
          {[1,2,3].map((i) => (
            <li key={i} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">Клиент {i}</div>
                <div className="text-sm text-gray-500">Сегодня • 14:{10+i}</div>
              </div>
              <div className="text-sm">Маникюр — 40 ₾</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
