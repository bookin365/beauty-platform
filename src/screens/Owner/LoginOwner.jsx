import React from "react";
export default function LoginOwner(){
  return <div className="pt-20 px-4 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Вход владельца</h1>
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Email"/>
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Пароль" type="password"/>
      <button className="w-full bg-pink-600 text-white rounded-lg py-2">Войти</button>
    </div>
  </div>;
}
