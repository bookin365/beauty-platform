import React from "react";

export default function Subscription() {
  const plans = [
    { id: "free", name: "Free", price: "0 ₾", features: ["1 объект", "5 фото в галерее", "Базовые метрики"] },
    { id: "pro", name: "Pro", price: "49 ₾/мес", features: ["3 объекта", "Неограниченные фото", "Расширенная аналитика"] },
    { id: "biz", name: "Business", price: "99 ₾/мес", features: ["10 объектов", "Приоритет в поиске", "Поддержка 24/7"] },
  ];

  const select = (id) => {
    // TODO: POST /owner/subscription
    alert(`Выбран план: ${id} (заглушка)`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Подписка</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.id} className="bg-white p-5 rounded-xl shadow">
            <div className="text-sm text-gray-500">{p.name}</div>
            <div className="text-3xl font-bold my-2">{p.price}</div>
            <ul className="text-sm space-y-1 mb-4">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <button onClick={() => select(p.id)} className="w-full bg-pink-600 text-white rounded-lg py-2">Выбрать</button>
          </div>
        ))}
      </div>
    </div>
  );
}
