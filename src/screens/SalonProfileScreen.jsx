import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SalonProfileScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("services"); // переключатель

  const galleryImages = [
    "https://picsum.photos/400/250?random=11",
    "https://picsum.photos/400/250?random=12",
    "https://picsum.photos/400/250?random=13",
    "https://picsum.photos/400/250?random=14",
  ];

  const services = ["Маникюр", "Педикюр", "Стрижка", "Окрашивание"];

  return (
    <div className="pt-24 max-w-5xl mx-auto">
      {/* Шапка салона */}
      <div className="relative rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://picsum.photos/900/300?random=10"
          alt="Salon"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
          <h1 className="text-3xl font-bold text-white">Салон №{id}</h1>
          <p className="text-gray-200">Лучшие мастера и уютная атмосфера 💅</p>
        </div>
      </div>

      {/* Табы */}
      <div className="mt-8 flex space-x-6 border-b">
        <button
          onClick={() => setActiveTab("services")}
          className={`pb-2 ${
            activeTab === "services"
              ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
              : "text-gray-600 hover:text-pink-500"
          }`}
        >
          Услуги
        </button>
        <button
          onClick={() => setActiveTab("gallery")}
          className={`pb-2 ${
            activeTab === "gallery"
              ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
              : "text-gray-600 hover:text-pink-500"
          }`}
        >
          Фото
        </button>
      </div>

      {/* Контент табов */}
      <div className="mt-6">
        {activeTab === "services" && (
          <div className="space-y-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 bg-white shadow rounded-xl"
              >
                <span>{service}</span>
                <button
                  onClick={() => navigate(`/booking/${id}`)}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={src}
                  alt={`Фото ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SalonProfileScreen;
