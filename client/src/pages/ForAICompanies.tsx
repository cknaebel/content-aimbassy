import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, Shield, Users, Zap } from "lucide-react";

export default function ForAICompanies() {
  const differentiators = [
    {
      icon: Globe,
      title: "International & Diverse",
      description: "70 languages, global content from multiple regions. Reduce western bias in your AI models with truly diverse training data.",
    },
    {
      icon: Shield,
      title: "Rights-Cleared & Compliant",
      description: "All content is fully licensed with documented provenance. GDPR compliant, European data governance standards.",
    },
    {
      icon: Users,
      title: "White-Glove Service",
      description: "Deal-by-deal flexibility with custom curation. We match content to your specific requirements, not one-size-fits-all.",
    },
    {
      icon: Zap,
      title: "Operational Readiness",
      description: "S3-WEST server for fast delivery. Samples available immediately. Clean feed, 1080p+, with basic metadata.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discuss",
      description: "Initial conversation about your specific use case, requirements, and timeline.",
    },
    {
      number: "02",
      title: "Curate",
      description: "We match content from our portfolio to your needs. Custom selection based on your criteria.",
    },
    {
      number: "03",
      title: "Clear",
      description: "Rights verification and licensing arrangements. Transparent terms, documented provenance.",
    },
    {
      number: "04",
      title: "Deliver",
      description: "Fast, secure delivery via S3-WEST. Ongoing support and additional content as needed.",
    },
  ];

  const targetAudiences = [
    "Multimodal AI model developers",
    "Large language model (LLM) teams",
    "Automatic speech recognition (ASR) systems",
    "Computer vision and video understanding",
    "Data procurement and partnerships teams",
    "Research and engineering leads",
    "Public-sector and sovereign AI initiatives",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rights-Cleared Training Data for AI Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We operate the world's largest independent portfolio of diverse, international video and audio content. 300,000 hours of video and 3 million hours of audio across 70 languages—curated specifically for AI training and model development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request-data">
                <Button size="lg">Request Data</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">View Portfolio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scale & Diversity */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300,000</div>
              <div className="text-sm text-muted-foreground">Hours of Video Content</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3,000,000</div>
              <div className="text-sm text-muted-foreground">Hours of Audio Content</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">70</div>
              <div className="text-sm text-muted-foreground">Languages Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">
              We are not a platform. We are not a startup. We are seasoned industry veterans with decades of experience in media licensing, offering a serious, independent alternative to existing brokers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 border border-border rounded-md bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work with AI companies, research teams, and public-sector initiatives that require high-quality, diverse training data for their models.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {targetAudiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-3 p-4 border border-border rounded-md bg-card"
                >
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              We operate on a deal-by-deal basis, tailoring content selection and licensing arrangements to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="mb-4">
                  <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Independent Matters */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Why Independent Matters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Reduce Western Bias</h3>
                <p className="text-muted-foreground">
                  Our portfolio includes content from many parts of the world, helping reduce the western bias prevalent in current AI models. We provide truly diverse datasets that enrich algorithms with international perspectives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">European Approach</h3>
                <p className="text-muted-foreground">
                  Based in Germany, we offer a European alternative for organizations sensitive to data privacy and AI development governance. We understand the regulatory landscape and operate accordingly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Close Cooperation</h3>
                <p className="text-muted-foreground">
                  We maintain close relationships with content owners, allowing us to negotiate flexible licensing terms and provide custom selections that platforms cannot match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start a Conversation?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are available for an initial consultation to discuss your specific data needs and explore how our portfolio can support your AI development.
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
    </div>
  );
}
