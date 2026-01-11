import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              About Global Media Consult
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in navigating the emerging landscape of AI content licensing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Global Media Consult serves as a trusted intermediary between video content rights holders and leading AI companies. With over two decades of experience in media licensing, we help content owners unlock new revenue streams by licensing their archival and underutilized video libraries for AI training purposes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in the responsible development of AI technologies while ensuring that content creators are fairly compensated and their creative legacy is protected. Our comprehensive approach combines deep industry expertise with robust legal safeguards to create win-win partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading bridge between content creators and AI innovation, enabling ethical AI development while maximizing value for rights holders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transparency, integrity, and respect for creative work guide every partnership we forge and every agreement we negotiate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why Trust Us?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Proven Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    With over 20 years of experience in media licensing and content distribution, we understand the complexities of rights management and the nuances of content valuation.
                  </p>
                  <p className="text-muted-foreground">
                    Our team has successfully negotiated countless licensing agreements across traditional media, and we've adapted this expertise to the emerging AI training market.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Global Network</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    As part of a consortium with leading content aggregators, we have direct relationships with major AI companies actively seeking training content.
                  </p>
                  <p className="text-muted-foreground">
                    This network ensures your content reaches the right buyers and receives competitive market pricing based on current demand.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground">
                We go beyond simple content brokerage to provide comprehensive support throughout the entire licensing journey.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Legal Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We've developed robust contractual frameworks that explicitly prohibit public distribution, deepfakes, sequels, and unauthorized use of names, faces, stories, or characters from your content. Your creative legacy remains protected.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide clear per-minute pricing based on content quality, genre, and current market rates. You'll understand the value proposition from the outset, with no hidden fees or surprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Representation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beyond the initial deal, we continue to represent your content to new AI clients as additional opportunities arise, creating the potential for multiple revenue streams from the same content library.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>White-Glove Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From initial consultation through content delivery and payment, we manage every step of the process. Our team provides guidance on optimal delivery methods, handles quality assessments, and ensures prompt payment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                The AI Content Licensing Opportunity
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The market for AI training content is experiencing unprecedented growth as technology companies race to develop more sophisticated visual understanding capabilities. Unlike traditional licensing arrangements, this model never involves public streaming or distribution of your content. Instead, your material serves as educational data that helps AI systems learn visual patterns and structures—similar to how textbooks function in human education.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The timing of this opportunity is particularly significant. As the technology matures and more content becomes available, the premium pricing currently offered is expected to decrease substantially. Rights holders who act promptly stand to benefit from this early-market advantage before the inevitable price adjustments occur.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-foreground font-medium italic">
                  "This isn't about replacing creative work—it's about enabling machines to understand visual structure whilst respecting and protecting the original content and its creators."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
