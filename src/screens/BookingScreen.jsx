import React from "react";
import { useParams } from "react-router-dom";

const BookingScreen = () => {
  const { id } = useParams();

  return (
    <div className="pt-24 max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">📅 Запись в Салон №{id}</h1>
      <p className="text-gray-600 mb-6 text-center">
        Выберите удобное время и подтвердите запись
      </p>
      <select className="w-full border rounded-lg p-3 mb-4">
        <option>10:00</option>
        <option>12:00</option>
        <option>14:00</option>
        <option>16:00</option>
      </select>
      <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
        Подтвердить запись
      </button>
    </div>
  );
};

export default BookingScreen;
