import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Video, Mic, Gamepad2, Box } from "lucide-react";

export default function Portfolio() {
  const videoCategories = [
    {
      title: "Scripted Content",
      hours: "47,000",
      suppliers: "18",
      description: "Almost all in foreign languages. From low-budget Nollywood to super high-end Chinese Drama from CCTV.",
      icon: Video,
    },
    {
      title: "Animation",
      hours: "13,000",
      suppliers: "10",
      description: "Very basic 2D animations to higher budget movies.",
      icon: Video,
    },
    {
      title: "News & Interviews for Face Mapping",
      hours: "75,000",
      suppliers: "Multiple",
      description: "Mostly in foreign languages. Ideal for facial recognition and expression analysis training.",
      icon: Video,
    },
    {
      title: "Sports & High Body Motion",
      hours: "96,000",
      suppliers: "2 specialists",
      description: "Including some in 720p. Requires clearance before sending samples.",
      icon: Video,
    },
    {
      title: "Instructional & Documentaries",
      hours: "45,000",
      suppliers: "30",
      description: "Some quite specific content across various topics.",
      icon: Video,
    },
    {
      title: "Wildlife",
      hours: "8,000",
      suppliers: "Multiple",
      description: "Nature documentaries and raw footage.",
      icon: Video,
    },
    {
      title: "Music Concerts & Footage",
      hours: "3,000",
      suppliers: "Multiple",
      description: "Live performances and music-related content.",
      icon: Video,
    },
  ];

  const audioCategory = {
    title: "Audio Content",
    hours: "3,000,000",
    languages: "70",
    suppliers: "45",
    description: "Mostly talk radio. Some podcasts. Comprehensive coverage across multiple languages and regions.",
    icon: Mic,
  };

  const strategicAssets = [
    {
      title: "E-Sports",
      description: "Virtually unlimited amount of world-class competitors playing high-profile games. Includes metadata (keystrokes, etc.).",
      icon: Gamepad2,
      nda: true,
    },
    {
      title: "Volumetric Capture",
      description: "Advanced 3D capture technology for next-generation AI training.",
      icon: Box,
      nda: true,
    },
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
              <Link href="/request-data">
                <Button size="lg">Request Data</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Discuss a Dataset</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Content</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our video portfolio spans multiple genres and formats, providing diverse training data for computer vision, multimodal models, and specialized AI applications. All content is clean feed (subtitle and graphics free), in horizontal 1080p or higher, with basic metadata.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 border border-border rounded-md bg-card hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{category.hours} hours</span>
                      <span>•</span>
                      <span>{category.suppliers} suppliers</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Portfolio */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Audio Content</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our audio portfolio provides comprehensive coverage for ASR, speech recognition, and language model training across diverse languages and dialects.
            </p>
          </div>

          <div className="max-w-2xl">
            <div className="p-8 border border-border rounded-md bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10">
                  <audioCategory.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-2xl mb-2">{audioCategory.title}</h3>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="font-medium">{audioCategory.hours} hours</span>
                    <span>•</span>
                    <span>{audioCategory.languages} languages</span>
                    <span>•</span>
                    <span>{audioCategory.suppliers} suppliers</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{audioCategory.description}</p>
              <div className="flex gap-3">
                <Link href="/request-data">
                  <Button>Request Audio Data</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Assets */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Strategic Assets</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We maintain exclusive access to specialized datasets that provide unique training opportunities for advanced AI applications. These assets require an NDA and initial consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {strategicAssets.map((asset) => (
              <div
                key={asset.title}
                className="p-6 border-2 border-primary/20 rounded-md bg-card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <asset.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{asset.title}</h3>
                      {asset.nda && (
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium">
                          NDA Required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{asset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Technical Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Delivery</h3>
                <p className="text-muted-foreground">
                  All content is available on S3-WEST server for fast and cost-effective delivery.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Samples</h3>
                <p className="text-muted-foreground">
                  Samples are readily available for all libraries to evaluate content quality.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Format</h3>
                <p className="text-muted-foreground">
                  Clean feed (subtitle and graphics free), horizontal 1080p or higher.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Metadata</h3>
                <p className="text-muted-foreground">
                  Basic metadata included. Custom metadata available on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Data Needs?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work on a deal-by-deal basis, tailoring content selection and licensing arrangements to your specific requirements.
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
