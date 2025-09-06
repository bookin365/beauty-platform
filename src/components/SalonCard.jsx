import React from "react";

const SalonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 -mt-12 relative z-10">
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/60"
          alt="salon logo"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">Beauty Residence</h2>
          <p className="text-sm text-gray-500">
            Makeup, Nailcare, Faccecare, Spa
          </p>
          <div className="flex items-center text-yellow-500 text-sm mt-1">
            ★ 4.5
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>123 Oak Street, Cityville, State</p>
        <p>
          <span className="text-green-500">● Open</span> · Working Hours
        </p>
        <p>(555) 555-5555</p>
      </div>
    </div>
  );
};

export default SalonCard;
