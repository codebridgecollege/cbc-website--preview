import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug, getCourses } from "@/lib/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const courses = getCourses();
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  return (
    <main className="min-h-screen p-8">
      <Button variant="ghost" asChild>
        <Link href="/courses">← Back to courses</Link>
      </Button>
      <Card className="mt-6 max-w-2xl">
        <CardHeader>
          <p className="text-sm text-muted-foreground">{course.duration}</p>
          <p className="text-2xl font-bold">{course.title}</p>
        </CardHeader>
        <CardContent>
          <p>{course.description}</p>
        </CardContent>
      </Card>
    </main>
  );
}
