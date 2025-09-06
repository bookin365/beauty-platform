import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-pink-600">Beauty Platform</Link>
        <div className="flex items-center space-x-6">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-pink-600 font-semibold" : "hover:text-pink-600"}>Главная</NavLink>
          <NavLink to="/favorites" className={({isActive}) => isActive ? "text-pink-600 font-semibold" : "hover:text-pink-600"}>Избранное</NavLink>
          <NavLink to="/calendar" className={({isActive}) => isActive ? "text-pink-600 font-semibold" : "hover:text-pink-600"}>Записи</NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "text-pink-600 font-semibold" : "hover:text-pink-600"}>Профиль</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
