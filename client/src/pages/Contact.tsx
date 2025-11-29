import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about AI content licensing? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to discuss how we can help you monetize your video content through AI training partnerships.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Email</CardTitle>
                        <a 
                          href="mailto:info@contentaimbassy.com" 
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          info@contentaimbassy.com
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Location</CardTitle>
                        <p className="text-muted-foreground">
                          Stuttgart, Germany
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Global Reach</CardTitle>
                        <p className="text-muted-foreground">
                          Serving content rights holders worldwide
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle>Ready to Submit Your Content?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have video content ready for licensing, start by filling out our content questionnaire. We'll review your submission and get back to you within 1-2 business days.
                  </p>
                  <Link href="/questionnaire">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      Go to Content Questionnaire
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Have Questions First?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Not sure if your content is suitable? Want to understand the process better? Send us an email and we'll be happy to discuss your specific situation.
                  </p>
                  <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary/5" asChild>
                    <a href="mailto:info@contentaimbassy.com">
                      Send Us an Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learn More</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Explore our detailed process overview and understand how AI content licensing works.
                  </p>
                  <Link href="/how-it-works">
                    <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary/5">
                      View How It Works
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the minimum content requirement?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We require a minimum of 100 hours of content, though 500+ hours is ideal for maximum monetization potential. Content must be HD 1080p, MP4 format, with good bitrate quality and no subtitles, watermarks, or overlays.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From initial inquiry to payment typically takes 4-6 months. This includes 1-2 weeks for initial assessment, 3 months for testing with AI companies, and 60-100 days for payment processing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will my content be shown publicly?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No. Your content is never streamed, published, or shown publicly. It remains securely contained within AI training systems. Our contracts explicitly prohibit public distribution, deepfakes, sequels, and unauthorized use of names, faces, stories, or characters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What types of content are you looking for?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We seek diverse content across multiple categories including films, series, documentaries, music performances, concerts, sports, children's programming, instructional videos, and historical archives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How is pricing determined?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pricing is based on per-minute rates that vary depending on content quality, genre, and current market demand. We provide transparent pricing upfront so you understand the value proposition before proceeding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
