import React from "react";
import Image from "next/image";
import type { TickerLogo } from "@/types/ticker";

interface TickerProps {
  logos: TickerLogo[];
}

const Ticker: React.FC<TickerProps> = ({ logos }) => {
  // Repeated 4× so the ticker can loop slowly without visible gaps
  const tickerLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="border-y border-slate-200/60 bg-white py-6 md:py-12 overflow-hidden relative z-20">
      <div className="mb-0 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
          <span className="mono-label mb-3 inline-block text-brand-blue">
            Trusted by private and public sector
          </span>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className="relative flex overflow-x-hidden group w-full cursor-default select-none">
            <div
              className="animate-ticker flex whitespace-nowrap items-center w-max"
              style={{ willChange: "transform", animationDuration: "80s" }}
            >
              {tickerLogos.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="ticker-logo transform-gpu"
                  style={logo.style}
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
