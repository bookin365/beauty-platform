import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Beauty Platform</div>
        <div className="flex space-x-4 text-sm">
          <Link to="/about" className="hover:text-pink-600">О нас</Link>
          <Link to="/contact" className="hover:text-pink-600">Контакты</Link>
          <Link to="/terms" className="hover:text-pink-600">Условия</Link>
          <Link to="/privacy" className="hover:text-pink-600">Конфиденциальность</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
