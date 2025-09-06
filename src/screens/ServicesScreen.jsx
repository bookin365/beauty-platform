import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SalonProfileScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <img
          src="https://via.placeholder.com/800x300"
          alt="Salon"
          className="w-full h-60 object-cover rounded-2xl"
        />
        <div className="absolute bottom-[-30px] left-6 bg-white p-4 rounded-xl shadow">
          <h1 className="text-2xl font-bold">Салон №{id}</h1>
          <p className="text-gray-600">Описание салона и его преимущества 💅</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-3">Услуги</h2>
        <ul className="space-y-2">
          <li className="border p-3 rounded-lg flex justify-between">
            <span>Маникюр</span>
            <button
              onClick={() => navigate(`/booking/${id}`)}
              className="bg-pink-500 text-white px-3 py-1 rounded-lg"
            >
              Записаться
            </button>
          </li>
          <li className="border p-3 rounded-lg flex justify-between">
            <span>Стрижка</span>
            <button
              onClick={() => navigate(`/booking/${id}`)}
              className="bg-pink-500 text-white px-3 py-1 rounded-lg"
            >
              Записаться
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalonProfileScreen;
