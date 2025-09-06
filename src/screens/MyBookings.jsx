import React, { useState } from "react";

const MyBookings = () => {
  const [bookings] = useState([
    {
      id: 1,
      salon: "Beauty Studio",
      service: "Маникюр",
      date: "2025-09-01",
      time: "14:00",
      status: "upcoming",
    },
    {
      id: 2,
      salon: "Luxury Hair",
      service: "Стрижка",
      date: "2025-08-10",
      time: "12:00",
      status: "past",
    },
    {
      id: 3,
      salon: "SPA Relax",
      service: "Массаж",
      date: "2025-08-30",
      time: "16:00",
      status: "upcoming",
    },
  ]);

  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredBookings = bookings.filter(
    (b) => b.status === activeTab
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Мои записи</h1>

      {/* Вкладки */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`flex-1 py-2 text-center ${
            activeTab === "upcoming"
              ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Предстоящие
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`flex-1 py-2 text-center ${
            activeTab === "past"
              ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Прошедшие
        </button>
      </div>

      {/* Список записей */}
      {filteredBookings.length > 0 ? (
        <div className="space-y-4">
          {filteredBookings.map((b) => (
            <div
              key={b.id}
              className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{b.salon}</h2>
              <p className="text-gray-600">{b.service}</p>
              <p className="text-gray-500 text-sm">
                {b.date} — {b.time}
              </p>

              {b.status === "upcoming" && (
                <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Отменить запись
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          Нет записей в этом разделе.
        </p>
      )}
    </div>
  );
};

export default MyBookings;
