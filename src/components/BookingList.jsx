import React, { useEffect, useState } from "react";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">📋 Список бронирований</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-500">Пока нет бронирований...</p>
      ) : (
        <ul className="space-y-3">
          {bookings.map((b) => (
            <li
              key={b._id}
              className="p-4 border rounded-lg shadow bg-white flex justify-between"
            >
              <span>👤 {b.name}</span>
              <span>💅 {b.service}</span>
              <span>📅 {b.date}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BookingList;
