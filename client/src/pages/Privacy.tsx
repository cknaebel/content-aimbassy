import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="w-full">
      <SEO 
        title="Datenschutzerklärung - Privacy Policy"
        description="Datenschutzerklärung von Content Aimbassy. Informationen über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO."
        keywords="Datenschutz, Privacy Policy, DSGVO, GDPR, Datenschutzerklärung"
      />
      
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
            <p className="text-sm text-muted-foreground">
              Letzte Aktualisierung: 13. Februar 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            
            {/* 1. Datenschutz auf einen Blick */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">1. Datenschutz auf einen Blick</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Allgemeine Hinweise</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Datenerfassung auf dieser Website</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    <strong>Wie erfassen wir Ihre Daten?</strong><br />
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, sofern Sie dem zugestimmt haben.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 2. Hosting */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Hosting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  <strong>Abschluss eines Vertrages über Auftragsverarbeitung</strong><br />
                  Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.
                </p>
              </CardContent>
            </Card>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Datenschutz</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    Content Aimbassy ist ein Service der <strong>Global Media Consult GmbH</strong><br /><br />
                    <strong>Global Media Consult GmbH</strong><br />
                    Grüngartenstrasse 1<br />
                    77836 Rheinmünster<br />
                    Deutschland<br /><br />
                    Geschäftsführer: Christian Knaebel<br />
                    Registergericht: Amtsgericht Mannheim, HRB 757980<br /><br />
                    Telefon: +49 7227 50 36 992<br />
                    E-Mail: cai@globalmediaconsult.com
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Speicherdauer</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Die für uns zuständige Datenschutz-Aufsichtsbehörde ist:<br />
                    <strong>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</strong><br />
                    Lautenschlagerstraße 20<br />
                    70173 Stuttgart<br />
                    Telefon: 0711/615541-0<br />
                    E-Mail: poststelle@lfdi.bwl.de
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 4. Datenerfassung auf dieser Website */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. Datenerfassung auf dieser Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Cookies</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    <strong>Rechtsgrundlage:</strong> Die Speicherung von Cookies erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner anpassen oder Cookies in Ihren Browsereinstellungen löschen.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Weitere Informationen zu den von uns eingesetzten Cookies finden Sie in unserer Cookie-Richtlinie.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Server-Log-Dateien</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-muted-foreground text-sm space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Kontaktformular</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Anfrage per E-Mail, Telefon oder Telefax</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5. Analyse-Tools und Werbung */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Analyse-Tools und Werbung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Umami Analytics</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Diese Website nutzt Umami Analytics, einen datenschutzfreundlichen Webanalysedienst. Umami Analytics verwendet Cookies nur mit Ihrer Einwilligung und erfasst anonymisierte Nutzungsdaten, um die Nutzung der Website zu analysieren.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Die durch Umami Analytics erzeugten Informationen über Ihre Benutzung dieser Website werden auf Servern in der EU gespeichert. Ihre IP-Adresse wird vor der Speicherung anonymisiert.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    <strong>Rechtsgrundlage:</strong> Die Nutzung von Umami Analytics erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit über unsere Cookie-Einstellungen widerrufen.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 6. Ihre Rechte */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Ihre Rechte als betroffene Person</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-2">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.</li>
                  <li><strong>Recht auf Widerruf der Einwilligung:</strong> Sofern die Verarbeitung Ihrer personenbezogenen Daten auf einer erteilten Einwilligung beruht, haben Sie das Recht, die Einwilligung jederzeit zu widerrufen.</li>
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden unter: cai@globalmediaconsult.com
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
