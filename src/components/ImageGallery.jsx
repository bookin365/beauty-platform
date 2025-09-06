import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartY, setTouchStartY] = useState(0);

  // Закрыть модалку
  const closeModal = () => setSelectedIndex(null);

  // Следующее фото
  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  // Предыдущее фото
  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Обработчик свайпа вверх
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartY - e.changedTouches[0].clientY > 50) {
      closeModal();
    }
  };

  // Закрытие клавишей ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div>
      {/* Галерея превью */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            className="rounded-xl cursor-pointer object-cover w-full h-32"
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      {/* Модалка */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Кнопка закрытия */}
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeModal}
          >
            <X size={28} />
          </button>

          {/* Стрелка влево */}
          <button
            className="absolute left-4 text-white p-2"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Фото */}
          <img
            src={images[selectedIndex]}
            alt="preview"
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-lg transition"
          />

          {/* Стрелка вправо */}
          <button
            className="absolute right-4 text-white p-2"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
