import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Portfolio() {
  const curatedPackages = [
    {
      title: "Rare Languages Audio",
      description: "One of the largest curated audio portfolios of rare and regional languages. Radio shows, podcasts, audiobooks, and conversational content from 70 languages—including endangered dialects and regional variants rarely found in commercial datasets.",
      examples: ["Indigenous languages of the Americas", "African language families", "Southeast Asian regional dialects", "Authentic conversational patterns"]
    },
    {
      title: "News & Interviews for Face Mapping",
      description: "Extensive international news content and documentary interviews. Ideal for face mapping, speech recognition, and real-world scenario training. Diverse speakers, authentic contexts, professional production quality.",
      examples: ["International broadcast news", "Documentary interviews", "Panel discussions", "Real-world conversational contexts"]
    },
    {
      title: "Sports & High-Motion",
      description: "Specialized sports footage and motion-rich content from leading global suppliers. Computer vision training, action recognition, crowd dynamics. Multiple sports, professional production, diverse contexts.",
      examples: ["Action sequences and fast motion", "Crowd behavior and dynamics", "Multiple sports disciplines", "Professional and amateur contexts"]
    },
    {
      title: "Instructional & Documentary",
      description: "Scripted content, educational programming, and documentary material. Foreign language films, series, and instructional content across multiple genres. High production quality, diverse cultural perspectives.",
      examples: ["International cinema and series", "Educational programming", "Documentary content", "Instructional material"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="What We Steward - Curated AI Training Content"
        description="Rare languages audio, international news, sports footage, and cultural content. 100+ languages, 400,000+ hours of video and 4,000,000+ hours of audio content for AI training."
        keywords="rare language datasets, multilingual AI training data, sports footage licensing, news content licensing, cultural diversity datasets, audio datasets"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#5D1681] via-[#8B2A9B] to-[#5D1681] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/MNimtILisDAcNBak.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8">
              Not a Catalogue—A Conversation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              What We Steward
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Three decades of relationships with content owners worldwide. Rare languages, international news, specialized sports footage, and cultural content you won't find elsewhere.
            </p>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              We don't operate a self-service platform. This portfolio represents capacity and trust—not a shopping list. Tell us what you need, and we'll curate a match.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/for-ai-companies">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7"
                >
                  I'm an AI buyer <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 backdrop-blur-sm"
                >
                  I'm a content owner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Packages */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Curated<br />
              <span className="text-gradient-primary">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Four representative examples of what we steward. Each package is tailored to your specific needs—these are starting points for conversation, not fixed offerings.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {curatedPackages.map((pkg) => (
                <Card key={pkg.title} className="p-8 hover:shadow-xl transition-shadow border-l-4 border-l-secondary">
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{pkg.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary mb-3">Examples include:</p>
                    {pkg.examples.map((example) => (
                      <div key={example} className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span className="text-sm text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Capacity */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our<br />
              <span className="text-gradient-primary">Capacity</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Scale is a consequence of trust, not our identity. These numbers represent three decades of relationships with content owners worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Video Content</p>
                <p className="text-4xl font-bold mb-2">400,000+</p>
                <p className="text-muted-foreground">hours available</p>
              </Card>

              <Card className="p-8 text-center border-2 border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Audio Content</p>
                <p className="text-4xl font-bold mb-2">4,000,000+</p>
                <p className="text-muted-foreground">hours available</p>
              </Card>

              <Card className="p-8 text-center border-2 border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Languages</p>
                <p className="text-4xl font-bold mb-2">100+</p>
                <p className="text-muted-foreground">including rare dialects</p>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-white rounded-lg border-l-4 border-l-secondary">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This portfolio grows continuously through our relationships with content owners. We don't scrape, speculate, or stockpile. We steward content on behalf of rights holders who trust us to find the right partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You're Really Buying */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You're<br />
              <span className="text-gradient-primary">Really Buying</span>
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

      {/* Technical Standards */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical<br />
              <span className="text-gradient-primary">Standards</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              What you can expect from every delivery. No compromises on quality.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Video Quality</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>1080p+ horizontal format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Clean feed (no subtitles or graphics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Professional production quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Basic metadata included</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Rights & Compliance</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Rights-cleared for AI training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>GDPR-compliant processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Ethical sourcing documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Complete provenance records</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Delivery</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>S3-WEST server (fast, cost-effective)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Samples available immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Full datasets on agreed timelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Complete documentation included</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Service Approach</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Deal-by-deal licensing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Custom curation for your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>No minimum commitments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>White-glove service throughout</span>
                  </li>
                </ul>
              </Card>
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
              <span className="text-gradient-primary">a Conversation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              This portfolio is a starting point. Tell us what you're building, and we'll curate a match that fits your needs, timeline, and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/for-ai-companies">
                <Button size="lg" className="text-lg px-10 py-7">
                  I'm an AI buyer <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7">
                  I'm a content owner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
