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
