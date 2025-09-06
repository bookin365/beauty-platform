import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function GalleryManager() {
  const { id } = useParams();
  const [images, setImages] = useState([
    { id: "img1" }, { id: "img2" }, { id: "img3" }, { id: "img4" }
  ]);

  const handleUpload = (e) => {
    // TODO: загрузка изображения => POST /owner/objects/:id/photos
    alert(`Загружено ${e.target.files?.length || 0} фото (заглушка)`);
  };

  const removeImage = (imgId) => {
    // TODO: DELETE /owner/objects/:id/photos/:photoId
    setImages((prev) => prev.filter((i) => i.id !== imgId));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Галерея объекта</h1>
        <Link to={`/owner/objects/${id}`} className="text-pink-600">← Назад к объекту</Link>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <label className="block">
          <span className="text-sm text-gray-500">Загрузить фото</span>
          <input type="file" multiple accept="image/*" onChange={handleUpload} className="mt-2" />
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img) => (
          <div key={img.id} className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden">
            <button
              onClick={() => removeImage(img.id)}
              className="absolute top-2 right-2 bg-white/90 border rounded px-2 py-1 text-xs"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
