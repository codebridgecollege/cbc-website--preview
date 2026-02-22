export interface CourseFeature {
  strong: string;
  text: string;
}

export type CourseTheme = "amber" | "blue" | "emerald";

export interface ThemeClassSet {
  blob: string;
  badge: string;
  iconContainer: string;
  icon: string;
  pulse: string;
}

export type ThemeClasses = Record<CourseTheme, ThemeClassSet>;

export interface Course {
  id: string;
  title: string;
  badgeText: string;
  duration: string;
  description: string;
  features: CourseFeature[];
  nextStart: string;
  applyLink: string;
  theme: CourseTheme;
}
