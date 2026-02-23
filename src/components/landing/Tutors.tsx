import React from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import type { Tutor } from "@/types/tutor";

interface TutorsProps {
  tutors: Tutor[];
}

const Tutors: React.FC<TutorsProps> = ({ tutors }) => {
  return (
    <section
      id="tutors"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-blue-100/40 blur-[80px] -z-10 rounded-full opacity-60 pointer-events-none mix-blend-multiply"></div>
          <span className="mono-label mb-2 block text-brand-blue relative z-10">
            World-Class Faculty
          </span>
          <h2 className="h2-display text-brand-navy">
            Learn from the Masters
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
            Experts from top institutions and global companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, idx) => (
            <a
              key={idx}
              href={tutor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer border border-slate-200 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <Image
                src={withBasePath(tutor.img)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                alt={tutor.name}
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-slate-900/60" />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="w-8 h-1 bg-brand-blue mb-4 rounded-full"></div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="pr-2">
                      <h4 className="text-2xl font-bold text-white leading-tight mb-1">
                        {tutor.name}
                      </h4>
                      <p className="text-brand-blueLight font-mono text-xs font-bold uppercase tracking-widest">
                        {tutor.role}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/30 border border-white/40 flex items-center justify-center text-white hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed mt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100 lg:max-h-0 lg:group-hover:max-h-[300px] overflow-hidden">
                    {tutor.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;
