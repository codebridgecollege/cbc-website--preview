import {
  getCourses,
  getThemeClasses,
  getTutors,
  getTickerLogos,
  getTestimonials,
  getFAQs,
} from "@/lib/content";
import LandingWithModal from "@/components/landing/LandingWithModal";

export default async function HomePage() {
  const courses = getCourses();
  const themeClasses = getThemeClasses();
  const tutors = getTutors();
  const tickerLogos = getTickerLogos();
  const testimonials = getTestimonials();
  const faqs = getFAQs();
  return (
    <LandingWithModal
      courses={courses}
      themeClasses={themeClasses}
      tutors={tutors}
      tickerLogos={tickerLogos}
      testimonials={testimonials}
      faqs={faqs}
    />
  );
}
