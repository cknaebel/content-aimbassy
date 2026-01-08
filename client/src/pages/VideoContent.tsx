import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Video, Film, Tv, Users, Globe, Sparkles } from "lucide-react";

export default function VideoContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Video Content Licensing for AI Training
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your video archives into valuable AI training data. We connect content rights holders with leading AI companies seeking high-quality visual and conversational content.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Monetize Your Video Libraries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your video content is valuable for AI development. We help content rights holders license their video libraries to AI companies for training next-generation models that understand visual context, human behavior, and multimodal communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Sparkles,
                title: "AI Vision Training",
                description: "Your videos help AI systems learn to understand visual scenes, objects, actions, and context in real-world environments.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Users,
                title: "Human Behavior Understanding",
                description: "Video content teaches AI to recognize emotions, gestures, social interactions, and non-verbal communication.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: Globe,
                title: "Multimodal Learning",
                description: "Combined audio-visual content enables AI to learn how speech, visuals, and context work together in communication.",
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
              Video Content We License
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with diverse video content types across genres, formats, and languages. From entertainment to educational content, your video library has value for AI training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Tv,
                title: "TV Shows & Series",
                description: "Scripted shows, reality TV, talk shows, news programs, and broadcast television.",
              },
              {
                icon: Film,
                title: "Films & Documentaries",
                description: "Feature films, short films, documentaries, and cinematic content.",
              },
              {
                icon: Video,
                title: "Online Video Content",
                description: "YouTube channels, web series, video blogs, and digital-native content.",
              },
              {
                icon: Users,
                title: "Educational & Training Videos",
                description: "Tutorials, courses, lectures, demonstrations, and instructional content.",
              },
              {
                icon: Globe,
                title: "International Content",
                description: "Content in any language, including regional and international productions.",
              },
              {
                icon: Sparkles,
                title: "User-Generated Content",
                description: "Authentic, real-world video content showing everyday situations and interactions.",
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
              To ensure your video content is suitable for AI training, we have specific technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Video Specifications</CardTitle>
                <CardDescription>Format and quality requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Minimum 100 hours of video content",
                    "HD quality (720p or higher preferred)",
                    "MP4, MOV, or AVI format",
                    "Clear audio and visual quality",
                    "Any language or genre",
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
                    "Subtitles or transcripts (significantly increases value)",
                    "Metadata (scene descriptions, timestamps, tags)",
                    "Diverse visual scenes and settings",
                    "Human interactions and conversations",
                    "Multiple languages or cultural contexts",
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

      {/* What Makes Video Valuable */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Why Video Content is Valuable for AI
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Video content is uniquely valuable for AI training because it combines visual information, audio, context, and temporal dynamics. AI systems trained on video learn to understand:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Visual understanding:</strong> Objects, scenes, actions, and spatial relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Human behavior:</strong> Emotions, gestures, body language, and social interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Multimodal communication:</strong> How speech, visuals, and context work together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Temporal dynamics:</strong> How events unfold over time and cause-effect relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Cultural context:</strong> Social norms, cultural practices, and human diversity</span>
                  </li>
                </ul>
                <p className="mt-6">
                  Your video content doesn't just sit in archives—it becomes training data that helps build the next generation of AI systems capable of understanding the visual world and human interaction.
                </p>
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
              Ready to License Your Video Content?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have TV archives, film libraries, educational content, or online video collections, we'd love to hear from you. Let's explore how your video content can generate new revenue streams through AI licensing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white group">
                  Submit Your Video Content
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
