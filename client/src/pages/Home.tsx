import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark, Dramatic, Asymmetric */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8">
              20+ Years in Content Licensing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              <span className="text-secondary">Bespoke</span> AI training data licensing—<br />
              rights-cleared, audit-ready, globally diverse.
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mb-10">
              We curate and structure datasets deal-by-deal, with European governance standards and a white-glove process that protects creators and de-risks buyers.
            </p>

            <div className="flex flex-wrap gap-4">
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
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 rounded-md backdrop-blur-sm"
                >
                  I'm a content owner
                </Button>
              </Link>
            </div>

            <p className="text-sm text-white/60 pt-6">
              A service by <strong className="text-white/90">Global Media Consult</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Why We're<br />
              <span className="text-secondary">Different</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div>
                <div className="text-6xl font-bold text-primary mb-4">300K</div>
                <div className="text-lg font-semibold mb-2">Hours of Video</div>
                <p className="text-muted-foreground">Scripted content, animation, news, sports, documentaries—across 18 suppliers and growing.</p>
              </div>
              <div>
                <div className="text-6xl font-bold text-primary mb-4">3M</div>
                <div className="text-lg font-semibold mb-2">Hours of Audio</div>
                <p className="text-muted-foreground">Radio, podcasts, rare languages, music—preserving linguistic and cultural diversity.</p>
              </div>
              <div>
                <div className="text-6xl font-bold text-primary mb-4">70</div>
                <div className="text-lg font-semibold mb-2">Languages</div>
                <p className="text-muted-foreground">International, niche, non-English content that reduces western bias in AI models.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-3">Not a Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're not building a self-service marketplace. We operate deal-by-deal with custom curation for each client. White-glove service, not algorithms.
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-3">Seasoned Veterans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Two decades building relationships with content owners and AI buyers. We've seen the industry evolve—and we know where it's heading.
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-3">European Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alternative to US-centric providers. Data privacy, governance, and ethical sourcing are built into our process, not bolted on.
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-3">Reduces Bias</h3>
                <p className="text-muted-foreground leading-relaxed">
                  International and niche content from 70 languages helps create more balanced, representative AI models. Diversity isn't a checkbox—it's our core value.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who We<br />
              <span className="text-secondary">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              We work with both sides of the market. AI companies seeking training data. Content owners monetizing their libraries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-primary">For AI Companies</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Multimodal, LLM, ASR, speech, and vision models. Data procurement teams. Research leads. Public-sector and sovereign AI initiatives.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Speech recognition and synthesis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Face mapping and computer vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Motion analysis and action recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Language model training (rare languages)</span>
                  </li>
                </ul>
                <Link href="/for-ai-companies">
                  <Button className="w-full text-lg py-6" size="lg">
                    Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-primary">For Content Owners</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Broadcasters, production studios, audio aggregators, niche and international content libraries seeking new revenue streams.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Global reach to leading AI companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Rights management and legal compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Fair compensation, deal-by-deal flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Minimum 100 hours, professional quality</span>
                  </li>
                </ul>
                <Link href="/for-content-owners">
                  <Button className="w-full text-lg py-6" size="lg">
                    Submit Your Content <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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
                  <h3 className="text-2xl font-bold mb-3">Discuss</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We start with a conversation. What are you building? What data characteristics matter? What languages, genres, quality levels do you need? Or, if you're a content owner: what do you have, and what rights can you clear?
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Curate</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We match content to your specific requirements. Not algorithmic recommendations—human curation by people who understand both the content and the use case.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Clear</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Rights verification, licensing negotiations, legal compliance—we handle it. You get clean, defensible data with proper provenance and documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Deliver</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    S3-WEST delivery. Fast, secure, reliable. Samples available immediately. Full datasets delivered on agreed timelines with complete metadata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio<br />
              <span className="text-secondary">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              A selection of what we have available. This is not a catalogue—it's a starting point for conversation.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-lg">Scripted</h4>
                <p className="text-4xl font-bold text-primary mb-2">47K</p>
                <p className="text-sm text-muted-foreground">hours • 18 suppliers</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-lg">Animation</h4>
                <p className="text-4xl font-bold text-primary mb-2">13K</p>
                <p className="text-sm text-muted-foreground">hours • 10 suppliers</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-lg">News</h4>
                <p className="text-4xl font-bold text-primary mb-2">75K</p>
                <p className="text-sm text-muted-foreground">hours • Face mapping</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-lg">Sports</h4>
                <p className="text-4xl font-bold text-primary mb-2">96K</p>
                <p className="text-sm text-muted-foreground">hours • Motion data</p>
              </Card>
            </div>
            
            <div className="text-center">
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6">
                  View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start<br />
              <span className="text-secondary">the Conversation?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              We operate deal-by-deal with custom curation for each client. No catalogues, no self-service. Just experienced intermediaries who understand both sides of the market.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/for-ai-companies">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-10 py-7">
                  Request Data
                </Button>
              </Link>
              <Link href="/for-content-owners">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 backdrop-blur-sm">
                  Submit Content
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 backdrop-blur-sm">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GMC Attribution */}
      <section className="py-12 border-t bg-white">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/logo-header.png" 
              alt="Global Media Consult" 
              className="h-12 w-auto"
            />
            <div className="text-left">
              <p className="font-semibold text-lg">Content AImbassy</p>
              <p className="text-sm text-muted-foreground">a service by Global Media Consult</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
