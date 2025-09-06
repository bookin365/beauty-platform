// src/screens/FavoritesScreen.jsx
import React from "react";
import { Link } from "react-router-dom";

const FavoritesScreen = () => {
  const favorites = [
    { id: 1, name: "Beauty Lux", image: "/images/salon1.jpg" },
    { id: 2, name: "Style Studio", image: "/images/salon2.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Избранные салоны</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((salon) => (
          <Link key={salon.id} to={`/salon/${salon.id}`}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <img
                src={salon.image}
                alt={salon.name}
                className="rounded-t-xl w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg font-semibold">{salon.name}</h2>
                <p className="text-sm text-gray-500">Услуги красоты</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoritesScreen;
