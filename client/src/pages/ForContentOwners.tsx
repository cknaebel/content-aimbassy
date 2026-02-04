import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { DollarSign, Shield, Handshake, Globe } from "lucide-react";

export default function ForContentOwners() {
  const benefits = [
    {
      icon: DollarSign,
      title: "New Revenue Streams",
      description: "Monetize your existing content library through AI training licenses. Your archive becomes a strategic asset.",
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "We handle all rights clearance and licensing arrangements. Transparent terms, documented agreements, full compliance.",
    },
    {
      icon: Handshake,
      title: "Deal-by-Deal Flexibility",
      description: "We work on each license individually with you. No one-size-fits-all approach. Tailored arrangements that respect your content.",
    },
    {
      icon: Globe,
      title: "International Network",
      description: "Access to global AI companies seeking diverse, high-quality content. We connect you with serious buyers.",
    },
  ];

  const contentTypes = [
    {
      title: "Video Content",
      examples: [
        "Scripted content (drama, series, films)",
        "Animation (2D, 3D, various budgets)",
        "News and interview footage",
        "Sports and high-motion content",
        "Documentaries and instructional",
        "Wildlife and nature",
        "Music concerts and performances",
      ],
    },
    {
      title: "Audio Content",
      examples: [
        "Talk radio archives",
        "Podcasts and interviews",
        "Multiple languages and dialects",
        "Regional and local content",
        "Specialized audio formats",
      ],
    },
  ];

  const requirements = [
    "Minimum 100 hours of content",
    "Rights ownership or licensing authority",
    "Clean feed preferred (subtitle and graphics free)",
    "1080p or higher for video",
    "Basic metadata available",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Monetize Your Content Through AI Training
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We operate the world's largest independent aggregator of video and audio content for AI training. Join our network of content owners and unlock new revenue from your existing library.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/questionnaire">
                <Button size="lg">Submit Your Content</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Discuss Your Library</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why License to AI Companies */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Why License to AI Companies</h2>
            <p className="text-lg text-muted-foreground">
              AI companies require massive amounts of diverse, high-quality content to train their models. Your content library—whether video or audio—represents valuable training data that AI developers are actively seeking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 border border-border rounded-md bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">What We Look For</h2>
            <p className="text-lg text-muted-foreground">
              We are particularly interested in diverse, international, and niche content that helps reduce western bias in AI models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {contentTypes.map((type) => (
              <div key={type.title}>
                <h3 className="font-semibold text-xl mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Basic Requirements</h2>
            <div className="space-y-3">
              {requirements.map((requirement) => (
                <div
                  key={requirement}
                  className="flex items-center gap-3 p-4 border border-border rounded-md bg-card"
                >
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work With You */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">How We Work With You</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Portfolio Assessment</h3>
                <p className="text-muted-foreground">
                  We review your content library to understand what you have available and identify the most valuable assets for AI training.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Rights Verification</h3>
                <p className="text-muted-foreground">
                  We work with you to verify rights ownership and ensure all content can be legally licensed for AI training purposes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Deal Structuring</h3>
                <p className="text-muted-foreground">
                  Each deal is negotiated individually. We structure licensing arrangements that work for both you and the AI company, respecting your content and business needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ongoing Partnership</h3>
                <p className="text-muted-foreground">
                  We maintain close cooperation with our content partners. As new opportunities arise, we continue to work with you to maximize the value of your library.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Network</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Over the past 2-3 years, we have built the world's largest independent aggregator of video and audio content for AI training. Our portfolio now includes:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 border border-border rounded-md bg-card">
                <div className="text-3xl font-bold text-primary mb-2">300,000</div>
                <div className="text-sm text-muted-foreground">Hours of Video</div>
              </div>
              <div className="text-center p-6 border border-border rounded-md bg-card">
                <div className="text-3xl font-bold text-primary mb-2">3,000,000</div>
                <div className="text-sm text-muted-foreground">Hours of Audio</div>
              </div>
              <div className="text-center p-6 border border-border rounded-md bg-card">
                <div className="text-3xl font-bold text-primary mb-2">70</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              We work with content owners from around the world, from small specialized archives to major broadcasters. Our European approach and decades of industry experience make us a trusted partner for content monetization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Opportunities?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Submit your content library details or contact us for an initial consultation. We will assess your portfolio and discuss potential licensing opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/questionnaire">
                <Button size="lg">Submit Your Content</Button>
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
