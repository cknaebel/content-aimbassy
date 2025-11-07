import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  FileText, 
  Search, 
  DollarSign, 
  FileSignature, 
  Upload, 
  Clock, 
  CheckCircle, 
  RefreshCw,
  ArrowRight,
  Shield
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground">
              A transparent, structured process designed to protect your interests at every stage while maximizing the value of your content.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Licensing Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From initial inquiry to payment, we guide you through every step.
              </p>
            </div>

            {/* Step 1 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">01</span>
                      <CardTitle className="text-2xl">Initial Inquiry</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Share information about your available content
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The process begins with you sharing information about your content library—genres, volume, and format. We'll request three sample videos per genre for quality assessment. These samples should be free of subtitles, watermarks, or overlays to allow for proper evaluation.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-2">What to prepare:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Content genre categories</li>
                        <li>• Total hours available per genre</li>
                        <li>• 3 sample videos per genre (HD 1080p, MP4)</li>
                        <li>• Rights confirmation documentation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">02</span>
                      <CardTitle className="text-2xl">Quality Assessment</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      We evaluate your content against technical requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Our team reviews your samples to ensure they meet the technical specifications required by AI companies. We assess video quality, format compatibility, and content suitability for AI training purposes.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-2">Evaluation criteria:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• HD 1080p resolution verification</li>
                        <li>• Bitrate and encoding quality</li>
                        <li>• Absence of overlays or watermarks</li>
                        <li>• Content diversity and market demand</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">03</span>
                      <CardTitle className="text-2xl">Offer Submission</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Receive transparent per-minute pricing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      If your content meets technical requirements, we submit a per-minute offer based on factors including genre, quality, and current market rates. This transparent pricing approach ensures you understand the value proposition from the outset.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-2">Pricing factors:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Content genre and category</li>
                        <li>• Video quality and technical specifications</li>
                        <li>• Current market demand</li>
                        <li>• Total volume available</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileSignature className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">04</span>
                      <CardTitle className="text-2xl">Agreement Signing</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Comprehensive legal protections in place
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Once you accept the offer, we finalize licensing agreements with robust contractual protections. These safeguards ensure your content is used solely for AI training purposes, with strict limitations that prevent misuse.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <div className="flex gap-3">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-foreground">Legal protections include:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• No public distribution or streaming</li>
                            <li>• Prohibition of deepfakes and sequels</li>
                            <li>• No use of names, faces, stories, or characters</li>
                            <li>• Secure containment within training systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">05</span>
                      <CardTitle className="text-2xl">Content Delivery</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Secure file transfer with expert guidance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We manage the file transfer process and provide guidance on optimal content delivery methods. Your content is securely transferred to the AI company's systems for the testing period.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">06</span>
                      <CardTitle className="text-2xl">Testing Period</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      3-month compatibility verification
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The content undergoes a three-month testing period with AI companies to ensure compatibility with their training systems. This verification process confirms that your content meets their technical and quality requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">07</span>
                      <CardTitle className="text-2xl">Acceptance & Payment</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Prompt compensation for your content
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Upon acceptance, the AI client licenses the agreed volume with payment typically processed within 60-90 days. You receive your payment within 10 days after client payment is received, ensuring prompt compensation.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-2">Payment timeline:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• AI client payment: 60-90 days after acceptance</li>
                        <li>• Your payment: Within 10 days of client payment</li>
                        <li>• Transparent reporting throughout</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 8 */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="md:col-span-10">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">08</span>
                      <CardTitle className="text-2xl">Ongoing Representation</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Continued opportunities for additional revenue
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Beyond the initial deal, we continue to represent your content to new AI clients as additional opportunities arise. This creates the potential for multiple revenue streams from the same content library without requiring additional effort from your team.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Typical Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                From inquiry to payment, here's what to expect.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Initial Phase</CardTitle>
                  <CardDescription>1-2 weeks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Inquiry, sample submission, quality assessment, and offer presentation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testing Phase</CardTitle>
                  <CardDescription>3 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Agreement signing, content delivery, and compatibility testing with AI systems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Phase</CardTitle>
                  <CardDescription>60-100 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Client payment processing (60-90 days) plus your payment (within 10 days).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Submit your content information today and discover the licensing potential of your video library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questionnaire">
                <Button size="lg" className="group">
                  Submit Content Questionnaire
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
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
