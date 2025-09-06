import React, { useMemo, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar as CalendarIcon,
  Clock,
  User2,
  Check,
} from "lucide-react";

/**
 * Страница салона:
 * - Вкладки: Услуги / Фото / Отзывы / Записи
 * - Отзывы: форма с оценкой (звезды) + текст
 * - Фото: модалка с перелистыванием и свайпами (влево/вправо, закрытие свайпом вверх)
 * - Запись: пошаговый мастер-флоу (услуга → мастер → дата → время → подтверждение)
 * Все данные — моковые, позже подключим бэкенд.
 */

const nextDays = (n = 7) => {
  const days = [];
  const now = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push(d);
  }
  return days;
};

const timeSlots = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
];

const SalonProfile = () => {
  const { id } = useParams();

  // ---- мок-данные салона (позже заменим на реальные) ----
  const salon = {
    id,
    name: "Beauty Studio",
    cover:
      "https://images.unsplash.com/photo-1589983846997-85bc1c94de6b?auto=format&fit=crop&w=1200&q=80",
    services: [
      { id: "srv1", name: "Маникюр", price: "40 ₾", durationMin: 60 },
      { id: "srv2", name: "Педикюр", price: "60 ₾", durationMin: 90 },
      { id: "srv3", name: "Стрижка", price: "50 ₾", durationMin: 45 },
    ],
    staff: [
      { id: "st1", name: "Анна", skills: ["Маникюр", "Педикюр"] },
      { id: "st2", name: "Мария", skills: ["Стрижка"] },
      { id: "st3", name: "Елена", skills: ["Маникюр", "Стрижка"] },
    ],
    photos: [
      "https://images.unsplash.com/photo-1589983846997-85bc1c94de6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593697821269-5a26a68ee9c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601042876276-03a3b5169e87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd1e3f0b782?auto=format&fit=crop&w=800&q=80",
    ],
  };

  // ---- вкладки ----
  const [activeTab, setActiveTab] = useState("services");

  // ---- отзывы ----
  const [reviews, setReviews] = useState([
    { id: 1, name: "Анна", rating: 5, text: "Очень понравилось, мастера профи!" },
    { id: 2, name: "Мария", rating: 4, text: "Уютно и качественно, вернусь ещё." },
  ]);
  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((acc, r) => acc + (r.rating || 0), 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewStars, setNewReviewStars] = useState(5);

  const addReview = () => {
    if (!newReviewText.trim()) return;
    const entry = {
      id: Date.now(),
      name: "Вы",
      rating: newReviewStars,
      text: newReviewText.trim(),
    };
    setReviews([entry, ...reviews]);
    setNewReviewText("");
    setNewReviewStars(5);
  };

  // ---- модалка фото с жестами ----
  const [selectedImage, setSelectedImage] = useState(null);
  const touchStart = useRef({ x: 0, y: 0 });

  const onTouchStart = (e) => {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;

    // свайп вверх — закрыть
    if (dy < -50 && Math.abs(dx) < 60) {
      setSelectedImage(null);
      return;
    }
    // горизонтальные свайпы — навигация
    if (dx > 60) handleImageNav("prev");
    else if (dx < -60) handleImageNav("next");
  };

  const handleImageNav = (direction) => {
    if (!selectedImage) return;
    const idx = salon.photos.indexOf(selectedImage);
    const nextIdx =
      direction === "next"
        ? (idx + 1) % salon.photos.length
        : (idx - 1 + salon.photos.length) % salon.photos.length;
    setSelectedImage(salon.photos[nextIdx]);
  };

  // ---- пошаговая запись ----
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1-сервис,2-мастер,3-дата,4-время,5-итог
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(nextDays(7)[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookings, setBookings] = useState([]); // локально для таба "Записи"

  const openBooking = (service) => {
    setSelectedService(service || salon.services[0]);
    setSelectedStaff(null);
    setSelectedDate(nextDays(7)[0]);
    setSelectedTime(null);
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  const confirmBooking = () => {
    if (!selectedService || !selectedStaff || !selectedDate || !selectedTime)
      return;
    const record = {
      id: Date.now(),
      service: selectedService,
      staff: selectedStaff,
      date: selectedDate,
      time: selectedTime,
    };
    setBookings([record, ...bookings]);
    setIsBookingOpen(false);
    // Можно показать тост. Пока — alert:
    alert("Запись создана!");
    setActiveTab("bookings");
  };

  const staffForService = useMemo(() => {
    if (!selectedService) return salon.staff;
    return salon.staff.filter((s) => s.skills.includes(selectedService.name));
  }, [selectedService, salon.staff]);

  const days = nextDays(10);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Обложка + рейтинг по отзывам */}
      <div className="relative h-56 w-full">
        <img
          src={salon.cover}
          alt="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">{salon.name}</h1>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90">{averageRating}</span>
            <span className="text-white/70 text-sm">
              ({reviews.length}) 
            </span>
          </div>
        </div>
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <Heart className="w-5 h-5 text-pink-500" />
        </button>
      </div>

      {/* Табы */}
      <div className="flex border-b bg-white sticky top-0 z-10">
        {[
          { key: "services", label: "Услуги" },
          { key: "photos", label: "Фото" },
          { key: "reviews", label: "Отзывы" },
          { key: "bookings", label: "Записи" },
        ].map((t) => (
          <button
            key={t.key}
            className={`flex-1 py-3 text-center ${
              activeTab === t.key
                ? "border-b-2 border-pink-500 text-pink-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Контент табов */}
      <div className="p-4 max-w-screen-sm mx-auto">
        {/* Услуги */}
        {activeTab === "services" && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Наши услуги</h2>
            </div>
            <div className="space-y-2">
              {salon.services.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
                >
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-gray-500 text-sm">
                      Длительность ~ {s.durationMin} мин
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">{s.price}</span>
                    <button
                      className="bg-pink-500 text-white px-3 py-1 rounded-lg"
                      onClick={() => openBooking(s)}
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Фото */}
        {activeTab === "photos" && (
          <div>
            <h2 className="text-lg font-bold mb-3">Фотогалерея</h2>
            <div className="grid grid-cols-2 gap-2">
              {salon.photos.map((p, idx) => (
                <img
                  key={idx}
                  src={p}
                  alt="photo"
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Отзывы */}
        {activeTab === "reviews" && (
          <div>
            <h2 className="text-lg font-bold mb-3">Отзывы</h2>

            {/* форма отзыва */}
            <div className="bg-white p-3 rounded-lg shadow mb-4">
              <p className="mb-2 font-medium">Ваша оценка</p>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    aria-label={`Оценка ${n}`}
                    onClick={() => setNewReviewStars(n)}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        n <= newReviewStars ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill={n <= newReviewStars ? "#FACC15" : "none"}
                    />
                  </button>
                ))}
              </div>
              <textarea
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                placeholder="Напишите свой отзыв..."
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-pink-400"
              />
              <button
                onClick={addReview}
                className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg"
              >
                Оставить отзыв
              </button>
            </div>

            {/* список отзывов */}
            <div className="space-y-2">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white p-3 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold">{r.name}</p>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className={`w-4 h-4 ${
                            n <= (r.rating || 0)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill={n <= (r.rating || 0) ? "#FACC15" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Записи (локально созданные) */}
        {activeTab === "bookings" && (
          <div>
            <h2 className="text-lg font-bold mb-3">Ваши записи</h2>
            {!bookings.length ? (
              <p className="text-gray-600">Пока нет записей.</p>
            ) : (
              <div className="space-y-2">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white p-3 rounded-lg shadow flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold">{b.service.name}</p>
                      <p className="text-sm text-gray-600">
                        {b.staff.name} ·{" "}
                        {b.date.toLocaleDateString()} · {b.time}
                      </p>
                    </div>
                    <span className="text-pink-600 font-semibold">
                      {b.service.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Общая кнопка снизу — открыть запись без выбора услуги */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
        <button
          className="w-full bg-pink-500 text-white py-3 rounded-lg text-lg font-semibold"
          onClick={() => openBooking()}
        >
          Записаться
        </button>
      </div>

      {/* Модалка Фото (мобильная ширина + blur + свайпы) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            className="relative w-full max-w-sm mx-auto"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              className="absolute -top-10 right-0 text-white"
              onClick={() => setSelectedImage(null)}
              aria-label="Закрыть"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
              onClick={() => handleImageNav("prev")}
              aria-label="Назад"
            >
              <ChevronLeft size={32} />
            </button>
            <img
              src={selectedImage}
              alt="photo"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
              onClick={() => handleImageNav("next")}
              aria-label="Вперёд"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}

      {/* Модалка Записи (пошаговая) */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center">
          <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl">
            {/* Заголовок + шаги */}
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Новая запись</h3>
              <button
                aria-label="Закрыть"
                onClick={() => setIsBookingOpen(false)}
              >
                <X />
              </button>
            </div>

            {/* Индикатор шагов */}
            <div className="px-4 py-3 border-b">
              <div className="flex items-center justify-between">
                {[
                  { step: 1, title: "Услуга" },
                  { step: 2, title: "Мастер" },
                  { step: 3, title: "Дата" },
                  { step: 4, title: "Время" },
                  { step: 5, title: "Итог" },
                ].map((s, i) => {
                  const active = bookingStep === s.step;
                  const passed = bookingStep > s.step;
                  return (
                    <div key={s.step} className="flex-1 flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          active
                            ? "bg-pink-500 text-white"
                            : passed
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {passed ? <Check size={16} /> : s.step}
                      </div>
                      {i < 4 && (
                        <div className="h-1 flex-1 mx-2 rounded bg-gray-200">
                          <div
                            className={`h-1 rounded ${
                              bookingStep > s.step ? "bg-green-500" : ""
                            }`}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Контент шагов */}
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {/* Шаг 1 — Услуга */}
              {bookingStep === 1 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <CalendarIcon className="w-5 h-5" />
                    <span>Выберите услугу</span>
                  </div>
                  <div className="space-y-2">
                    {salon.services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedService(s)}
                        className={`w-full text-left p-3 rounded-lg border ${
                          selectedService?.id === s.id
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{s.name}</span>
                          <span className="font-semibold">{s.price}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          ~ {s.durationMin} мин
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 2 — Мастер */}
              {bookingStep === 2 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <User2 className="w-5 h-5" />
                    <span>Выберите мастера</span>
                  </div>
                  <div className="space-y-2">
                    {staffForService.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedStaff(m)}
                        className={`w-full text-left p-3 rounded-lg border ${
                          selectedStaff?.id === m.id
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="font-medium">{m.name}</div>
                        <div className="text-sm text-gray-500">
                          Навыки: {m.skills.join(", ")}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 3 — Дата */}
              {bookingStep === 3 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <CalendarIcon className="w-5 h-5" />
                    <span>Выберите дату</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {days.map((d, i) => {
                      const dd = d.toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                      });
                      const wd = d
                        .toLocaleDateString("ru-RU", { weekday: "short" })
                        .replace(".", "");
                      const active =
                        d.toDateString() === selectedDate.toDateString();
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(d)}
                          className={`p-2 rounded-lg border text-center ${
                            active
                              ? "border-pink-500 bg-pink-50"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="text-xs text-gray-500">{wd}</div>
                          <div className="font-semibold">{dd}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Шаг 4 — Время */}
              {bookingStep === 4 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>Выберите время</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 rounded-lg border text-center ${
                          selectedTime === t
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 5 — Итог */}
              {bookingStep === 5 && (
                <div className="space-y-3">
                  <h4 className="font-semibold mb-2">Подтверждение</h4>
                  <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Услуга</span>
                      <span className="font-medium">
                        {selectedService?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Мастер</span>
                      <span className="font-medium">
                        {selectedStaff?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Дата</span>
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Время</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="text-gray-600">Стоимость</span>
                      <span className="font-semibold">
                        {selectedService?.price}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Нижняя панель шагов */}
            <div className="p-4 border-t flex items-center gap-3">
              <button
                className="flex-1 py-3 rounded-lg border border-gray-300"
                onClick={() =>
                  setBookingStep((s) => (s > 1 ? s - 1 : s))
                }
                disabled={bookingStep === 1}
              >
                Назад
              </button>

              {bookingStep < 5 && (
                <button
                  className="flex-1 py-3 rounded-lg bg-pink-500 text-white disabled:bg-pink-300"
                  onClick={() => {
                    if (
                      (bookingStep === 1 && !selectedService) ||
                      (bookingStep === 2 && !selectedStaff) ||
                      (bookingStep === 3 && !selectedDate) ||
                      (bookingStep === 4 && !selectedTime)
                    ) {
                      return;
                    }
                    setBookingStep(bookingStep + 1);
                  }}
                  disabled={
                    (bookingStep === 1 && !selectedService) ||
                    (bookingStep === 2 && !selectedStaff) ||
                    (bookingStep === 3 && !selectedDate) ||
                    (bookingStep === 4 && !selectedTime)
                  }
                >
                  Далее
                </button>
              )}

              {bookingStep === 5 && (
                <button
                  className="flex-1 py-3 rounded-lg bg-green-600 text-white"
                  onClick={confirmBooking}
                >
                  Подтвердить
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalonProfile;
