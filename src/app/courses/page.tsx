import { getCourses, getThemeClasses } from "@/lib/content";
import Courses from "@/components/landing/Courses";

export default async function CoursesPage() {
  const courses = getCourses();
  const themeClasses = getThemeClasses();
  return (
    <div className="pt-24">
      <Courses courses={courses} themeClasses={themeClasses} />
    </div>
  );
}
