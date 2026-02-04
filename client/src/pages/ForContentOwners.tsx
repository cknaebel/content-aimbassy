import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ForContentOwners() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] text-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8">
              For Content Owners
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Archive<br />
              Is Worth More<br />
              <span className="text-secondary">Than You Think</span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              AI companies need diverse, international training data. You have it. We connect the two.
            </p>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              We've spent two decades building relationships with broadcasters, production studios, and audio aggregators worldwide. When AI companies need content, they come to us. When content owners want new revenue streams, they come to us.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/questionnaire">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7"
                >
                  Submit Your Content <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 backdrop-blur-sm"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We<br />
              <span className="text-secondary">Do For You</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              We operate as your intermediary. You focus on creating content. We handle the licensing, negotiations, and delivery.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Global Reach to AI Buyers</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leading AI companies worldwide—multimodal, LLM, ASR, speech, and vision models. Data procurement teams. Research leads. Public-sector and sovereign AI initiatives. They come to us when they need diverse, international content.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You get access to buyers you wouldn't reach on your own. We've built these relationships over two decades.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Rights Management & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rights verification, licensing negotiations, legal compliance—we handle it. You don't need to become an expert in AI training data licensing. We already are.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  GDPR-compliant processes. Ethical sourcing. Proper documentation. No public distribution rights. Clean, defensible contracts.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Fair Compensation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Competitive pricing based on content quality, uniqueness, and market demand. Deal-by-deal flexibility. No minimum commitments beyond 100 hours of professional-quality content.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We operate on a commission basis. When you get paid, we get paid. Our incentives are aligned.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">White-Glove Service</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We're not a platform. We're intermediaries. You work with experienced professionals who understand both the content business and the AI training data market.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Seasoned veterans, not startup hustle. European approach to data governance. Relationship-driven, not transactional.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who We<br />
              <span className="text-secondary">Work With</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Broadcasters, production studios, audio aggregators, niche and international content libraries seeking new revenue streams.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-primary">Content Owners</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Broadcasters and media companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Production studios and archives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Audio content aggregators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Niche and international content libraries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Documentary and educational content producers</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-primary">Content Types</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Scripted content (films, series, fiction)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Animation and children's programming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>News broadcasts and documentaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Sports and live events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Radio shows, podcasts, audiobooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Music and performances</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We<br />
              <span className="text-secondary">Look For</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Not all content is suitable for AI training. Here's what matters.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Minimum Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>100 hours minimum</strong> - We work with substantial libraries, not one-off clips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Professional quality</strong> - Broadcast-grade or equivalent production standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Rights clearance</strong> - You must own or control the rights for AI training licensing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Clean feed</strong> - No burned-in subtitles or graphics (for video content)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">What Increases Value</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>International/rare languages</strong> - Non-English content is in high demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Diverse speakers</strong> - Multiple accents, ages, genders, cultural backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Metadata</strong> - Transcripts, subtitles, or descriptive data increase utility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Niche content</strong> - Specialized subject matter that's hard to find elsewhere</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              How It<br />
              <span className="text-secondary">Works</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Submit Your Content</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fill out our questionnaire. Tell us what you have, what rights you control, and what makes your content unique. We'll review and respond within a few business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Qualification Discussion</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If your content fits our portfolio, we'll schedule a call. We'll discuss rights, technical specifications, pricing expectations, and how we work.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Portfolio Integration</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We add your content to our portfolio. When AI companies request data that matches your content, we present it as an option. No exclusivity required.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Deal-by-Deal Licensing</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When a buyer wants your content, we negotiate terms, handle contracts, and coordinate delivery. You approve each deal. We get paid when you get paid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Monetize<br />
              <span className="text-secondary">Your Archive?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Fill out our questionnaire, and we'll respond within a few business days. No commitment, no fees unless we close a deal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" className="text-lg px-10 py-7">
                  Submit Your Content <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
