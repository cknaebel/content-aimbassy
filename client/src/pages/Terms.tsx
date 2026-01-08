import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              General Terms and Conditions for Content Aimbassy Services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">1. Scope of Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These Terms of Service govern the relationship between Global Media Consult ("Content Aimbassy", "we", "us") and content rights holders ("Client", "you") who wish to license their video or audio content for AI training purposes through our services.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By submitting content through our platform or entering into a licensing agreement with us, you agree to be bound by these Terms of Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Content Aimbassy provides intermediary services connecting content rights holders with AI companies seeking training data. Our services include:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-2">
                  <li>Content evaluation and quality assessment</li>
                  <li>Matching content with suitable AI company clients</li>
                  <li>Negotiation of licensing terms and pricing</li>
                  <li>Contract facilitation and management</li>
                  <li>Payment processing and distribution</li>
                  <li>Ongoing representation to new potential clients</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Content Submission and Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">3.1 Rights and Warranties</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    By submitting content, you warrant that:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-1 mt-2">
                    <li>You own or control all rights necessary to license the content</li>
                    <li>The content does not infringe any third-party rights</li>
                    <li>You have the authority to enter into licensing agreements</li>
                    <li>All information provided is accurate and complete</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.2 Technical Requirements</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Content must meet minimum technical specifications as outlined on our website, including format, quality, duration, and other requirements specific to video or audio content.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. Licensing and Representation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">4.1 Non-Exclusive Representation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    By engaging our services, you grant Content Aimbassy non-exclusive rights to represent and license your content to AI companies for training purposes. This does not affect your ability to exploit your content through other channels or for other purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4.2 License Terms</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All licensing agreements facilitated by Content Aimbassy include strict protections ensuring:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-1 mt-2">
                    <li>Content is used solely for AI model training</li>
                    <li>No public distribution or display of content</li>
                    <li>No creation of deepfakes or unauthorized derivative works</li>
                    <li>Compliance with applicable copyright and data protection laws</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Compensation and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">5.1 Commission Structure</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Content Aimbassy retains a commission from licensing fees as compensation for our services. The specific commission percentage will be agreed upon before any licensing agreement is finalized.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.2 Payment Terms</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Payment to content rights holders will be made within 10 business days of our receipt of payment from the AI company client, minus our agreed commission. All payments are subject to applicable taxes and withholding requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.3 Currency and Method</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Payments are typically made in EUR or USD via bank transfer. Alternative payment methods may be arranged by mutual agreement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Both parties agree to maintain confidentiality regarding:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-1">
                  <li>Pricing and financial terms</li>
                  <li>Client identities (unless publicly disclosed)</li>
                  <li>Technical specifications and content details</li>
                  <li>Negotiation processes and business strategies</li>
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  This obligation survives termination of the business relationship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">7. Liability and Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">7.1 Limitation of Liability</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Content Aimbassy acts as an intermediary and is not liable for:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-1 mt-2">
                    <li>Actions or omissions of AI company clients</li>
                    <li>Market conditions affecting content valuation</li>
                    <li>Technical issues with content delivery or storage</li>
                    <li>Third-party claims arising from content rights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">7.2 Indemnification</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You agree to indemnify and hold harmless Content Aimbassy from any claims, damages, or expenses arising from:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-1 mt-2">
                    <li>Breach of your warranties regarding content rights</li>
                    <li>Infringement of third-party intellectual property rights</li>
                    <li>Violation of applicable laws or regulations</li>
                    <li>Inaccurate or misleading information provided</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">8. Term and Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">8.1 Term</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The business relationship begins upon content submission or contract execution and continues until terminated by either party.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">8.2 Termination</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Either party may terminate the relationship with 30 days' written notice. Existing licensing agreements and payment obligations survive termination.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">8.3 Effect of Termination</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Upon termination, Content Aimbassy will cease representing your content to new clients but will continue to administer existing licensing agreements and process related payments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">9. Governing Law and Jurisdiction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These Terms of Service are governed by the laws of the Federal Republic of Germany. The exclusive place of jurisdiction for all disputes arising from or in connection with these terms is Stuttgart, Germany.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For consumers, mandatory consumer protection laws of their country of residence may apply.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">10. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Content Aimbassy reserves the right to modify these Terms of Service at any time. Changes will be communicated to active clients via email and will take effect 30 days after notification. Continued use of our services after the effective date constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For questions regarding these Terms of Service, please contact:<br /><br />
                  <strong>Global Media Consult (Content Aimbassy)</strong><br />
                  Christian Knaebel<br />
                  Grüngartenstrasse 1<br />
                  77836 Rheinmünster<br />
                  Germany<br /><br />
                  Email: info@content-aimbassy.com<br />
                  Phone: +49 7227 9969865
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
