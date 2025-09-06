import React from "react";
export default function Contact(){
  return <div className="pt-20 px-4 max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Контакты</h1>
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Ваш email"/>
      <textarea className="w-full border rounded-lg px-3 py-2" placeholder="Сообщение" rows={4}/>
      <button className="bg-pink-600 text-white rounded-lg px-4 py-2">Отправить</button>
    </div>
  </div>;
}