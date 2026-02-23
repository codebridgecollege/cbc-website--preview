"use client";

import React, { useState } from "react";
import type { FAQItem } from "@/types/faq";

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="mono-label mb-2 block text-brand-blue">
            FAQ
          </span>
          <h2 className="h2-display text-brand-navy">
            Common Questions
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            Everything you need to know about the curriculum, logistics, and what
            happens after you graduate.
          </p>
        </div>

        <div className="glass-panel overflow-hidden border border-slate-200 bg-white transition-colors">
          <div className="divide-y divide-brand-navy/5">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-6 md:p-8 flex justify-between items-start gap-6 transition-all duration-300 relative group ${activeFaq === index ? "bg-brand-blue/[0.03]" : "hover:bg-slate-50/50"}`}
                >
                  <div className="flex-1 pr-4">
                    <span
                      className={`block font-bold text-brand-navy text-lg leading-snug transition-colors duration-300 ${activeFaq === index ? "text-brand-blue" : ""}`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${activeFaq === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="text-brand-navy/70 leading-relaxed text-base prose prose-blue max-w-none font-medium"
                          dangerouslySetInnerHTML={{ __html: faq.a }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative w-8 h-8 mt-0.5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeFaq === index ? "bg-brand-blue border-brand-blue text-white" : "bg-white border-brand-navy/10 text-brand-navy/40 group-hover:border-brand-blue/30 group-hover:text-brand-blue"}`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-500 ${activeFaq === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
