import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";

export default function Portfolio() {
  const categories = [
    {
      title: "Scripted Content",
      hours: "47,000",
      suppliers: "18 suppliers",
      description: "Foreign language films, series, and fiction. Multiple genres, high production quality, diverse cultural perspectives.",
      features: ["Drama & Comedy", "International Cinema", "Period Pieces"]
    },
    {
      title: "Animation",
      hours: "13,000",
      suppliers: "10 suppliers",
      description: "Children's programming, adult animation, various styles. From traditional 2D to modern 3D production.",
      features: ["Children's Content", "Adult Animation", "Anime & Cartoons"]
    },
    {
      title: "News & Face Mapping",
      hours: "75,000",
      suppliers: "Multiple sources",
      description: "News broadcasts and documentary content. Ideal for face mapping, speech recognition, and real-world scenario training.",
      features: ["Foreign Languages", "Diverse Speakers", "Real-World Context"]
    },
    {
      title: "Sports & Motion",
      hours: "96,000",
      suppliers: "Global coverage",
      description: "Sports footage and motion-rich content. Computer vision training, action recognition, crowd analysis.",
      features: ["Multiple Sports", "Action Sequences", "Crowd Dynamics"]
    },
    {
      title: "Audio Content",
      hours: "3,000,000",
      suppliers: "70 languages",
      description: "Radio shows, podcasts, audiobooks, conversational content. Rare languages, regional dialects, authentic speech patterns.",
      features: ["Rare Languages", "Regional Dialects", "Conversational Data"]
    },
    {
      title: "Music & Performances",
      hours: "Extensive",
      suppliers: "Global artists",
      description: "Concerts, performances, music videos. Live and studio recordings across genres.",
      features: ["Live Performances", "Studio Recordings", "Global Genres"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] text-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8">
              Not a Catalogue—A Starting Point
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Portfolio
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              300,000 hours of video. 3 million hours of audio. 70 languages. This is what we have available today. Tomorrow, it grows.
            </p>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              We don't operate a self-service platform. This portfolio is a conversation starter. Tell us what you need, and we'll curate a match.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/for-ai-companies">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7"
                >
                  Request Data <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 backdrop-blur-sm"
                >
                  Discuss Your Needs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Content<br />
              <span className="text-secondary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Six core categories, each with multiple suppliers and growing inventory. This is not exhaustive—it's representative.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card key={category.title} className="p-8 hover:shadow-xl transition-shadow border-l-4 border-l-secondary">
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{category.hours}</span>
                    <span className="text-sm text-muted-foreground">hours</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{category.suppliers}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Assets */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Strategic<br />
              <span className="text-secondary">Assets</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Specialized content with unique value. Access requires NDA and qualification discussion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary">
                    <Lock className="h-3 w-3" />
                    NDA Required
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 pr-24">E-Sports with Metadata</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive e-sports coverage with detailed metadata. Game state data, player actions, commentary, crowd reactions. Ideal for multimodal training and action recognition.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Available to qualified buyers after NDA and use-case discussion.
                </p>
              </Card>

              <Card className="p-10 border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary">
                    <Lock className="h-3 w-3" />
                    NDA Required
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 pr-24">Volumetric Capture</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cutting-edge volumetric video capture. Full 3D spatial data, multiple camera angles, depth information. Next-generation AI applications, spatial computing, immersive experiences.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Available to qualified buyers after NDA and use-case discussion.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical<br />
              <span className="text-secondary">Specifications</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              What you get. No surprises, no compromises.
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
                    <span>Complete documentation and provenance</span>
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
                    <span>No public distribution rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>GDPR-compliant processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Ethical sourcing and documentation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-4">Flexibility</h3>
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
              Let's Discuss<br />
              <span className="text-secondary">Your Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              This portfolio is a starting point. Tell us what you're building, and we'll curate a match.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/for-ai-companies">
                <Button size="lg" className="text-lg px-10 py-7">
                  Request Data <ArrowRight className="ml-2 h-5 w-5" />
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
