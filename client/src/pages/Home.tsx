import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroLogoRef = useRef<HTMLImageElement>(null);

  // 3D logo tilt effect
  useEffect(() => {
    const logo = heroLogoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * 10;
      const rotateY = (x / rect.width) * -10;
      
      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      logo.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    };

    logo.addEventListener("mousemove", handleMouseMove);
    logo.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      logo.removeEventListener("mousemove", handleMouseMove);
      logo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-primary/10"></div>
        </div>
        
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 text-primary">
              AI Content Licensing Experts
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
              Rights-Cleared Training Data for{" "}
              <span className="text-secondary animate-text-shimmer">AI Development</span>
            </h1>
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              We connect AI companies with the world's largest independent portfolio of diverse, international video and audio content. 300,000 hours of video and 3 million hours of audio across 70 languages.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/for-ai-companies">
                <Button 
                  size="lg" 
                  className="btn-modern bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-md group"
                >
                  Request Data
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/for-content-owners">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-md"
                >
                  Submit Your Content
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              A service by <strong>Global Media Consult</strong>
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              ref={heroLogoRef}
              src="/hero-bg.jpg" 
              alt="AI Training Content" 
              className="w-full max-w-md rounded-lg shadow-2xl transition-transform duration-200 ease-out"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What Makes Us Different</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left p-4 text-xl font-bold">Scale</th>
                  <th className="text-left p-4 text-xl font-bold">Diversity</th>
                  <th className="text-left p-4 text-xl font-bold">Flexibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">
                    <p className="text-3xl font-bold text-primary mb-2">300K hours</p>
                    <p className="text-muted-foreground">video content</p>
                    <p className="text-3xl font-bold text-primary mt-4 mb-2">3M hours</p>
                    <p className="text-muted-foreground">audio content</p>
                  </td>
                  <td className="p-4">
                    <p className="text-3xl font-bold text-primary mb-2">70 languages</p>
                    <p className="text-muted-foreground mb-4">Global content</p>
                    <p className="font-semibold">Reduces western bias</p>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold mb-2">Deal-by-deal</p>
                    <p className="text-muted-foreground mb-4">Custom curation</p>
                    <p className="font-semibold">White-glove service</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Differentiators</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold mb-2">Largest independent portfolio</h4>
                <p className="text-sm text-muted-foreground">Not a platform, not corporate. We operate as a specialized intermediary.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-2">Reduces western bias</h4>
                <p className="text-sm text-muted-foreground">International and niche content from 70 languages helps create more balanced AI models.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-2">European approach</h4>
                <p className="text-sm text-muted-foreground">Alternative to US-centric providers, with focus on data privacy and governance.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold mb-2">Industry veterans</h4>
                <p className="text-sm text-muted-foreground">Decades of experience connecting content owners with buyers.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">For AI Companies</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li>• Multimodal, LLM, ASR, speech, and vision models</li>
                <li>• Data procurement and partnerships teams</li>
                <li>• Research and engineering leads</li>
                <li>• Public-sector and sovereign AI initiatives</li>
              </ul>
              <Link href="/for-ai-companies">
                <Button className="w-full">
                  Explore Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">For Content Owners</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li>• Broadcasters and media companies</li>
                <li>• Production studios and archives</li>
                <li>• Audio content aggregators</li>
                <li>• Niche and international content libraries</li>
              </ul>
              <Link href="/for-content-owners">
                <Button className="w-full">
                  Submit Your Content <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
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
              <h3 className="text-xl font-bold mb-2">Discuss</h3>
              <p className="text-muted-foreground">Initial conversation about your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Curate</h3>
              <p className="text-muted-foreground">We match content to your requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Clear</h3>
              <p className="text-muted-foreground">Rights verification and licensing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deliver</h3>
              <p className="text-muted-foreground">S3-WEST, fast and secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio Highlights</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <h4 className="font-bold mb-2">Scripted</h4>
              <p className="text-2xl font-bold text-primary mb-1">47K hours</p>
              <p className="text-sm text-muted-foreground">18 suppliers</p>
            </Card>
            <Card className="p-6 text-center">
              <h4 className="font-bold mb-2">Animation</h4>
              <p className="text-2xl font-bold text-primary mb-1">13K hours</p>
              <p className="text-sm text-muted-foreground">10 suppliers</p>
            </Card>
            <Card className="p-6 text-center">
              <h4 className="font-bold mb-2">News</h4>
              <p className="text-2xl font-bold text-primary mb-1">75K hours</p>
              <p className="text-sm text-muted-foreground">Face mapping</p>
            </Card>
            <Card className="p-6 text-center">
              <h4 className="font-bold mb-2">Sports</h4>
              <p className="text-2xl font-bold text-primary mb-1">96K hours</p>
              <p className="text-sm text-muted-foreground">Motion data</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We operate deal-by-deal with custom curation for each client. Samples available immediately.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/for-ai-companies">
              <Button size="lg">Request Data</Button>
            </Link>
            <Link href="/for-content-owners">
              <Button size="lg" variant="outline">Submit Content</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* GMC Attribution */}
      <section className="py-8 border-t">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/logo-header.png" 
              alt="Global Media Consult" 
              className="h-12 w-auto"
            />
            <div className="text-left">
              <p className="font-semibold">Content AImbassy</p>
              <p className="text-sm text-muted-foreground">a service by Global Media Consult</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
