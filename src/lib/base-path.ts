/**
 * Prepends the base path to absolute asset URLs (e.g. /images/logo.png).
 * Required because Next.js Image component does not automatically apply basePath
 * to src, unlike Link which does. Used when deployed under a subpath (e.g. /cbc-website--preview).
 */
export function withBasePath(path: string): string {
  if (!path || typeof path !== "string") return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return path.startsWith("/") ? base + path : path;
}
