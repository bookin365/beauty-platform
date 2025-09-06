// src/screens/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    console.log("Данные для регистрации:", formData);
    // TODO: подключим API позже
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Повторите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Уже есть аккаунт?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-pink-500 cursor-pointer"
        >
          Войти
        </span>
      </p>
    </div>
  );
};

export default Register;
