import { readFileSync } from "fs";
import { join } from "path";
import type { Course, ThemeClasses } from "@/types/course";
import type { Contact } from "@/types/contact";
import type { Tutor } from "@/types/tutor";
import type { TickerLogo } from "@/types/ticker";
import type { Testimonial } from "@/types/testimonial";
import type { FAQItem } from "@/types/faq";
import { withBasePath } from "./base-path";

const contentDir = join(process.cwd(), "content");

export function getThemeClasses(): ThemeClasses {
  const path = join(contentDir, "course-themes", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as ThemeClasses;
}

export function getCourses(): Course[] {
  const path = join(contentDir, "courses", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as Course[];
}

export function getContact(): Contact {
  const path = join(contentDir, "contact", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as Contact;
}

export function getTutors(): Tutor[] {
  const path = join(contentDir, "tutors", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as Tutor[];
}

export function getTickerLogos(): TickerLogo[] {
  const path = join(contentDir, "ticker", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as TickerLogo[];
}

export function getTestimonials(): Testimonial[] {
  const path = join(contentDir, "testimonials", "index.json");
  const data = readFileSync(path, "utf-8");
  const testimonials = JSON.parse(data) as Testimonial[];
  return testimonials.map((testimonial) => ({
    ...testimonial,
    img: withBasePath(testimonial.img),
  }));
}

export function getFAQs(): FAQItem[] {
  const path = join(contentDir, "faq", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as FAQItem[];
}
