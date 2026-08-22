// StarNode.jsx
// One glowing star on the map: a slow GSAP pulse on the halo, plus a
// hover/tap detail card. Works for both the desktop absolute-positioned
// map and (in a simplified wrapper) the mobile vertical list.

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function StarNode({
  time,
  title,
  venue,
  desc,
  cardSide = "bottom", // "bottom" | "top" — flips the popover so it never clips off-screen
  size = "md",
}) {
  const glowRef = useRef(null);
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Ambient pulse — one continuous GSAP tween, not CSS, per the animation stack.
  useEffect(() => {
    const tween = gsap.to(glowRef.current, {
      opacity: 0.95,
      scale: 1.45,
      duration: 1.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    return () => tween.kill();
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      opacity: open ? 1 : 0,
      y: open ? 0 : cardSide === "bottom" ? 6 : -6,
      duration: open ? 0.28 : 0.18,
      ease: open ? "power2.out" : "power2.in",
      pointerEvents: open ? "auto" : "none",
    });
  }, [open, cardSide]);

  const dotSize = size === "sm" ? "w-2 h-2" : "w-2.5 h-2.5";

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer select-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
    >
      <span className="relative flex items-center justify-center w-4 h-4">
        <span
          ref={glowRef}
          className="absolute inset-0 rounded-full bg-sky-300/70"
          style={{ filter: "blur(6px)" }}
        />
        <span
          className={`relative ${dotSize} rounded-full bg-white`}
          style={{ boxShadow: "0 0 10px 3px rgba(95,198,255,0.7)" }}
        />
      </span>

      <span className="mt-2 text-[10px] tracking-widest text-sky-300 font-body whitespace-nowrap">
        {time}
      </span>
      <span className="text-[13px] font-semibold text-white font-body whitespace-nowrap">
        {title}
      </span>

      <div
        ref={cardRef}
        className={`absolute left-1/2 -translate-x-1/2 w-52 opacity-0 bg-slate-950/85 border border-sky-900/60
                    rounded-lg px-4 py-3 backdrop-blur-sm text-left z-30 pointer-events-none
                    ${cardSide === "bottom" ? "top-[125%]" : "bottom-[125%]"}`}
      >
        <p className="text-xs font-bold text-sky-300 mb-1">{title}</p>
        <p className="text-[11px] text-slate-300 leading-snug mb-2">{desc}</p>
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>Venue</span>
          <span className="text-white">{venue}</span>
        </div>
      </div>
    </div>
  );
}
