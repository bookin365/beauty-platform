import React from "react";

const GalleryModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative">
        <button
          className="absolute -top-8 -right-8 bg-white rounded-full p-2 shadow-md"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={image}
          alt="gallery full"
          className="max-h-[80vh] rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default GalleryModal;
