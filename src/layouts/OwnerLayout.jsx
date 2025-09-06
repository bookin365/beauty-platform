import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4 font-bold text-pink-600 text-xl">Owner Panel</div>
        <nav className="px-4 space-y-2">
          <NavLink to="/owner" className={({isActive}) => isActive ? "block px-3 py-2 rounded bg-pink-50 text-pink-600" : "block px-3 py-2 rounded hover:bg-gray-100"}>Панель</NavLink>
          <NavLink to="/owner/objects" className={({isActive}) => isActive ? "block px-3 py-2 rounded bg-pink-50 text-pink-600" : "block px-3 py-2 rounded hover:bg-gray-100"}>Мои объекты</NavLink>
          <NavLink to="/owner/subscription" className={({isActive}) => isActive ? "block px-3 py-2 rounded bg-pink-50 text-pink-600" : "block px-3 py-2 rounded hover:bg-gray-100"}>Подписка</NavLink>
          <NavLink to="/owner/payments" className={({isActive}) => isActive ? "block px-3 py-2 rounded bg-pink-50 text-pink-600" : "block px-3 py-2 rounded hover:bg-gray-100"}>Платежи</NavLink>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1">
        <header className="bg-white border-b px-4 py-3 md:hidden">
          <div className="font-semibold">Кабинет владельца</div>
        </header>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerLayout;
