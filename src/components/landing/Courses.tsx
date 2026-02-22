import React from "react";
import type { Course, ThemeClasses } from "@/types/course";

interface CoursesProps {
  courses: Course[];
  themeClasses: ThemeClasses;
}

const Courses: React.FC<CoursesProps> = ({ courses, themeClasses }) => {
  return (
    <section
      id="courses"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-blue-100/50 blur-[100px] -z-10 rounded-full opacity-60 pointer-events-none mix-blend-multiply"></div>
          <span className="mono-label mb-2 block text-brand-blue relative z-10">
            Our Courses
          </span>
          <h2 className="h2-display text-brand-navy relative z-10">
            Choose your track
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto relative z-10">
            Intensive learning designed to get you from zero to
            production-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => {
            const theme = themeClasses[course.theme];

            return (
              <div
                key={course.id}
                className={`rounded-[2rem] p-6 md:p-8 shadow-tile hover:shadow-tile-hover border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full relative group backdrop-blur-2xl bg-white/60 hover:bg-white/80 overflow-hidden ${course.theme === "blue" ? "ring-1 ring-blue-100" : ""}`}
              >
                <div
                  className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20 transition-colors duration-500 pointer-events-none ${theme.blob}`}
                ></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <span
                    className={`px-4 py-1.5 rounded-full backdrop-blur-sm text-xs font-bold uppercase tracking-wider border ${theme.badge}`}
                  >
                    {course.badgeText}
                  </span>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-brand-navy/60 uppercase tracking-widest mb-0.5">
                      Duration
                    </span>
                    <span className="block text-sm font-extrabold text-brand-navy">
                      {course.duration}
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-brand-navy/80 mb-8 text-base leading-relaxed font-medium">
                    {course.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                  {course.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-white/80 border flex items-center justify-center flex-shrink-0 shadow-sm ${theme.iconContainer}`}
                      >
                        <svg
                          className={`w-3 h-3 ${theme.icon}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-brand-navy/90 text-base md:text-[15px] lg:text-base">
                        <strong>{item.strong}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-gradient-to-b from-slate-200 to-slate-100 w-full mb-6"></div>

                <div className="flex items-center justify-between gap-4 relative z-10">
                  <div>
                    <span className="block text-xs font-bold text-brand-navy/60 uppercase tracking-widest mb-1">
                      Next Start
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full animate-pulse ${theme.pulse}`}
                      ></span>
                      <span className="text-sm font-bold text-brand-navy">
                        {course.nextStart}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={course.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-brand-blue text-white rounded-full h-14 px-8 font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 border border-white/20"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
