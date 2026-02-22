import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const t = await getTranslations("home");
  return (
    <main className="min-h-screen p-8">
      <nav className="mb-8 flex gap-4">
        <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/reviews">Reviews</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/courses">Courses</Link>
        </Button>
      </nav>
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-muted-foreground">{t("welcome")}</p>
    </main>
  );
}
