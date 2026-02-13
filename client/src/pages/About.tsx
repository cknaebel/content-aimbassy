import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO, { getOrganizationSchema } from "@/components/SEO";

export default function About() {
  return (
    <div className="w-full">
      <SEO 
        title="About Us - Three Decades in Content Licensing"
        description="Industry veterans with 30+ years in content licensing. We bridge content owners and AI companies with European governance standards and white-glove service."
        keywords="content licensing experts, AI training data professionals, European content licensing, media rights management, content brokerage"
        structuredData={getOrganizationSchema()}
      />
      {/* Hero Section - Dark, Dramatic */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#5D1681] via-[#8B2A9B] to-[#5D1681] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/dDbXrPiVGKcNkgmU.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              <span className="text-gradient-primary">Three decades</span> building the bridge<br />
              between content and technology.
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              We are not consultants. We are not a platform. We are seasoned operators who have spent thirty years navigating content licensing across continents, languages, and technological shifts—from broadcast to streaming, and now to AI training.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/GahmJxJUybEICPcz.jpg" 
                alt="Diverse team collaboration" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who <span className="text-primary">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Content AImbassy operates as the specialized licensing arm of Global Media Consult, a firm with roots in international media strategy and content distribution since the mid-1990s.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are industry veterans who have seen markets evolve, technologies disrupt, and business models transform. We know what works because we've done it—repeatedly, across multiple continents and content categories.
              </p>
            
              <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-6">
                <div className="text-5xl font-bold text-primary mb-2">30+</div>
                <div className="text-lg font-semibold mb-2">Years of Experience</div>
                <p className="text-muted-foreground">
                  Building relationships with content owners and technology buyers across traditional media and emerging platforms.
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <div className="text-5xl font-bold text-primary mb-2">70+</div>
                <div className="text-lg font-semibold mb-2">Languages</div>
                <p className="text-muted-foreground">
                  International and niche content from every corner of the globe—reducing algorithm bias, enriching model performance.
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <div className="text-5xl font-bold text-primary mb-2">300K+</div>
                <div className="text-lg font-semibold mb-2">Hours of Video</div>
                <p className="text-muted-foreground">
                  The world's largest independent portfolio of rights-cleared, audit-ready training content.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Dark Section */}
      <section className="py-24 bg-gradient-to-br from-[#5D1681] via-[#8B2A9B] to-[#5D1681] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              What Makes Us <span className="text-gradient-light">Different</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">European Perspective</h3>
                <p className="text-white/80 leading-relaxed">
                  Based in Europe, we bring a distinct international viewpoint to a market often dominated by US-centric providers. Data privacy, governance, and ethical sourcing are built into our process—not bolted on as afterthoughts.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Deal-by-Deal Curation</h3>
                <p className="text-white/80 leading-relaxed">
                  We don't run a platform. We don't aggregate for the sake of scale. Every dataset is curated, structured, and negotiated individually—tailored to the buyer's needs and the creator's constraints.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">White-Glove Service</h3>
                <p className="text-white/80 leading-relaxed">
                  From initial consultation through delivery and payment, we manage every step. No self-service portals. No automated workflows. Just seasoned professionals who understand the nuances of content licensing.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Relationship-Driven</h3>
                <p className="text-white/80 leading-relaxed">
                  We operate on trust, reputation, and long-term partnerships—not transaction volume. Our network of content owners and AI buyers has been built over decades, not months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our <span className="text-primary">Approach</span>
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">For Content Owners</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We help you unlock new revenue from archival and underutilized libraries. Our process is transparent: clear per-minute pricing, robust legal protections, and ongoing representation as new opportunities arise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've developed contractual frameworks that explicitly prohibit public distribution, deepfakes, sequels, and unauthorized use of names, faces, stories, or characters. Your creative legacy remains protected.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">For AI Companies</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We provide rights-cleared, audit-ready datasets that reduce legal risk and improve model performance. Our portfolio spans 70+ languages and diverse content categories—helping you build more balanced, representative AI systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every dataset is structured deal-by-deal, with metadata, clean feeds, and delivery via S3-WEST for fast, cost-effective access. Samples are available immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why <span className="text-primary">Now</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The AI training data market is experiencing unprecedented growth. Unlike traditional licensing, this model never involves public distribution—your content serves as educational data, similar to how textbooks function in human education.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The timing is significant. As the market matures and more content becomes available, premium pricing is expected to decrease. Rights holders who act now benefit from early-market advantage before inevitable price adjustments.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg mt-8">
                <p className="text-foreground text-xl font-medium italic leading-relaxed">
                  "This isn't about replacing creative work. It's about enabling machines to understand visual structure whilst respecting and protecting the original content and its creators."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-primary">Start the Conversation?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Whether you're a content owner looking to monetize your library or an AI company seeking diverse, rights-cleared training data, we're here to help.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/for-ai-companies">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7 rounded-md group shadow-lg"
                >
                  I'm an AI buyer
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/for-content-owners">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-10 py-7 rounded-md"
                >
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
