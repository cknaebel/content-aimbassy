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
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLImageElement>(null);

  // Animated counter hook
  const useCounter = (end: number, duration: number, shouldStart: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;
      
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
  };

  const yearsCount = useCounter(20, 2000, statsInView);
  const hoursCount = useCounter(100, 2000, statsInView);

  // Intersection observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      {/* Hero Section - Pure White Background with Strategic Color Usage */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle gradient accent in background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
        
        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 text-primary">
              AI Content Licensing Experts
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
              Monetize Your Video Content Through{" "}
              <span className="text-secondary animate-text-shimmer">AI Training</span>
            </h1>
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              Transform your archival and underutilized video libraries into valuable revenue streams. 
              We connect content rights holders with leading AI companies seeking high-quality training material.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/questionnaire">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
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

          {/* Right: Logo Card with 3D effect and Purple Frame */}
          <div className="flex justify-center animate-fade-in-up animation-delay-300">
            <div className="p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-white border-4 border-primary/20">
              <img
                ref={heroLogoRef}
                src="/logo-header.png"
                alt="Content Aimbassy"
                className="w-full h-auto transition-transform duration-300 ease-out"
                style={{ transformStyle: "preserve-3d" }}
              />
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

      {/* Animated Statistics Section */}
      <section ref={statsRef} className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {yearsCount}+
              </div>
              <div className="text-muted-foreground font-medium">Years of Experience</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {hoursCount}+
              </div>
              <div className="text-muted-foreground font-medium">Hours Minimum Content</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                $$$
              </div>
              <div className="text-muted-foreground font-medium">Per Minute Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Content Aimbassy - Interactive Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Choose Content Aimbassy?</h2>
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
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden relative"
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
              AI companies are seeking diverse, high-quality video and audio content across almost all genre categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Technical Requirements */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
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
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <Card className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-500 hover:scale-105">
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
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
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
