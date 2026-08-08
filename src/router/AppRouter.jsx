import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import PakistanFlightsPage from '../pages/PakistanFlights/PakistanFlightsPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/flight-to-pakistan" element={<PakistanFlightsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
