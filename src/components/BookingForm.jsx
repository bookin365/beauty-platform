import React, { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !service || !date) {
      alert("Заполните все поля!");
      return;
    }

    const booking = { name, phone, service, date };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/bookings", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      if (response.ok) {
        alert("Бронирование успешно отправлено!");
        setName("");
        setPhone("");
        setService("");
        setDate("");
      } else {
        alert("Ошибка при бронировании");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
      alert("Не удалось подключиться к серверу");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Записаться на услугу</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Выберите услугу</option>
          <option value="Маникюр">Маникюр</option>
          <option value="Педикюр">Педикюр</option>
          <option value="Стрижка">Стрижка</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white p-2 rounded"
        >
          Записаться
        </button>
      </form>
    </div>
  );
}
