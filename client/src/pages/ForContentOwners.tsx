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
              Your Content<br />
              Deserves Careful<br />
              <span className="text-secondary">Stewardship</span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              AI companies need diverse, culturally rich training data. You've created it. We connect the two—with respect for your work and clear, defensible rights.
            </p>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              We're not aggregators or speculators. We're stewards. Three decades building relationships with broadcasters, studios, and archives worldwide. When AI companies need content, they trust us. When content owners seek partnerships, they trust us.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7"
                >
                  Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We<br />
              <span className="text-secondary">Work With You</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              We operate as stewards, not brokers. Your content is cultural expression, not raw material. We treat it accordingly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Respect for Your Work</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your content represents creative effort, cultural value, and often decades of archival work. We don't treat it as commodity inventory. Every partnership begins with understanding what makes your content unique and valuable.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Cultural expression, not raw material.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Selective Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We work with AI companies who understand the responsibility that comes with training on cultural content. European governance standards, ethical sourcing documentation, and clear use-case discussions. No bulk scraping, no speculative licensing.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Quality partnerships, not volume deals.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Clear Rights & Fair Terms</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rights verification, licensing negotiations, legal compliance—we handle it with transparency. GDPR-compliant processes, proper documentation, defensible contracts. No public distribution rights. You approve each deal.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Transparent terms, no hidden clauses.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Deal-by-Deal Flexibility</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  No exclusivity required. No minimum commitments beyond quality thresholds. We operate on a commission basis—when you get paid, we get paid. Our incentives are aligned with finding the right partnerships, not the most partnerships.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Aligned incentives, not volume pressure.
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
              <span className="text-secondary">Partner With</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Broadcasters, production studios, audio aggregators, and archives with substantial libraries seeking new revenue streams while maintaining control and respect for their content.
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
                    <span>International and niche content libraries</span>
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

      {/* What We Look For */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes<br />
              <span className="text-secondary">Content Valuable</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Not all content is suitable for AI training partnerships. Here's what matters to AI companies—and therefore to us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Quality Thresholds</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Substantial libraries</strong> - We work with archives, not one-off clips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Professional quality</strong> - Broadcast-grade or equivalent production standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Rights clarity</strong> - You must own or control the rights for AI training licensing</span>
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
                    <span><strong>Cultural diversity</strong> - Non-western perspectives and regional content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Metadata richness</strong> - Transcripts, subtitles, or descriptive data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Specialized content</strong> - Niche subject matter that's hard to find elsewhere</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We<br />
              <span className="text-secondary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              A consultative, selective process focused on finding the right partnerships—not the most partnerships.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Initial Conversation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Tell us about your content. What you have, what rights you control, what makes it unique. We'll discuss whether it fits our portfolio and how we work. No forms, no automation—just conversation.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Qualification & Terms</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If your content fits, we'll discuss rights, technical specifications, pricing expectations, and partnership terms. Transparent, straightforward, respectful of your time and expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Stewardship</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We represent your content to AI companies who match your values and requirements. When there's interest, we handle negotiations, contracts, and delivery coordination. You approve each deal.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Partnership</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We get paid when you get paid. Our incentives are aligned with finding partnerships that respect your content, meet your requirements, and provide fair compensation. Long-term relationships, not one-off transactions.
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
              Let's Start<br />
              <span className="text-secondary">a Conversation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Tell us about your content, and we'll discuss whether we're the right stewards for it. No commitment, no fees unless we close a deal that works for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 py-7">
                  Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
