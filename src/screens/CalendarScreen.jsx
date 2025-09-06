import React, { useState } from "react";

const CalendarScreen = () => {
  // Заглушка — список записей
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      salon: "Luxury Beauty",
      service: "Маникюр",
      date: "2025-08-20",
      time: "14:00",
      status: "Предстоящая",
    },
    {
      id: 2,
      salon: "Nail & Spa Studio",
      service: "Педикюр",
      date: "2025-08-10",
      time: "16:30",
      status: "Завершена",
    },
  ]);

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Мои записи</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-500">У вас пока нет записей.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-lg font-semibold">{a.salon}</h2>
                <p className="text-gray-500 text-sm">{a.service}</p>
                <p className="text-gray-600">
                  {a.date} • {a.time}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-lg text-sm ${
                  a.status === "Предстоящая"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {a.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarScreen;
