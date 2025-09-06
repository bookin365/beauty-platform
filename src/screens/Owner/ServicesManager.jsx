import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ServicesManager() {
  const { id } = useParams();
  const [services, setServices] = useState([
    { id: "s1", name: "Маникюр", price: 40, duration: 60 },
    { id: "s2", name: "Педикюр", price: 60, duration: 90 },
  ]);
  const [form, setForm] = useState({ name: "", price: "", duration: "" });

  const addService = (e) => {
    e.preventDefault();
    if (!form.name) return;
    // TODO: POST /owner/objects/:id/services
    setServices((prev) => [
      ...prev,
      { id: `s${prev.length + 1}`, name: form.name, price: Number(form.price || 0), duration: Number(form.duration || 0) },
    ]);
    setForm({ name: "", price: "", duration: "" });
  };

  const remove = (sid) => {
    // TODO: DELETE /owner/objects/:id/services/:sid
    setServices((prev) => prev.filter((s) => s.id !== sid));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Услуги объекта</h1>
        <Link to={`/owner/objects/${id}`} className="text-pink-600">← Назад к объекту</Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Список услуг</h2>
          <ul className="divide-y">
            {services.map((s) => (
              <li key={s.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-500">{s.duration} мин • {s.price} ₾</div>
                </div>
                <button onClick={() => remove(s.id)} className="px-3 py-1 rounded border hover:bg-gray-50">Удалить</button>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={addService} className="bg-white p-4 rounded-xl shadow space-y-3">
          <h2 className="font-semibold">Добавить услугу</h2>
          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Название"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Цена, ₾"
              value={form.price}
              onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
              type="number"
              min="0"
            />
            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Длительность, мин"
              value={form.duration}
              onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
              type="number"
              min="0"
            />
          </div>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">Добавить</button>
        </form>
      </div>
    </div>
  );
}
