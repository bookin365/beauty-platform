import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Изменения сохранены (позже привяжем к бэкенду)");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Мой профиль</h1>

      {/* Аватар */}
      <div className="flex items-center space-x-6 mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="avatar"
          className="w-24 h-24 rounded-full border"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
          Изменить фото
        </button>
      </div>

      {/* Данные пользователя */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-600">Имя</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-600">Телефон</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
      </div>

      {/* Смена пароля */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-semibold">Сменить пароль</h2>
        <div>
          <label className="block text-gray-600">Текущий пароль</label>
          <input
            type="password"
            name="current"
            value={passwords.current}
            onChange={handlePasswordChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-600">Новый пароль</label>
          <input
            type="password"
            name="new"
            value={passwords.new}
            onChange={handlePasswordChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-600">Подтвердите новый пароль</label>
          <input
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handlePasswordChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
      </div>

      {/* Сохранение */}
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Сохранить изменения
      </button>
    </div>
  );
};

export default Profile;
