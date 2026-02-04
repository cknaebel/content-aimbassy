import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Users, Zap, Video, Mic, ArrowRight } from "lucide-react";

export default function Home() {
  const differentiators = [
    {
      title: "Scale",
      value: "300K hours video",
      sub: "3M hours audio",
    },
    {
      title: "Diversity",
      value: "70 languages",
      sub: "Global content",
    },
    {
      title: "Flexibility",
      value: "Deal-by-deal",
      sub: "Custom curation",
    },
  ];

  const keyPoints = [
    {
      icon: Globe,
      title: "International & Diverse",
      description: "Reduce western bias with truly global training data across 70 languages and multiple regions.",
    },
    {
      icon: Shield,
      title: "Rights-Cleared & Compliant",
      description: "All content fully licensed with documented provenance. GDPR compliant, European data governance.",
    },
    {
      icon: Users,
      title: "White-Glove Service",
      description: "Not a platform. Seasoned industry veterans offering tailored curation and deal-by-deal flexibility.",
    },
    {
      icon: Zap,
      title: "Operational Readiness",
      description: "S3-WEST server for fast delivery. Samples available immediately. Clean feed, 1080p+, metadata included.",
    },
  ];

  const portfolioHighlights = [
    { category: "Scripted", hours: "47K", icon: Video },
    { category: "Animation", hours: "13K", icon: Video },
    { category: "News/Face Mapping", hours: "75K", icon: Video },
    { category: "Sports/Motion", hours: "96K", icon: Video },
    { category: "Documentaries", hours: "45K", icon: Video },
    { category: "Audio (70 languages)", hours: "3M", icon: Mic },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 text-primary">
              A service by Global Media Consult
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rights-Cleared Training Data for AI Development
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We connect AI companies with the world's largest independent portfolio of diverse, international video and audio content—300,000 hours of video, 3 million hours of audio in 70 languages.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/request-data">
                <Button size="lg" className="text-lg px-8 py-6">
                  Request Data
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/questionnaire">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Submit Your Content
                </Button>
              </Link>
            </div>

            {/* Trust Signal */}
            <p className="text-sm text-muted-foreground">
              Seasoned industry veterans. European approach. Independent aggregator.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              {differentiators.map((item) => (
                <div key={item.title} className="p-6 border border-border rounded-md bg-card">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{item.title}</div>
                  <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point) => (
                <div key={point.title} className="p-6 border border-border rounded-md bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* For AI Companies */}
              <div className="p-8 border border-border rounded-md bg-card">
                <h3 className="text-2xl font-semibold mb-4">For AI Companies</h3>
                <p className="text-muted-foreground mb-6">
                  Multimodal, LLM, ASR, speech, vision models. Data procurement teams, research leads, public-sector and sovereign AI initiatives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">High-quality, diverse training data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Reduce western bias in models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Rights-cleared, compliant content</span>
                  </li>
                </ul>
                <Link href="/for-ai-companies">
                  <Button className="w-full">
                    Explore Our Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* For Content Owners */}
              <div className="p-8 border border-border rounded-md bg-card">
                <h3 className="text-2xl font-semibold mb-4">For Content Owners</h3>
                <p className="text-muted-foreground mb-6">
                  Broadcasters, media companies, production studios, audio aggregators, niche and international content libraries.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">New revenue from existing libraries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Deal-by-deal flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Legal protection, transparent terms</span>
                  </li>
                </ul>
                <Link href="/for-content-owners">
                  <Button variant="outline" className="w-full">
                    Submit Your Content
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">01</div>
                <h3 className="font-semibold text-lg mb-2">Discuss</h3>
                <p className="text-sm text-muted-foreground">
                  Initial conversation about your needs
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">02</div>
                <h3 className="font-semibold text-lg mb-2">Curate</h3>
                <p className="text-sm text-muted-foreground">
                  We match content to your requirements
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">03</div>
                <h3 className="font-semibold text-lg mb-2">Clear</h3>
                <p className="text-sm text-muted-foreground">
                  Rights verification and licensing
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">04</div>
                <h3 className="font-semibold text-lg mb-2">Deliver</h3>
                <p className="text-sm text-muted-foreground">
                  S3-WEST, fast and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Portfolio Highlights</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Diverse content categories across video and audio, all rights-cleared and ready for AI training.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {portfolioHighlights.map((item) => (
                <div key={item.category} className="p-4 border border-border rounded-md bg-card flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{item.category}</div>
                    <div className="text-sm text-muted-foreground">{item.hours} hours</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Governance */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Trust & Governance</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 border border-border rounded-md bg-card">
                <div className="font-semibold mb-2">GDPR Compliant</div>
                <div className="text-sm text-muted-foreground">European data governance standards</div>
              </div>
              <div className="p-6 border border-border rounded-md bg-card">
                <div className="font-semibold mb-2">Rights-Cleared</div>
                <div className="text-sm text-muted-foreground">All content fully licensed</div>
              </div>
              <div className="p-6 border border-border rounded-md bg-card">
                <div className="font-semibold mb-2">Documented Provenance</div>
                <div className="text-sm text-muted-foreground">Complete chain of custody</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start a Conversation?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We operate on a deal-by-deal basis, tailoring content selection and licensing arrangements to your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request-data">
                <Button size="lg">Request Data</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GMC Attribution */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img 
              src="/gmc-logo.png" 
              alt="Global Media Consult" 
              className="h-12 w-auto opacity-60"
            />
            <div className="text-center md:text-left">
              <div className="text-sm font-medium text-muted-foreground">
                Content AImbassy is a service by Global Media Consult
              </div>
              <div className="text-xs text-muted-foreground">
                Decades of experience in media licensing. Based in Germany.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
