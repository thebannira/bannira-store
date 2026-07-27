import React from 'react';

export default function ComingSoonOverlay(): React.JSX.Element | null {
  const isComingSoon = process.env.NEXT_PUBLIC_APP_ENV === 'main';

  if (!isComingSoon) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-black text-white text-center p-6 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-lg space-y-8 z-10">
        <h1 className="text-5xl md:text-7xl font-serif tracking-[0.2em] text-[#D4AF37] uppercase font-bold drop-shadow-md">
          Bannira
        </h1>

        <div className="flex items-center justify-center gap-4 opacity-70">
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
          {/* <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light">
            Culture in Color, Style in Spirit
          </span> */}
          {/* <div className="w-12 h-[1px] bg-[#D4AF37]" /> */}
        </div>

        <div className="space-y-3">
          <p className="text-xl md:text-2xl font-serif text-gray-100 tracking-wide leading-relaxed italic">
            "Something extraordinary is taking shape."
          </p>
        </div>

        <div className="pt-4">
          <span className="inline-block px-5 py-2 border border-[#D4AF37]/40 rounded-full text-xs text-[#D4AF37] tracking-[0.25em] uppercase bg-[#D4AF37]/5 backdrop-blur-sm animate-pulse">
            Launching Very Soon
          </span>
        </div>
      </div>
    </div>
  );
}