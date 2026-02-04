import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ForAICompanies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rights-Cleared Training Data for AI Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We connect AI companies with the world's largest independent portfolio of diverse, international video and audio content. 300,000 hours of video and 3 million hours of audio across 70 languages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button size="lg">Explore Portfolio</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Schedule a Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Scale</h3>
              <p className="text-4xl font-bold text-primary mb-2">300K</p>
              <p className="text-muted-foreground mb-4">hours of video</p>
              <p className="text-4xl font-bold text-primary mb-2">3M</p>
              <p className="text-muted-foreground">hours of audio</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Diversity</h3>
              <p className="text-4xl font-bold text-primary mb-2">70</p>
              <p className="text-muted-foreground mb-4">languages</p>
              <p className="text-lg font-semibold mb-2">Global content</p>
              <p className="text-sm text-muted-foreground">Reduces western bias</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Flexibility</h3>
              <p className="text-lg font-semibold mb-2">Deal-by-deal</p>
              <p className="text-muted-foreground mb-4">Custom curation</p>
              <p className="text-lg font-semibold mb-2">White-glove service</p>
              <p className="text-sm text-muted-foreground">Not a platform</p>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Key Differentiators</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong>Largest independent portfolio</strong> - Not a platform, not corporate. We operate as a specialized intermediary.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong>Reduces western bias</strong> - International and niche content from 70 languages helps create more balanced AI models.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong>European approach</strong> - Alternative to US-centric providers, with focus on data privacy and governance.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong>Industry veterans</strong> - Decades of experience connecting content owners with buyers.
                </div>
              </li>
            </ul>
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
              <p className="text-muted-foreground">Initial conversation about your needs and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Curate</h3>
              <p className="text-muted-foreground">We match content to your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Clear</h3>
              <p className="text-muted-foreground">Rights verification and licensing handled</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deliver</h3>
              <p className="text-muted-foreground">S3-WEST delivery, fast and secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">AI Development Teams</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Multimodal, LLM, ASR, speech, and vision models</li>
                <li>• Data procurement and partnerships teams</li>
                <li>• Research and engineering leads</li>
                <li>• Public-sector and sovereign AI initiatives</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Speech recognition and synthesis</li>
                <li>• Face mapping and computer vision</li>
                <li>• Motion analysis and action recognition</li>
                <li>• Language model training (rare languages)</li>
              </ul>
            </Card>
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
            <Link href="/portfolio">
              <Button size="lg">Explore Portfolio</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
