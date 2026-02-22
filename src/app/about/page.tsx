import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("home");
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-4 text-muted-foreground">{t("title")}</p>
    </main>
  );
}
