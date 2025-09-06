import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return <div className="pt-20 px-4 max-w-xl mx-auto text-center">
    <h1 className="text-3xl font-bold mb-2">404</h1>
    <p className="text-gray-500 mb-4">Страница не найдена</p>
    <Link to="/" className="text-pink-600">На главную</Link>
  </div>;
}
