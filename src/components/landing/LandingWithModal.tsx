"use client";

import React from "react";
import Image from "next/image";
import Hero from "./Hero";
import Ticker from "./Ticker";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Methodology from "./Methodology";
import Tutors from "./Tutors";
import B2B from "./B2B";
import Scholarships from "./Scholarships";
import FAQ from "./FAQ";
import type { Course, ThemeClasses } from "@/types/course";
import type { Tutor } from "@/types/tutor";
import type { TickerLogo } from "@/types/ticker";
import type { Testimonial } from "@/types/testimonial";
import type { FAQItem } from "@/types/faq";

interface LandingWithModalProps {
  courses: Course[];
  themeClasses: ThemeClasses;
  tutors: Tutor[];
  tickerLogos: TickerLogo[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}

const LandingWithModal: React.FC<LandingWithModalProps> = ({
  courses,
  themeClasses,
  tutors,
  tickerLogos,
  testimonials,
  faqs,
}) => {
  return (
    <>
        <Hero />
        <Ticker logos={tickerLogos} />
        <Courses courses={courses} themeClasses={themeClasses} />

        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden z-10">
          <Image
            src="/images/workshop-env.jpg"
            alt="CodeBridge Workshop Environment"
            fill
            className="object-cover object-center"
            unoptimized
            sizes="100vw"
          />
        </div>

        <Testimonials testimonials={testimonials} />

        <Methodology />

        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden z-10">
          <Image
            src="/images/hands-on.jpg"
            alt="Hands-on learning"
            fill
            className="object-cover object-center"
            unoptimized
            sizes="100vw"
          />
        </div>

        <Tutors tutors={tutors} />

        <B2B />

        <Scholarships />

        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden z-10">
          <Image
            src="/images/community.jpg"
            alt="CodeBridge Community"
            fill
            className="object-cover object-center"
            unoptimized
            sizes="100vw"
          />
        </div>

        <FAQ faqs={faqs} />
    </>
  );
};

export default LandingWithModal;
