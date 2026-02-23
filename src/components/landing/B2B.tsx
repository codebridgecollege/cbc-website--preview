"use client";

import React from "react";
import { useModal } from "@/contexts/ModalContext";

const B2B: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section
      id="organizations"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="mono-label mb-2 block text-brand-blue">
            Partnerships
          </span>
          <h2 className="h2-display text-brand-navy">
            Empower your Organization
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
            Upskill your team or research group with world-class data science
            training tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="bg-slate-900 text-white p-6 md:p-12 lg:p-20 flex flex-col justify-center rounded-[2rem] border border-slate-800 transition-transform hover:-translate-y-1 duration-300">
            <div className="max-w-lg mx-auto lg:mx-0 relative z-10">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20 text-brand-blueLight">
                Corporate Training
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                For Companies & Institutions
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Upskill teams in data, analytics and artificial intelligence. We
                tailor workshops to your domain, data skill maturity and tools.
              </p>
              <ul className="space-y-4 mb-12 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Transitioning from Excel to Python
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  5-day intro to data science in Python
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Advanced courses on AI topics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Internal hackathon with coaching
                </li>
              </ul>
              <button
                onClick={openModal}
                className="btn btn-primary rounded-full px-8 h-14 text-lg w-fit"
              >
                Contact us for details
              </button>
            </div>
          </div>
          <div className="bg-white text-brand-navy p-6 md:p-12 lg:p-20 flex flex-col justify-center rounded-[2rem] border border-slate-200 transition-transform hover:-translate-y-1 duration-300">
            <div className="max-w-lg mx-auto lg:mx-0 relative z-10">
              <span className="inline-block px-3 py-1 bg-brand-blue/10 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-brand-blue/20 text-brand-blue">
                Research Excellence
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                For Academia & Research
              </h2>
              <p className="text-lg text-brand-navy/80 mb-10 leading-relaxed">
                We help researchers improve data literacy, analysis speed and
                outcome clarity. From data cleaning to statistical inference.
              </p>
              <ul className="space-y-4 mb-12 text-brand-navy/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Reproducible research pipelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Statistical inference & modelling
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Data cleaning automation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Ideal for PhDs & Postdocs
                </li>
              </ul>
              <button
                onClick={openModal}
                className="btn btn-white-ghost bg-slate-50 !text-brand-blue !border-brand-blue/20 rounded-full px-8 h-14 text-lg w-fit"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2B;
