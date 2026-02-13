import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

export default function Imprint() {
  return (
    <div className="w-full">
      <SEO 
        title="Impressum - Legal Notice"
        description="Impressum und rechtliche Informationen von Content Aimbassy gemäß §5 TMG."
        keywords="Impressum, Legal Notice, TMG, Kontakt"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Impressum
            </h1>
            <p className="text-xl text-muted-foreground">
              Legal information according to § 5 TMG (German Telemedia Act)
            </p>
          </div>
        </div>
      </section>

      {/* Imprint Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Global Media Consult</h3>
                  <p className="text-muted-foreground">
                    Represented by: Christian Knaebel<br />
                    Grüngartenstrasse 1<br />
                    77836 Rheinmünster<br />
                    Germany
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground italic">
                    Global Media Consult is a service of Global Media Consult
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:cai@globalmediaconsult.com" className="hover:text-primary transition-colors">
                      cai@globalmediaconsult.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <p className="text-muted-foreground">+49 7227 9969865</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Website</p>
                  <p className="text-muted-foreground">www.contentaimbassy.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsible for Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  According to § 55 Abs. 2 RStV (German Interstate Broadcasting Treaty):<br />
                  Christian Knaebel<br />
                  Global Media Consult<br />
                  Grüngartenstrasse 1<br />
                  77836 Rheinmünster, Germany
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Liability for Content</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Liability for Links</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our offer contains links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents. The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Copyright</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contents and compilations published on these websites by the providers are subject to copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only. The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The use of our website is generally possible without providing personal information. Insofar as personal data (such as name, address or email addresses) is collected on our website, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  We would like to point out that data transmission over the Internet (e.g., communication by email) can have security gaps. Complete protection of data against access by third parties is not possible.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  The use of contact data published within the framework of the imprint obligation by third parties for sending unsolicited advertising and information materials is hereby expressly prohibited. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam emails.
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>Letzte Aktualisierung: 13. Februar 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
