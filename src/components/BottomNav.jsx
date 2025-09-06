import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Heart, MessageSquare, Scissors } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2">
      <NavLink to="/" className="flex flex-col items-center text-gray-500" end>
        <Home className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </NavLink>

      <NavLink to="/services" className="flex flex-col items-center text-gray-500">
        <Scissors className="w-6 h-6" />
        <span className="text-xs">Services</span>
      </NavLink>

      <NavLink to="/favorites" className="flex flex-col items-center text-gray-500">
        <Heart className="w-6 h-6" />
        <span className="text-xs">Favorites</span>
      </NavLink>

      <NavLink to="/calendar" className="flex flex-col items-center text-gray-500">
        <Calendar className="w-6 h-6" />
        <span className="text-xs">Calendar</span>
      </NavLink>

      <NavLink to="/messages" className="flex flex-col items-center text-gray-500">
        <MessageSquare className="w-6 h-6" />
        <span className="text-xs">Messages</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
