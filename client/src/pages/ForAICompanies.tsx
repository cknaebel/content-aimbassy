import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ForAICompanies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] text-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8">
              For AI Companies
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Training Data<br />
              That Reflects<br />
              <span className="text-secondary">Global Culture</span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Rare languages, international news, specialized sports footage, and cultural content you won't find elsewhere. Curated deal-by-deal with European governance standards.
            </p>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              We're not a platform. We're a bespoke atelier for AI training data—human-led, relationship-driven, and culturally aware. Tell us what you're building, and we'll curate a match.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7"
                >
                  What we steward <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 backdrop-blur-sm"
                >
                  Start a conversation
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
              Our<br />
              <span className="text-secondary">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              We operate as stewards, not brokers. Every dataset is curated with human judgment, cultural context, and respect for creators.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Globally Diverse Portfolio</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the largest curated portfolios of rare and regional languages. International news content, specialized sports footage, and cultural material from three decades of relationships with content owners worldwide. Not US-centric. Not English-only.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Scale is a consequence of trust, not our identity.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Conversation Before Curation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We don't operate a self-service platform. Every engagement begins with understanding your specific requirements—what you're building, what data characteristics matter, what cultural contexts you need. Then we curate a match.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  No catalogue browsing. No instant downloads. Just careful matching.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">European Governance Standards</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Three decades of experience with European data governance. GDPR-compliant processes, ethical sourcing documentation, and clear provenance for every dataset. We understand both the legal landscape and the cultural responsibility.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Not Silicon Valley hype. European ethics.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Deal-by-Deal Flexibility</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  No rigid pricing tiers. No minimum commitments. We design each deal around your specific requirements, timeline, and budget. Flexible licensing terms that work for your business model and use case.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Custom curation, not standardized packages.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You're Really Buying */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You're<br />
              <span className="text-secondary">Really Buying</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Beyond the data itself, you're buying peace of mind and professional service.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Defensible Rights & Provenance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every dataset comes with clear licensing documentation and provenance. We know the rights holders, we have the agreements, and we can demonstrate the chain of custody. No legal ambiguity, no future liability.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Fast Pipeline</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver samples immediately and full datasets on agreed timelines. S3-WEST server for cost-effective transfer. Complete documentation and metadata. No delays, no surprises.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Deal Design Tailored to Your Needs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No rigid pricing tiers or minimum commitments. We design each deal around your specific requirements, timeline, and budget. Flexible licensing terms that work for your business model.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Human Curation, Not Algorithms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every package is curated by people who understand both the content and your needs. We review quality, verify metadata, and ensure cultural appropriateness. No automated scraping, no bulk dumping.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Common<br />
              <span className="text-secondary">Use Cases</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Multimodal, LLM, ASR, speech, and vision models. Data procurement teams. Research leads. Public-sector and sovereign AI initiatives.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="font-bold mb-3 text-lg">Speech Recognition & Synthesis</h4>
                <p className="text-sm text-muted-foreground">
                  Audio content across 70 languages for ASR, TTS, and voice assistant training. Rare languages, regional dialects, conversational data.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-3 text-lg">Face Mapping & Computer Vision</h4>
                <p className="text-sm text-muted-foreground">
                  News broadcasts, documentaries, and scripted content for face recognition, emotion detection, and visual understanding.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-3 text-lg">Motion Analysis & Action Recognition</h4>
                <p className="text-sm text-muted-foreground">
                  Sports footage, action sequences, and motion-rich content for activity recognition and movement prediction.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-3 text-lg">Language Model Training</h4>
                <p className="text-sm text-muted-foreground">
                  Transcripts, subtitles, and conversational content for LLM training. Rare languages and non-western perspectives.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-3 text-lg">Multimodal Training</h4>
                <p className="text-sm text-muted-foreground">
                  Video + audio + text for models that understand multiple modalities. Synchronized data with rich context.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-3 text-lg">Sovereign AI Initiatives</h4>
                <p className="text-sm text-muted-foreground">
                  Public-sector and government AI projects requiring data sovereignty, ethical sourcing, and cultural representation.
                </p>
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
              We operate as stewards, not brokers. Every engagement is consultative, selective, and relationship-focused.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Conversation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What are you building? What data characteristics matter? Languages, genres, quality levels, cultural contexts. We start with understanding your needs, not showing you a catalogue.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Curation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We match content to your requirements with human judgment and cultural context. Samples available immediately for evaluation. No algorithmic recommendations—just careful matching.
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
                    Rights verification, licensing negotiations, legal compliance. We handle it with respect for creators and cultural responsibility. You get clean, defensible data with proper provenance.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Delivery</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    S3-WEST delivery. Fast, secure, reliable. Full datasets delivered on agreed timelines with complete metadata and documentation. Ongoing support throughout.
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
              Tell us what you're building, and we'll curate a match that fits your needs, timeline, and budget. No catalogue browsing. No instant downloads. Just careful matching.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="text-lg px-10 py-7">
                  What we steward <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7">
                  Start a conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
