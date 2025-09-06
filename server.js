// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/beauty-platform")
  .then(() => console.log("✅ MongoDB подключена"))
  .catch((err) => console.error("❌ Ошибка подключения к MongoDB:", err));

// Модель бронирования
const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// API маршруты
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Бронирование сохранено!" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка при сохранении" });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении" });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://127.0.0.1:${PORT}`);
});
