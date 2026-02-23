"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";

const Hero: React.FC = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 45 : -10;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full flex flex-col lg:block min-h-[100dvh] lg:h-screen bg-slate-900 lg:bg-slate-900 overflow-hidden pt-20 lg:pt-0">
      <div className="relative w-full h-auto lg:absolute lg:inset-0 lg:h-full z-0 shrink-0 -mt-10 lg:mt-0">
        <Image
          src={withBasePath("/images/hero-bg.jpg")}
          alt="Data Science Workshop"
          width={1920}
          height={1080}
          className="w-full h-auto lg:h-full lg:object-cover lg:object-center block"
          unoptimized
          sizes="100vw"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-full bg-slate-900/80 lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="relative z-10 flex flex-col justify-start lg:justify-end lg:h-full flex-1 bg-transparent px-6 pb-12 pt-0 lg:pt-0 -mt-[4.75rem] lg:mt-0 lg:max-w-[1400px] lg:mx-auto lg:px-[40px] lg:pb-20">
        <div className="hidden lg:block absolute top-32 left-0 w-full px-[40px] pointer-events-none">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-blue-500/20 lg:bg-white/10 border border-blue-400/30 lg:border-white/10 pointer-events-auto">
            <span className="relative flex h-2.5 w-2.5 lg:h-4 lg:w-4 items-center justify-center">
              <span className="relative inline-flex rounded-full h-2 w-2 lg:h-3 lg:w-3 bg-[#00FF94]" />
            </span>
            <span className="text-blue-50 lg:text-white/90 text-xs lg:text-sm font-bold uppercase tracking-wider font-mono pt-[2px]">
              New Courses Open
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-20 relative z-20">
          <div className="w-full lg:max-w-4xl animate-fade-in-up relative">
            <h1 className="h1-display mb-6 lg:mb-14 text-white leading-[1.1] lg:leading-none tracking-tight">
              <span className="block">Become fluent in</span>
              <span className="text-[#ACD3FF] block">Data, Statistics & AI.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 lg:text-blue-50 max-w-xl leading-relaxed mb-8 lg:mb-14 font-medium">
              Designed for busy professionals and researchers. Structured
              workshops, supportive mentors, and immediate application. Learn
              the essential data skills that power science, business and
              innovation.
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 w-full sm:w-auto relative z-20">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  href="#courses"
                  onClick={(e) => scrollToSection(e, "courses")}
                  className="btn btn-primary h-14 px-8 text-lg w-full sm:w-auto flex items-center justify-center"
                >
                  Explore Courses
                </Link>
                <Link
                  href="#scholarships"
                  onClick={(e) => scrollToSection(e, "scholarships")}
                  className="btn border border-white/20 bg-white/5 text-white hover:bg-white hover:text-brand-blue h-14 px-8 text-lg w-full sm:w-auto flex items-center justify-center transition-all"
                >
                  Scholarships
                </Link>
              </div>

              <Link
                href="#courses"
                onClick={(e) => scrollToSection(e, "courses")}
                className="hidden lg:flex group cursor-pointer items-center gap-3 px-2 py-3 opacity-90 hover:opacity-100 transition-opacity"
              >
                <span className="text-blue-200/60 text-xs font-medium font-mono uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  Scroll
                </span>
                <svg
                  className="w-5 h-5 text-blue-200/60 animate-bounce group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 14l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div
            className="w-full lg:w-auto animate-fade-in-up relative lg:mb-[18px]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-px bg-slate-800 w-full mb-8 lg:hidden"></div>

            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-x-12 gap-y-10 lg:gap-0 lg:space-y-6 lg:border-l lg:border-blue-500/50 lg:pl-[30px] lg:-mr-[9px] lg:py-2">
              <Link
                href="#reviews"
                onClick={(e) => scrollToSection(e, "reviews")}
                className="group flex flex-col items-center lg:items-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-extrabold text-3xl lg:text-4xl tracking-tight mb-1">
                  3 Years
                </span>
                <span className="text-slate-400 text-xs font-mono font-bold uppercase tracking-widest group-hover:text-slate-200 transition-colors">
                  Existence
                </span>
              </Link>

              <Link
                href="#reviews"
                onClick={(e) => scrollToSection(e, "reviews")}
                className="group flex flex-col items-center lg:items-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-extrabold text-3xl lg:text-4xl tracking-tight mb-1">
                  400+
                </span>
                <span className="text-slate-400 text-xs font-mono font-bold uppercase tracking-widest group-hover:text-slate-200 transition-colors">
                  Alumni
                </span>
              </Link>

              <Link
                href="#scholarships"
                onClick={(e) => scrollToSection(e, "scholarships")}
                className="group flex flex-col items-center lg:items-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-extrabold text-3xl lg:text-4xl tracking-tight mb-1">
                  €20k+
                </span>
                <span className="text-slate-400 text-xs font-mono font-bold uppercase tracking-widest group-hover:text-slate-200 transition-colors">
                  Scholarships
                </span>
              </Link>

              <Link
                href="#reviews"
                onClick={(e) => scrollToSection(e, "reviews")}
                className="group flex flex-col items-center lg:items-start cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-extrabold text-3xl lg:text-4xl tracking-tight mb-1">
                  9.5
                </span>
                <span className="text-slate-400 text-xs font-mono font-bold uppercase tracking-widest group-hover:text-slate-200 transition-colors">
                  NPS Score
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
