import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { getCourses } from "@/lib/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function CoursesPage() {
  const t = await getTranslations("courses");
  const courses = getCourses();
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">{t("listTitle")}</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <li key={course.slug}>
            <Link href={`/courses/${course.slug}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {course.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm">{course.description}</p>
                  <Button variant="link" className="mt-2 p-0" asChild>
                    <span>View course →</span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
