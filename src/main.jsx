import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from './pages/Schedule';
import './styles/schedule.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
