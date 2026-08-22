// Navbar.jsx
// Rebuilt to visually match the existing homepage header (logo lockup,
// nav underline, circular login icon). Swap in your real component if you
// find/export it later — this one is a drop-in replacement in the meantime.

import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Schedule", to: "/schedule" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur border-b border-sky-950/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none shrink-0">
          <span
            className="font-display text-xl md:text-2xl tracking-wide text-white"
            style={{ textShadow: "0 0 12px rgba(95,198,255,0.55)" }}
          >
            PHANTASM
          </span>
          <span className="text-[8px] md:text-[9px] tracking-[3px] text-sky-300/70 font-body mt-0.5">
            CSE SYMPOSIUM
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`pb-1 border-b-2 transition-colors duration-200 ${
                  active
                    ? "text-sky-300 border-sky-400"
                    : "text-slate-300 border-transparent hover:text-sky-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Login */}
        <Link to="/login" className="flex flex-col items-center gap-0.5 shrink-0">
          <span className="w-8 h-8 rounded-full border border-sky-800 flex items-center justify-center text-sky-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
            </svg>
          </span>
          <span className="text-[9px] text-slate-400 hidden md:block">Login</span>
        </Link>
      </div>
    </header>
  );
}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-2 md:py-3">
        {/* Logo and Text */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/assets/logo-cse.png"
            alt="Phantasm CSE Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-150 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"
          />
          <div className="flex flex-col leading-none">
            <span className="font-gothic text-lg sm:text-xl md:text-2xl text-blue-100 tracking-wider drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
              PHANTASM
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-blue-400 tracking-[0.3em] font-body">
              CSE SYMPOSIUM
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 font-serif2 text-base tracking-wide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative pb-1 transition-colors ${
                  isActive ? 'text-blue-400' : 'text-slate-300 hover:text-blue-300'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 shadow-glow" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side: Login (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden md:flex flex-col items-center gap-1 text-blue-300" onClick={closeMenu}>
            <div className="w-8 h-8 rounded-full border border-blue-500/50 flex items-center justify-center shadow-glow">
              <User size={16} />
            </div>
            <span className="text-xs tracking-wide">Login</span>
          </Link>

          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-blue-500/40 text-blue-300 shadow-glow"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 border-t border-blue-900/30 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 font-serif2 text-lg tracking-wide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`py-1 border-b border-blue-900/20 transition-colors ${
                  isActive ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/login"
            onClick={closeMenu}
            className="flex items-center gap-2 text-blue-300 py-1"
          >
            <div className="w-7 h-7 rounded-full border border-blue-500/50 flex items-center justify-center shadow-glow">
              <User size={14} />
            </div>
            <span className="text-base tracking-wide">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
