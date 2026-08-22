import CountdownTimer from './CountdownTimer';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-start justify-start pt-18 md:pt-20">
      {/* Background layer - Full viewport coverage */}
      <div className="absolute inset-0 top-0 bg-black w-full h-full">
        {/* Background image with optimal display - fills entire mobile view, same on desktop */}
        <img
          src="/assets/hero-bg.jpg"
          alt="Phantasm hero background"
          className="w-full h-full object-cover absolute inset-0"
          style={{ objectPosition: 'center 18%' }}
        />

        {/* Gradient overlays optimized for mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 via-80% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent via-50% to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 h-full flex flex-col md:flex-row md:items-start">
        <div className="max-w-xl w-full flex flex-col justify-start pt-10 md:pt-10 md:h-auto h-auto pb-20 md:pb-0">
          <p className="text-blue-500 text-[10px] sm:text-xs md:text-sm tracking-[0.3em] font-body mb-3 sm:mb-4">
            WELCOME TO
          </p>

          <h1 className="font-gothic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight sm:leading-none drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            PHANTASM
          </h1>
          <p className="font-serif2 text-blue-500 text-xs sm:text-sm md:text-base tracking-[0.35em] mt-2">
            CSE SYMPOSIUM 2026
          </p>

          <div className="w-16 sm:w-20 h-[2px] bg-blue-500 shadow-glow my-4 sm:my-6" />

          <p className="font-serif2 italic text-slate-200 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Ideate • Innovate • Transcend
          </p>

          <p className="font-body text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
            A national level technical symposium where bright minds meet, create and shape the future.
          </p>

          <p className="text-blue-500 text-[10px] sm:text-xs tracking-[0.3em] font-body mb-4">
            THE COUNTDOWN BEGINS
          </p>

          <CountdownTimer />
        </div>
      </div>

      {/* Scroll to explore - Hidden on mobile, visible on tablet+ */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="text-blue-500" size={18} />
        <span className="text-blue-500 text-[10px] tracking-[0.3em] font-body">
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
}
