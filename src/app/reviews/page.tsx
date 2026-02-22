import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { getReviews } from "@/lib/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function ReviewsPage() {
  const t = await getTranslations("reviews");
  const reviews = getReviews();
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">{t("listTitle")}</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {reviews.map((review) => (
          <li key={review.slug}>
            <Link href={`/reviews/${review.slug}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={review.profilePic} alt={review.name} />
                    <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.rating}/5
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm">{review.text}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
