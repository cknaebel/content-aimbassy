import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-muted-foreground">
              Privacy Policy / Data Protection Declaration
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
                <CardTitle className="text-2xl text-primary">1. Data Protection at a Glance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">General Information</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy listed below this text.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Data Collection on This Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Who is responsible for data collection on this website?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Data processing on this website is carried out by the website operator. You can find the operator's contact details in the section "Information about the responsible party" in this privacy policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How do we collect your data?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your data is collected when you provide it to us. This may be data that you enter in a contact form, for example. Other data is collected automatically or with your consent when you visit the website by our IT systems. This is mainly technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What do we use your data for?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other order inquiries.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What rights do you have regarding your data?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    You can contact us at any time if you have further questions on the subject of data protection.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Hosting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster's servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The hoster is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our hoster will only process your data to the extent necessary to fulfill its performance obligations and follow our instructions regarding this data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. General Information and Mandatory Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Data Protection</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    We would like to point out that data transmission over the Internet (e.g., communication by email) can have security gaps. Complete protection of data against access by third parties is not possible.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Information about the Responsible Party</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The responsible party for data processing on this website is:<br /><br />
                    <strong>Global Media Consult</strong><br />
                    Christian Knaebel<br />
                    Grüngartenstrasse 1<br />
                    77836 Rheinmünster<br />
                    Germany<br /><br />
                    Email: info@contentaimbassy.com
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g., names, email addresses, etc.).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Storage Duration</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial retention periods); in the latter case, deletion will take place after these reasons no longer apply.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legal Basis for Data Processing</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We only process personal data if there is a legal basis for doing so. The legal basis is primarily:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-muted-foreground text-sm space-y-1">
                    <li>Art. 6 para. 1 lit. a GDPR (consent)</li>
                    <li>Art. 6 para. 1 lit. b GDPR (contract performance)</li>
                    <li>Art. 6 para. 1 lit. c GDPR (legal obligation)</li>
                    <li>Art. 6 para. 1 lit. f GDPR (legitimate interests)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Data Collection on This Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Contact Form</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory statutory provisions – in particular retention periods – remain unaffected.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Inquiry by Email, Phone, or Fax</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If you contact us by email, phone, or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Right to Information</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to receive confirmation as to whether personal data concerning you is being processed and, if so, to receive information about this personal data and further information according to Art. 15 GDPR.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Correction</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to request the immediate correction of incorrect personal data concerning you and, if necessary, the completion of incomplete personal data (Art. 16 GDPR).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Deletion</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to request that personal data concerning you be deleted immediately if one of the reasons set out in Art. 17 GDPR applies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Restriction of Processing</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to request the restriction of the processing of personal data concerning you if one of the conditions set out in Art. 18 GDPR is met.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Data Portability</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to receive the personal data concerning you that you have provided to us in a structured, commonly used, and machine-readable format (Art. 20 GDPR).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Object</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to object at any time, for reasons arising from your particular situation, to the processing of personal data concerning you which is carried out on the basis of Art. 6 para. 1 lit. e or f GDPR (Art. 21 GDPR).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Revoke Consent</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If the processing of personal data is based on your consent, you have the right to revoke your consent at any time. The revocation of consent does not affect the lawfulness of the processing carried out on the basis of the consent until revocation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Right to Lodge a Complaint</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work, or place of the alleged infringement, if you consider that the processing of personal data concerning you infringes the GDPR (Art. 77 GDPR).
                  </p>
                </div>
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
