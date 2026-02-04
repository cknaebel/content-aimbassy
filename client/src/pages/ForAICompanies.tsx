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
              That Reduces<br />
              <span className="text-secondary">Western Bias</span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              300,000 hours of video. 3 million hours of audio. 70 languages. The world's largest independent portfolio of rights-cleared, internationally diverse training content.
            </p>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              We operate deal-by-deal with custom curation for each client. Not a platform. Not corporate. A specialized intermediary with two decades of experience connecting AI companies with content owners worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7"
                >
                  Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why AI Companies<br />
              <span className="text-secondary">Choose Us</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              We're not here to sell you a catalogue. We're here to understand your requirements and curate a match.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Scale That Matters</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  300,000 hours of video across scripted content, animation, news, sports, and documentaries. 3 million hours of audio including radio, podcasts, and rare languages. Not aggregated for the sake of volume—curated for quality and diversity.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">300K</div>
                    <div className="text-sm text-muted-foreground">video hours</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">3M</div>
                    <div className="text-sm text-muted-foreground">audio hours</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">70</div>
                    <div className="text-sm text-muted-foreground">languages</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Diversity That Reduces Bias</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  International and niche content from 70 languages. Not US-centric. Not English-only. Content that reflects the linguistic and cultural diversity of the world—because your AI models should too.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Rare languages and regional dialects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Non-western cultural perspectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>International cinema and broadcasting</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Flexibility You Need</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Deal-by-deal licensing. Custom curation. White-glove service. We don't operate a self-service platform because every AI company has different requirements. Tell us what you're building, and we'll match content to your needs.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Custom curation for your use case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>No minimum commitments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Samples available immediately</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold mb-4">Experience That Counts</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Two decades building relationships with content owners and AI buyers. We've seen the industry evolve. We understand both sides of the market. We operate as trusted intermediaries, not transactional vendors.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Seasoned veterans, not startup hustle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>European approach to data governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Ethical sourcing and provenance</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30">
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

      {/* How It Works */}
      <section className="py-24 bg-white">
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
                  <h3 className="text-2xl font-bold mb-3">Discuss Requirements</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What are you building? What data characteristics matter? Languages, genres, quality levels, use cases. We start with a conversation, not a form.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Curate & Sample</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We match content to your requirements. Human curation, not algorithmic recommendations. Samples available immediately for evaluation.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Clear Rights & License</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Rights verification, licensing negotiations, legal compliance. We handle it. You get clean, defensible data with proper provenance.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Deliver & Support</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    S3-WEST delivery. Fast, secure, reliable. Full datasets delivered on agreed timelines with complete metadata and documentation.
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
              Let's Discuss<br />
              <span className="text-secondary">Your Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We operate deal-by-deal with custom curation for each client. Tell us what you're building, and we'll curate a match.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="text-lg px-10 py-7">
                  Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
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
