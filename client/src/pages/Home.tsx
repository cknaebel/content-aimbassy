import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Shield,
  Users,
  TrendingUp,
  Repeat,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
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
      {/* Hero Section - Dynamic Background with Gradient Overlay */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-primary/10"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 text-primary">
              AI Content Licensing Experts
            </div>
            
            <div className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
              A Global Gateway for AI Training Content
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
              Monetize Your Video Content Through{" "}
              <span className="text-secondary animate-text-shimmer">AI Training</span>
            </h1>
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              Transform your audio or video libraries into valuable revenue streams. 
              We connect content rights holders with leading AI companies seeking high-quality training material.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/questionnaire">
                <Button 
                  size="lg" 
                  className="btn-modern bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 rounded-full glow-primary hover:scale-105 group"
                >
                  Submit Your Content
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/how-it-works">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Prominent Company Logo with Modern Effects */}
          <div className="flex justify-center animate-fade-in-up animation-delay-300">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-full"></div>
              
              {/* Logo container */}
              <div className="relative p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur-sm border-2 border-primary/30 overflow-hidden">
                <img
                  ref={heroLogoRef}
                  src="/hero-graphic.jpg"
                  alt="AI Content Creation"
                  className="w-full h-auto max-w-lg transition-transform duration-300 ease-out rounded-xl"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Global Media Consult Attribution */}
      <section className="py-8 bg-muted/30 border-t border-b border-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">A service by</p>
            <a 
              href="https://globalmediaconsult.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/gmc-logo.png" 
                alt="Global Media Consult" 
                className="h-12 md:h-16 w-auto"
              />
            </a>
          </div>
        </div>
      </section>



      {/* Why Choose Global Media Consult - Interactive Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Choose Global Media Consult?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide a comprehensive, secure, and profitable pathway to monetize your video content through AI training partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "New Revenue Stream",
                description: "Monetize archival or underutilized content without compromising existing distribution channels.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: Shield,
                title: "Robust Legal Protection",
                description: "Comprehensive contracts ensure no public distribution, deepfakes, or unauthorized use of your creative work.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Over two decades of media licensing experience guiding you through every step of the process.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: TrendingUp,
                title: "Early Market Advantage",
                description: "Act now to benefit from premium rates before market saturation drives prices down.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Repeat,
                title: "Ongoing Representation",
                description: "We continue representing your content to new AI clients, creating multiple revenue opportunities.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: FileText,
                title: "Transparent Process",
                description: "Clear pricing, straightforward agreements, and prompt payment within 10 days of client payment.",
                color: "text-muted-foreground",
                bgColor: "bg-muted",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="card-modern group cursor-pointer border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className={`${item.bgColor} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">What We're Looking For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI companies are seeking diverse, high-quality video and audio content across almost all genre categories. We specialize in both video content licensing and large-scale audio content aggregation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Technical Requirements */}
            <Card className="card-modern">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Technical Requirements for Video</h3>
                <ul className="space-y-3">
                  {[
                    "Minimum 100 hours (500+ hours ideal)",
                    "HD 1080p quality, MP4 format",
                    "Good bitrate quality",
                    "No subtitles, watermarks, or overlays",
                    "Different language tracks and Dubbed versions welcomed",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Content Categories */}
            <Card className="card-modern">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Content Categories</h3>
                <ul className="space-y-3">
                  {[
                    "Film, Series, Fiction",
                    "TV Shows & Magazines",
                    "News & Documentaries",
                    "Sports",
                    "Children Programming & Animation",
                    "Music, Concerts & Performances",
                    "Instructional & Educational Videos",
                    "User Generated Content & Videocasts",
                    "Podcast, Radio, Audio Shows",
                    "Footage Material",
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

      {/* Audio Content Aggregation Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Large-Scale Audio Content Aggregation</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Beyond video, we specialize in aggregating audio content at scale for AI foundational model development—helping preserve linguistic diversity while creating new revenue streams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="card-modern">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">What We Aggregate</h3>
                  <ul className="space-y-3">
                    {[
                      "Radio shows and broadcasts",
                      "Podcasts and audio interviews",
                      "Audiobooks and audio plays",
                      "Call center recordings",
                      "Conversational content in any language",
                      "Rare languages, local dialects, ethnic languages",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-modern">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Technical Requirements for Audio</h3>
                  <ul className="space-y-3">
                    {[
                      "Minimum 1,000 hours of audio content",
                      "MP3 or WAV format",
                      "Any language, including rare and regional dialects",
                      "Transcript included (ideal but not required)",
                      "Conversational or narrative content preferred",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Preserving Linguistic Diversity Through AI</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                  We actively seek rare languages, local dialects, and ethnic languages from around the world. This helps preserve these languages by bringing them into the digital world, while making AI more diverse, inclusive, and reflective of humanity's rich linguistic variety. Your audio content helps AI companies develop foundational models that learn languages from scratch.
                </p>
                <Link href="/audio-content">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white font-semibold"
                  >
                    Learn More About Audio Aggregation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <Card className="card-modern max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Ready to Unlock Your Content's Value?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join content creators worldwide who are monetizing their libraries through AI training partnerships. 
                The window of opportunity is narrowing as the market matures.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link href="/questionnaire">
                  <Button 
                    size="lg" 
                    className="btn-modern bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 rounded-full glow-primary hover:scale-110 group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
