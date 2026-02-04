import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ForContentOwners() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Monetize Your Video & Audio Content Through AI Training
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your audio or video libraries into valuable revenue streams. We connect content rights holders with leading AI companies seeking high-quality training materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/questionnaire">
                <Button size="lg">Submit Your Content</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Schedule a Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Access to leading AI companies worldwide seeking diverse, international content for training next-generation models.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Rights Management</h3>
              <p className="text-muted-foreground">
                We handle all rights verification, licensing negotiations, and legal compliance on your behalf.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Fair Compensation</h3>
              <p className="text-muted-foreground">
                Competitive pricing based on content quality, uniqueness, and market demand. Deal-by-deal flexibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Work With</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Content Owners</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Broadcasters and media companies</li>
                <li>• Production studios and archives</li>
                <li>• Audio content aggregators</li>
                <li>• Niche and international content libraries</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Content Types</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Scripted content (films, series)</li>
                <li>• Animation and children's programming</li>
                <li>• News broadcasts and documentaries</li>
                <li>• Sports and live events</li>
                <li>• Radio shows and podcasts</li>
                <li>• Music and performances</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Content Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">Minimum Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <div>
                    <strong>Volume:</strong> Minimum 100 hours of content (video or audio)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <div>
                    <strong>Rights:</strong> Clear ownership or licensing rights for AI training purposes
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <div>
                    <strong>Quality:</strong> Professional production quality (1080p+ for video, clear audio)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <div>
                    <strong>Format:</strong> Digital files in standard formats (MP4, MP3, WAV, etc.)
                  </div>
                </li>
              </ul>
            </Card>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h4 className="font-bold mb-2">Especially Valuable:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Non-English and rare language content</li>
                <li>• International and regional content</li>
                <li>• Niche genres and specialized topics</li>
                <li>• Clean feed (no subtitles or graphics)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Submit</h3>
              <p className="text-muted-foreground">Fill out our content submission form with details about your library</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Review</h3>
              <p className="text-muted-foreground">We assess your content and discuss potential opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Match</h3>
              <p className="text-muted-foreground">We connect your content with interested AI companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">License</h3>
              <p className="text-muted-foreground">We negotiate terms and handle all licensing details</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Monetize Your Content?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start by submitting your content details. We'll review and get back to you within 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/questionnaire">
              <Button size="lg">Submit Your Content</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
