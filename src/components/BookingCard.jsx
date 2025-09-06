import React from "react";
import { Link } from "react-router-dom";

const BookingCard = ({ salon }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
      <img
        src={salon.image}
        alt={salon.name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h2 className="text-lg font-bold mt-2">{salon.name}</h2>
      <p className="text-gray-500 text-sm">{salon.category}</p>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/salon/${salon.id}`}
          className="text-pink-600 font-medium hover:underline"
        >
          Подробнее
        </Link>
        <Link
          to={`/booking/${salon.id}`}
          className="bg-pink-500 text-white px-3 py-1 rounded-xl hover:bg-pink-600"
        >
          Забронировать
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
