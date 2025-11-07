import { useRoute, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Calendar, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  const { data: post, isLoading, error } = trpc.blog.getBySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const parseCategories = (categoriesJson: string): string[] => {
    try {
      return JSON.parse(categoriesJson);
    } catch {
      return [];
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <div className="container max-w-2xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">Article Not Found</h1>
          <p className="text-xl text-muted-foreground">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-12">
        <div className="container max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
              {parseCategories(post.categories).length > 0 && (
                <>
                  <span className="mx-2">•</span>
                  <div className="flex flex-wrap gap-2">
                    {parseCategories(post.categories).map((category, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <article className="prose prose-lg max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-p:text-foreground/90 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-foreground/90 prose-ol:text-foreground/90
            prose-li:marker:text-primary
            prose-blockquote:border-l-primary prose-blockquote:text-foreground/80
            prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:rounded
          ">
            <Streamdown>{post.content}</Streamdown>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-3">
                Interested in AI Content Licensing?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground">
                If you have video content and want to explore licensing opportunities for AI training, we're here to guide you through the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/questionnaire">
                  <Button size="lg">
                    Submit Your Content
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
