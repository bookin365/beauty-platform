import React from "react";

const SalonCard = ({ salon }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{salon.name}</h2>
      <p className="text-gray-600">{salon.city}</p>
    </div>
  );
};

export default SalonCard;
