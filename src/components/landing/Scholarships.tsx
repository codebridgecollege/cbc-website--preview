import React from "react";
import Link from "next/link";

const Scholarships: React.FC = () => {
  return (
    <section
      id="scholarships"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-blue-100/50 blur-[80px] -z-10 rounded-full opacity-60 pointer-events-none mix-blend-multiply"></div>
          <span className="mono-label mb-2 block text-brand-blue relative z-10">
            Giving Back
          </span>
          <h2 className="h2-display text-brand-navy relative z-10">
            Scholarships & Grants
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto relative z-10">
            We believe that financial constraints should never stand in the way
            of ambition and talent.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-10 lg:p-16 bg-brand-blue text-white relative overflow-hidden shadow-tile border-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/30">
                Scholarships for Students
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Get up to <span className="text-blue-200">800€</span> worth of
                education for free!
              </h2>
              <div className="text-blue-100 text-lg mb-10 leading-relaxed font-medium space-y-4">
                <p>
                  Affordability of high-quality education for students and early
                  academia is our top priority.
                </p>
                <p>
                  Thanks to our partners and sponsors, we are able to provide
                  scholarships to students (undergraduate, masters and PhD). This
                  scholarship covers 100% or 80% of the course costs!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <Link
                  href="/#courses"
                  className="inline-flex items-center justify-center bg-white text-brand-blue hover:bg-blue-50 h-14 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Check Course Pages
                </Link>
                <p className="text-lg text-blue-100 font-medium leading-snug max-w-sm sm:text-left text-center">
                  For more information, please visit the course-specific pages.
                </p>
              </div>
            </div>
            <div className="lg:border-l lg:border-white/20 lg:pl-12 flex flex-col justify-center">
              <p className="text-lg font-bold mb-4 uppercase tracking-widest opacity-80 text-blue-200">
                Our Mission
              </p>
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white">
                &quot;Our scholarships are intended to support those who cannot
                otherwise afford our course. We believe there should be no
                financial barriers in academic excellency.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
