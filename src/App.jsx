// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import CalendarScreen from "./screens/CalendarScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BookingScreen from "./screens/BookingScreen";
import SalonProfile from "./screens/SalonProfile";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-gray-50"> {/* ✅ фикс */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/calendar" element={<CalendarScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/booking/:id" element={<BookingScreen />} />
          <Route path="/salon/:id" element={<SalonProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
