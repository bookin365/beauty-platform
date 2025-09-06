import React, { useState } from "react";
import { Search } from "lucide-react";

const SalonServicesTab = () => {
  const [search, setSearch] = useState("");

  const categories = [
    { id: 1, name: "Hair Care", count: 6 },
    { id: 2, name: "Hair Coloring & Highlights", count: 5 },
    { id: 3, name: "Nailcare", count: 9 },
    { id: 4, name: "Makeup", count: 7 },
    { id: 5, name: "Eyelash and Eyebrow Service", count: 8 },
    { id: 6, name: "Skin Care", count: 11 },
  ];

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Поиск */}
      <div className="p-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search Our Services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent flex-1 outline-none text-sm"
          />
        </div>
      </div>

      {/* Категории */}
      <div className="flex-1 px-4 space-y-3">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center bg-white shadow-sm rounded-lg py-3 px-4 hover:bg-gray-50 transition cursor-pointer"
          >
            <span className="font-medium">{c.name}</span>
            <span className="text-sm text-gray-500">({c.count})</span>
          </div>
        ))}
      </div>

      {/* Кнопка бронирования */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3">
        <button className="w-full bg-orange-500 text-white rounded-xl py-3 font-semibold text-lg shadow-md hover:bg-orange-600 transition">
          BOOK A SERVICE
        </button>
      </div>
    </div>
  );
};

export default SalonServicesTab;
