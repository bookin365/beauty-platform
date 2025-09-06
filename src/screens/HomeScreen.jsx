// src/screens/HomeScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const salons = [
    { id: 1, name: "Beauty Lux", address: "ул. Ленина, 10", image: "/images/salon1.jpg" },
    { id: 2, name: "Nail Studio", address: "ул. Победы, 25", image: "/images/salon2.jpg" },
    { id: 3, name: "Hair Queen", address: "ул. Мира, 7", image: "/images/salon3.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Салоны рядом</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {salons.map((salon) => (
          <div
            key={salon.id}
            onClick={() => navigate(`/salon/${salon.id}`)}
            className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={salon.image}
              alt={salon.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{salon.name}</h2>
              <p className="text-gray-500">{salon.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
