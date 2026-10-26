
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headset1 from "../assets/headset1.png";

function OfferBanner() {
  // Live ticking countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText("SHOPMATE50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2D341D] via-[#414C24] to-[#535F2F] text-white shadow-xl">
        {/* Subtle decorative glow circles */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#68753D]/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-14">
          
          {/* Left Side Content (7 cols on desktop) */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-extrabold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-stone-950 animate-ping"></span>
                Flash Offer
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-stone-200">
                Ends Soon
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Up to <span className="text-amber-300">50% Off</span> on Studio Sound & Accessories
            </h2>

            <p className="mt-3 max-w-lg text-sm sm:text-base text-stone-200 leading-relaxed">
              Immerse yourself in concert-grade high-fidelity sound with deep bass, active noise cancellation, and all-day battery life.
            </p>

            {/* Countdown Urgency Timer */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-lg sm:text-2xl font-extrabold text-amber-300">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-semibold text-stone-300">Hrs</span>
              </div>
              <span className="text-xl font-bold text-amber-300">:</span>
              <div className="flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-lg sm:text-2xl font-extrabold text-amber-300">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-semibold text-stone-300">Min</span>
              </div>
              <span className="text-xl font-bold text-amber-300">:</span>
              <div className="flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-lg sm:text-2xl font-extrabold text-amber-300">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-semibold text-stone-300">Sec</span>
              </div>
            </div>

            {/* Action Buttons & Coupon */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/deals"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold px-6 py-3.5 text-sm transition shadow-md active:scale-95"
              >
                <span>Claim Offer Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Coupon Pill with Click-to-Copy */}
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-amber-300/60 bg-white/5 hover:bg-white/15 px-4 py-3.5 text-xs font-mono font-bold text-amber-200 transition"
              >
                <span>Code: <strong>SHOPMATE50</strong></span>
                <span className="text-[11px] underline ml-1">
                  {copied ? "Copied! ✓" : "Copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Side Image (5 cols on desktop) */}
          <div className="md:col-span-5 flex items-center justify-center p-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl transform scale-90" />
              <img
                src={headset1}
                alt="Special offer studio headphones"
                className="relative z-10 max-h-72 sm:max-h-80 md:max-h-96 w-auto object-contain transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl bg-amber-400 text-stone-950 text-xs font-black shadow-lg">
                Save ₹1,500
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OfferBanner;

