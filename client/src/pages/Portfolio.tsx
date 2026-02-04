import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  const categories = [
    {
      title: "Scripted Content",
      hours: "47,000+ hours",
      suppliers: "18 suppliers",
      description: "Foreign language films, series, and fiction across multiple genres",
      features: ["Multiple languages", "Diverse genres", "High production quality"]
    },
    {
      title: "Animation",
      hours: "13,000+ hours",
      suppliers: "10 suppliers",
      description: "Animated content including children's programming and adult animation",
      features: ["Children's content", "Adult animation", "Various styles"]
    },
    {
      title: "News & Face Mapping",
      hours: "75,000+ hours",
      suppliers: "Multiple sources",
      description: "News broadcasts and documentary content ideal for face mapping and speech recognition",
      features: ["Foreign languages", "Diverse speakers", "Real-world scenarios"]
    },
    {
      title: "Sports & Motion",
      hours: "96,000+ hours",
      suppliers: "Global coverage",
      description: "Sports footage and motion-rich content for computer vision training",
      features: ["Multiple sports", "Action sequences", "Crowd scenes"]
    },
    {
      title: "Audio Content",
      hours: "3,000,000+ hours",
      suppliers: "70 languages",
      description: "Radio shows, podcasts, audiobooks, and conversational content",
      features: ["Rare languages", "Regional dialects", "Conversational data"]
    },
    {
      title: "Music & Performances",
      hours: "Extensive catalog",
      suppliers: "Global artists",
      description: "Concerts, performances, and music videos",
      features: ["Live performances", "Studio recordings", "Various genres"]
    }
  ];

  const strategicAssets = [
    {
      title: "E-Sports with Metadata",
      description: "Comprehensive e-sports coverage with detailed metadata for advanced training scenarios",
      nda: true
    },
    {
      title: "Volumetric Capture",
      description: "Cutting-edge volumetric video capture for next-generation AI applications",
      nda: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Content Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The world's largest independent portfolio of diverse, rights-cleared video and audio content for AI training. 300,000 hours of video and 3 million hours of audio across 70 languages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/for-ai-companies">
                <Button size="lg">Request Data</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Discuss Your Needs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Content Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="p-6">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <span>{category.hours}</span>
                  <span>•</span>
                  <span>{category.suppliers}</span>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Assets */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Strategic Assets</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Specialized content requiring non-disclosure agreements. Contact us to learn more about these unique offerings.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {strategicAssets.map((asset) => (
              <Card key={asset.title} className="p-6 border-2 border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{asset.title}</h3>
                  {asset.nda && (
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      NDA Required
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">{asset.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Video Content</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 1080p+ horizontal resolution</li>
                <li>• Clean feed (no subtitles/graphics)</li>
                <li>• MP4 format, high bitrate</li>
                <li>• Basic metadata included</li>
                <li>• S3-WEST delivery</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Audio Content</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• MP3/WAV format</li>
                <li>• 70 languages including rare dialects</li>
                <li>• Conversational and narrative content</li>
                <li>• Transcripts available (where applicable)</li>
                <li>• Fast, cost-effective delivery</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Access Our Portfolio?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We operate deal-by-deal with custom curation for each client. Samples available immediately.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/for-ai-companies">
              <Button size="lg">Request Data</Button>
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
