import React from "react";

const ProfileScreen = () => {
  const user = {
    name: "Анна Иванова",
    email: "anna@example.com",
    phone: "+995 555 123 456",
  };

  return (
    <div className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Профиль</h1>

      {/* Карточка профиля */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/100?img=5"
          alt="avatar"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.phone}</p>
        </div>
      </div>

      {/* Настройки */}
      <div className="mt-6 space-y-4">
        <button className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-xl text-left px-4">
          ✏️ Редактировать профиль
        </button>
        <button className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-xl text-left px-4">
          🔒 Сменить пароль
        </button>
        <button className="w-full bg-red-100 hover:bg-red-200 py-3 rounded-xl text-left px-4 text-red-600 font-semibold">
          🚪 Выйти
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
