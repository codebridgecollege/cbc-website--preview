"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  const blobPositions = [
    "top-0 right-0 -mr-20 -mt-20",
    "bottom-0 left-0 -ml-20 -mb-20",
    "top-0 left-0 -ml-20 -mt-20",
    "bottom-0 right-0 -mr-20 -mb-20",
  ];

  return (
    <section
      id="reviews"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-blue-100/40 blur-[80px] -z-10 rounded-full opacity-60 pointer-events-none mix-blend-multiply"></div>
          <span className="mono-label mb-2 block text-brand-blue relative z-10">
            Testimonials
          </span>
          <h2 className="h2-display text-brand-navy relative z-10">
            What our alumni say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => {
            const blobPos = blobPositions[index % blobPositions.length];
            return (
              <div
                key={index}
                className="rounded-[2rem] p-8 shadow-tile hover:shadow-tile-hover border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group backdrop-blur-2xl bg-white/70 hover:bg-white/90 flex flex-col h-full"
              >
                <div
                  className={`absolute w-64 h-64 rounded-full blur-3xl transition-colors duration-500 pointer-events-none bg-blue-100/50 group-hover:bg-blue-200/50 ${blobPos}`}
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm transition-all duration-300 shrink-0 ring-2 ring-blue-50 group-hover:ring-blue-100"
                      unoptimized
                    />
                    <div>
                      <p className="font-bold text-brand-navy text-lg leading-tight transition-colors duration-300 group-hover:text-brand-blue">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-brand-navy/60 font-bold uppercase tracking-wide mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-brand-navy/80 leading-relaxed text-base relative flex-grow">
                    <span className="text-5xl font-serif absolute -top-4 -left-2 z-0 transition-colors duration-300 select-none text-blue-200 group-hover:text-blue-300">
                      &ldquo;
                    </span>
                    <span
                      className="relative z-10"
                      dangerouslySetInnerHTML={{ __html: testimonial.text }}
                    ></span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn bg-white/50 backdrop-blur-md rounded-full px-8 group border border-white/60 text-brand-navy hover:bg-white hover:text-brand-blue hover:shadow-lg transition-all duration-300 text-lg font-bold"
            >
              Load More Stories
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
