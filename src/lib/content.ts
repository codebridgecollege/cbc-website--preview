import { readFileSync } from "fs";
import { join } from "path";

const contentDir = join(process.cwd(), "content");

export interface Review {
  slug: string;
  name: string;
  profilePic: string;
  rating: number;
  text: string;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  duration: string;
}

export function getReviews(): Review[] {
  const path = join(contentDir, "reviews", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as Review[];
}

export function getReviewBySlug(slug: string): Review | undefined {
  return getReviews().find((r) => r.slug === slug);
}

export function getCourses(): Course[] {
  const path = join(contentDir, "courses", "index.json");
  const data = readFileSync(path, "utf-8");
  return JSON.parse(data) as Course[];
}

export function getCourseBySlug(slug: string): Course | undefined {
  return getCourses().find((c) => c.slug === slug);
}
