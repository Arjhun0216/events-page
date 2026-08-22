import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUsPage from "./components/ContactUsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactUsPage />} />
    </Routes>
  );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
