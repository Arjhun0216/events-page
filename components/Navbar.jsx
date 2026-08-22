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
