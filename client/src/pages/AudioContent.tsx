import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Globe, Mic, Radio, BookAudio, Phone, Languages } from "lucide-react";

export default function AudioContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Large-Scale Audio Content Aggregation
            </h1>
            <p className="text-xl text-muted-foreground">
              Helping AI companies develop foundational language models while preserving linguistic diversity and creating new revenue streams for audio content creators.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Powering AI Language Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We aggregate audio content at scale to help AI companies develop foundational models—systems that learn languages from scratch. Your audio content becomes training data that teaches AI to understand human speech, accents, dialects, and conversational patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Languages,
                title: "Foundational Model Training",
                description: "Your audio helps AI systems learn languages from the ground up, understanding grammar, syntax, pronunciation, and cultural context.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Globe,
                title: "Linguistic Preservation",
                description: "Rare languages, local dialects, and ethnic languages are digitally preserved, ensuring they remain accessible for future generations.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: CheckCircle2,
                title: "Diverse & Inclusive AI",
                description: "Your content makes AI more representative of humanity's linguistic variety, reducing bias and improving global accessibility.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
            ].map((item, index) => (
              <Card key={index} className="card-modern">
                <CardContent className="p-8 text-center">
                  <div className={`${item.bgColor} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Audio Content We Aggregate
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with a wide range of conversational and narrative audio content in any language, with special interest in rare and underrepresented languages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Radio,
                title: "Radio Shows & Broadcasts",
                description: "Talk shows, news broadcasts, radio magazines, and live programming.",
              },
              {
                icon: Mic,
                title: "Podcasts & Interviews",
                description: "Conversational podcasts, audio interviews, and discussion formats.",
              },
              {
                icon: BookAudio,
                title: "Audiobooks & Audio Plays",
                description: "Narrated books, audio dramas, storytelling, and theatrical recordings.",
              },
              {
                icon: Phone,
                title: "Call Center Recordings",
                description: "Customer service calls, support conversations, and call center archives.",
              },
              {
                icon: Languages,
                title: "Rare Languages & Dialects",
                description: "Local dialects, ethnic languages, indigenous languages, and regional variations.",
              },
              {
                icon: Globe,
                title: "Conversational Content",
                description: "Any audio featuring natural human speech, dialogue, and conversation.",
              },
            ].map((item, index) => (
              <Card key={index} className="card-modern">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Technical Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To ensure your audio content is suitable for AI training, we have specific technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Audio Specifications</CardTitle>
                <CardDescription>Format and quality requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Minimum 1,000 hours of audio content",
                    "MP3 or WAV format preferred",
                    "Clear audio quality (no excessive noise or distortion)",
                    "Conversational or narrative content (not music-only)",
                    "Any language, including rare and regional dialects",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ideal Additions</CardTitle>
                <CardDescription>These enhance value but aren't required</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Transcripts or subtitles (greatly increases value)",
                    "Metadata (speaker info, topics, timestamps)",
                    "Multiple speakers and natural dialogue",
                    "Diverse accents and speaking styles",
                    "Content in rare or underrepresented languages",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Preserving Linguistic Diversity Through AI
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Many of the world's 7,000+ languages are at risk of disappearing. By aggregating audio content in rare languages, local dialects, and ethnic languages, we help preserve these linguistic treasures by bringing them into the digital world.
                </p>
                <p>
                  When AI systems are trained on diverse linguistic data, they become more inclusive and representative of humanity's rich cultural variety. Your audio content doesn't just create revenue—it helps ensure that future AI technologies understand and respect linguistic diversity.
                </p>
                <p>
                  This work is particularly important for:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Indigenous communities</strong> seeking to preserve their languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Regional broadcasters</strong> with content in local dialects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Cultural archives</strong> holding rare linguistic recordings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Language preservation organizations</strong> documenting endangered languages</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Have Audio Content to Share?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have radio archives, podcast libraries, audiobook collections, or rare language recordings, we'd love to hear from you. Let's explore how your audio content can contribute to AI development while generating new revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                  Submit Your Audio Content
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5">
                  Contact Us First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
