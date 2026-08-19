import React from "react";
import { Home, ChevronRight, Users, MapPin, Phone, ExternalLink, Signpost, Instagram, Linkedin, Youtube } from "lucide-react";

const coordinators = [
  { name: "M. Dhivyasri",  phone: "+91 8248466142" },
  { name: "M. Arjun ",  phone: "+91 6381771885" },
  { name: "R. Dhanya",  phone: "+91 6369458769" },
  { name: "R. Keerthivasan", phone: "+91 9159325594" },
];

const navLinks = ["HOME", "EVENTS", "SCHEDULE", "CONTACT"];
const quickLinks = ["Home", "Events", "Schedule", "Contact Us", "Register"];

// Replace with your actual social handles
const socialLinks = {
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  youtube: "https://www.youtube.com/",
};

// Government College of Engineering, Bargur, NH 46, Chennai-Bangalore Highway,
// Madepalli Village, Bargur, Krishnagiri - 635104
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Government+College+of+Engineering+Bargur+Krishnagiri";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Government+College+of+Engineering+Bargur+Krishnagiri&output=embed";

export default function ContactUsPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050810] text-white font-sans flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-12 py-3 border-b border-white/5 shrink-0">
        <div>
          <div className="text-xl font-extrabold tracking-tight leading-none">
            <span className="text-[#3b82f6]">PHANTASM</span>
          </div>
          <div className="text-[10px] tracking-widest text-gray-400">CSE SYMPOSIUM</div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={
                link === "CONTACT"
                  ? "text-[#3b82f6] border-b-2 border-[#3b82f6] pb-1"
                  : "text-gray-200 hover:text-[#3b82f6] transition-colors"
              }
            >
              {link}
            </a>
          ))}
        </nav>
        <a href="https://forms.gle/your-registration-form"
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center gap-1 border border-white/20 rounded-md px-4 py-1.5 text-sm font-medium tracking-wide" >
         REGISTER NOW <ChevronRight className="w-4 h-4" />
        </a>
      </header>

      <main className="flex-1 min-h-0 px-6 md:px-12 py-3 flex flex-col overflow-hidden">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#3b82f6] mb-1 shrink-0">
          <Home className="w-3.5 h-3.5" />
          <span>/</span>
          <span>CONTACT US</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-1 shrink-0">
          CONTACT <span className="text-[#3b82f6]">US</span>
        </h1>
        <p className="text-gray-300 text-sm mb-3 shrink-0">
          Have questions or need more information? We're here to help you. Reach out to us anytime!
        </p>

        {/* Coordinators + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-3 flex-1 min-h-0">
          {/* Coordinators */}
          <div className="lg:col-span-2 border border-white/10 rounded-xl p-4 flex flex-col min-h-0">
            <div className="flex items-center gap-2 mb-3 text-base font-semibold shrink-0">
              <Users className="w-4 h-4 text-[#3b82f6]" />
              <span>OUR COORDINATORS</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 min-h-0">
              {coordinators.map((c) => (
                <div
                  key={c.name}
                  className="border border-white/10 rounded-xl p-3 flex flex-col items-center text-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full border border-[#3b82f6]/60 flex items-center justify-center mb-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    </svg>
                  </div>
                  <div className="font-semibold text-sm mb-0.5">{c.name}</div>
                  <div className="text-xs text-gray-400 mb-1.5">{c.role}</div>
                  <div className="text-xs text-gray-200 mb-1.5">{c.phone}</div>
                  <a href={`tel:${c.phone.replace(/\s+/g, "")}`}>
                    <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Find us here */}
          <div className="border border-white/10 rounded-xl p-4 flex flex-col min-h-0">
            <div className="flex items-center gap-2 mb-3 text-base font-semibold shrink-0">
              <MapPin className="w-4 h-4 text-[#3b82f6]" />
              <span>FIND US HERE</span>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 min-h-0 rounded-lg overflow-hidden mb-3 bg-[#0b1220] border border-white/5 block group"
            >
              {/* Subtle grid pattern background */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(59,130,246,0.15) 0, rgba(59,130,246,0.15) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(59,130,246,0.15) 0, rgba(59,130,246,0.15) 1px, transparent 1px, transparent 24px)",
                }}
              />
              {/* Centered pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin
                  className="w-8 h-8 text-[#3b82f6] fill-[#3b82f6] drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />
              </div>
            </a>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/15 rounded-md py-2 text-sm font-medium tracking-wide hover:border-[#3b82f6] transition-colors shrink-0"
            >
              OPEN IN GOOGLE MAPS <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Directions */}
        <div className="border border-white/10 rounded-xl p-4 mb-3 shrink-0">
          <div className="flex items-center gap-2 mb-2 text-base font-semibold">
            <Signpost className="w-4 h-4 text-[#3b82f6]" />
            <span>DIRECTIONS TO COLLEGE</span>
          </div>

          <div className="space-y-2 text-sm leading-snug text-gray-200 overflow-hidden">
            <p>
              <span className="text-[#3b82f6] font-semibold">From Krishnagiri New Bus Stand</span> – The
              college is approximately 13km away. Take the Chennai–Bangalore Highway towards
              Bargur, continue through Kandikuppam, and proceed towards Bargur. The college is near
              Madepalli Village, approximately 3km from Bargur.
            </p>
            <p>
              <span className="text-[#3b82f6] font-semibold">From Tirupattur Bus Stand</span> – The road
              distance to Bargur is approximately 28km. Take the Bargur–Tirupattur Road  towards
              Bargur, join the Chennai–Bangalore Highway, then proceed approximately 3km towards
              Madepalli Village to reach the college.
            </p>
            <p>
              <span className="text-[#3b82f6] font-semibold">Land mark:</span> Government College of
              Engineering, Bargur, NH 46, Chennai–Bangalore Highway, Madepalli Village, Bargur, Krishnagiri
              – 635104.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 pt-3 pb-2 border-t border-white/5 shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-base font-extrabold text-[#3b82f6] leading-none">PHANTASM</div>
            <div className="text-[9px] tracking-widest text-gray-400 mb-1">CSE SYMPOSIUM</div>
            <p className="text-xs text-gray-400 leading-snug">
              PHANTASM is more than a symposium. It's where ideas collide, minds connect, and innovation
              comes to life.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold mb-1.5 border-b-2 border-[#3b82f6] inline-block pb-0.5">
              QUICK LINKS
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-300 mt-1">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#3b82f6] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-1.5 border-b-2 border-[#3b82f6] inline-block pb-0.5">
              FOLLOW US
            </div>
            <div className="flex gap-2 mt-1">
              <a
                href={"https://www.instagram.com/targaryenz.gceb?igsh=d2M5M2l2Ym5tMWF5&igsi=d2M5M2l2Ym5tMWF5"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md border border-white/15 flex items-center justify-center hover:border-[#3b82f6] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md border border-white/15 flex items-center justify-center hover:border-[#3b82f6] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md border border-white/15 flex items-center justify-center hover:border-[#3b82f6] transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] text-gray-500 mt-2 pt-2 border-t border-white/5">
          © 2025 PHANTASM CSE Symposium. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
