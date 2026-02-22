import { notFound } from "next/navigation";
import Link from "next/link";
import { getReviewBySlug, getReviews } from "@/lib/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const reviews = getReviews();
  return reviews.map((r) => ({ slug: r.slug }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) notFound();
  return (
    <main className="min-h-screen p-8">
      <Button variant="ghost" asChild>
        <Link href="/reviews">← Back to reviews</Link>
      </Button>
      <Card className="mt-6 max-w-2xl">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar size="lg">
            <AvatarImage src={review.profilePic} alt={review.name} />
            <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{review.name}</p>
            <p className="text-sm text-muted-foreground">{review.rating}/5</p>
          </div>
        </CardHeader>
        <CardContent>
          <p>{review.text}</p>
        </CardContent>
      </Card>
    </main>
  );
}
