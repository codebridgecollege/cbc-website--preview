import React from "react";

type MethodColor =
  | "blue"
  | "emerald"
  | "amber"
  | "purple"
  | "rose"
  | "cyan";

interface Method {
  title: string;
  desc: string;
  color: MethodColor;
  icon: React.ReactNode;
}

const Methodology: React.FC = () => {
  const methods: Method[] = [
    {
      title: "Expertly crafted resources",
      desc: "The core of our unique value lies in our teaching materials, with extensive time and effort dedicated to their development. Two versions of Python notebooks allow you to either focus on code or concentrate on the explanations.",
      color: "blue",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
    },
    {
      title: "Supportive teaching",
      desc: "If you get stuck during the workshop, you don't have to panic, we don't leave you hanging. While one lecturer teaches, the other ones are available to help you solve any coding bugs and to answer any extra questions you might have.",
      color: "emerald",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      ),
    },
    {
      title: "Hands-on by default",
      desc: "Short explanations, then practice - so you don't just \"learn concepts,\" you build analytical and coding skills that you can apply immediately. You'll work on real tasks: cleaning data, visualising, testing hypotheses, building models, and interpreting results.",
      color: "amber",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
    },
    {
      title: "Pre-course prep",
      desc: "Before the course, you'll get a structured \"to do list\" that is designed to offer you the best preparation for the course.",
      color: "purple",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      ),
    },
    {
      title: "Support after the course",
      desc: "Your education with us doesn't end with the bootcamp, we continue to support you even after the course, in the form of individual consultations and specialised workshops.",
      color: "rose",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Guided and Modern Learning",
      desc: "No question is left unanswered. We're committed to interactive lecturing and discussion. When we teach the most essential concepts in data manipulation, statistics, or machine learning, we make sure everyone fully understands these topics before progressing.",
      color: "cyan",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
  ];

  const colorStyles: Record<
    MethodColor,
    { blob: string; iconBg: string; iconText: string; titleHover: string }
  > = {
    blue: {
      blob: "bg-blue-100/50 group-hover:bg-blue-200",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      titleHover: "group-hover:text-blue-600",
    },
    emerald: {
      blob: "bg-emerald-100/50 group-hover:bg-emerald-200",
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      titleHover: "group-hover:text-emerald-600",
    },
    amber: {
      blob: "bg-amber-100/50 group-hover:bg-amber-200",
      iconBg: "bg-amber-50",
      iconText: "text-amber-600",
      titleHover: "group-hover:text-amber-600",
    },
    purple: {
      blob: "bg-purple-100/50 group-hover:bg-purple-200",
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
      titleHover: "group-hover:text-purple-600",
    },
    rose: {
      blob: "bg-rose-100/50 group-hover:bg-rose-200",
      iconBg: "bg-rose-50",
      iconText: "text-rose-600",
      titleHover: "group-hover:text-rose-600",
    },
    cyan: {
      blob: "bg-cyan-100/50 group-hover:bg-cyan-200",
      iconBg: "bg-cyan-50",
      iconText: "text-cyan-600",
      titleHover: "group-hover:text-cyan-600",
    },
  };

  return (
    <section
      id="methodology"
      className="py-12 md:py-24 px-4 md:px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-blue-100/50 blur-[100px] -z-10 rounded-full opacity-60 pointer-events-none mix-blend-multiply"></div>
          <span className="mono-label mb-2 block text-brand-blue relative z-10">
            Methodology
          </span>
          <h2 className="h2-display mb-6 text-brand-navy relative z-10">
            Hands-on by default
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed relative z-10">
            We designed Codebridge workshops to be practical and rigorous - so
            you don&apos;t just &quot;learn concepts,&quot; you build analytical
            and coding skills that you can apply immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, idx) => {
            const styles = colorStyles[method.color];
            return (
              <div
                key={idx}
                className="rounded-[2rem] p-8 shadow-tile hover:shadow-tile-hover border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group backdrop-blur-2xl bg-white/60 hover:bg-white/90"
              >
                <div
                  className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20 transition-colors duration-500 pointer-events-none ${styles.blob}`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${styles.iconBg} ${styles.iconText}`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {method.icon}
                    </svg>
                  </div>
                  <h3
                    className={`font-bold text-lg text-brand-navy mb-3 transition-colors ${styles.titleHover}`}
                  >
                    {method.title}
                  </h3>
                  <p className="text-brand-navy/80 text-base leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
