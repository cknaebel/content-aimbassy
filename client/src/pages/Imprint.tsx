import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Imprint() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Imprint
            </h1>
            <p className="text-xl text-muted-foreground">
              Legal information and contact details
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
                  <p className="font-semibold text-foreground mb-1">Business Name</p>
                  <p className="text-muted-foreground">Content Aimbassy</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Stuttgart<br />
                    Germany
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
                    <a href="mailto:info@contentaimbassy.com" className="hover:text-primary transition-colors">
                      info@contentaimbassy.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsible for Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Content Aimbassy<br />
                  Stuttgart, Germany
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
              <p>Last updated: November 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
