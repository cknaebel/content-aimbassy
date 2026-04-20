import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

export default function CookiePolicy() {
  return (
    <div className="w-full">
      <SEO 
        title="Cookie-Richtlinie - Cookie Policy"
        description="Informationen über die Verwendung von Cookies auf der Content Aimbassy Website. Erfahren Sie, welche Cookies wir verwenden und wie Sie diese verwalten können."
        keywords="Cookies, Cookie-Richtlinie, Cookie Policy, Datenschutz"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Cookie-Richtlinie
            </h1>
            <p className="text-lg text-muted-foreground">
              Cookie Policy
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
            
            {/* Was sind Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Was sind Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden weitverbreitet eingesetzt, um Websites funktionsfähig zu machen oder ihre Effizienz zu verbessern, und um Informationen an die Eigentümer der Website zu übermitteln.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cookies können „Session-Cookies" oder „persistente Cookies" sein. Session-Cookies werden gelöscht, wenn Sie Ihren Browser schließen, während persistente Cookies auf Ihrem Gerät verbleiben, bis sie ablaufen oder Sie sie löschen.
                </p>
              </CardContent>
            </Card>

            {/* Wie wir Cookies verwenden */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Wie wir Cookies verwenden</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wir verwenden Cookies aus verschiedenen Gründen, die im Folgenden erläutert werden. Leider gibt es in den meisten Fällen keine branchenüblichen Optionen zum Deaktivieren von Cookies, ohne die Funktionalität und Funktionen, die sie dieser Website hinzufügen, vollständig zu deaktivieren. Es wird empfohlen, dass Sie alle Cookies aktiviert lassen, wenn Sie sich nicht sicher sind, ob Sie sie benötigen oder nicht, falls sie zur Bereitstellung eines von Ihnen genutzten Dienstes verwendet werden.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Wichtig:</strong> Wir setzen Analyse-Cookies nur mit Ihrer ausdrücklichen Einwilligung ein. Notwendige Cookies werden zur Bereitstellung der grundlegenden Funktionen der Website verwendet und können nicht deaktiviert werden.
                </p>
              </CardContent>
            </Card>

            {/* Cookie-Kategorien */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Cookie-Kategorien</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Notwendige Cookies */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2 text-lg">1. Notwendige Cookies (Immer aktiv)</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, die einer Anforderung von Diensten gleichkommen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 font-semibold">Cookie-Name</th>
                          <th className="text-left py-2 font-semibold">Zweck</th>
                          <th className="text-left py-2 font-semibold">Laufzeit</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50">
                          <td className="py-2">cookie-consent</td>
                          <td className="py-2">Speichert Ihre Cookie-Einstellungen</td>
                          <td className="py-2">12 Monate</td>
                        </tr>
                        <tr>
                          <td className="py-2">session_id</td>
                          <td className="py-2">Identifiziert Ihre Browsersitzung</td>
                          <td className="py-2">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website-Funktionalität)
                  </p>
                </div>

                {/* Analyse-Cookies */}
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2 text-lg">2. Analyse-Cookies (Opt-in erforderlich)</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten und welche am wenigsten beliebt sind, und zu sehen, wie sich Besucher auf der Website bewegen. Alle von diesen Cookies gesammelten Informationen sind aggregiert und daher anonym.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 font-semibold">Cookie-Name</th>
                          <th className="text-left py-2 font-semibold">Anbieter</th>
                          <th className="text-left py-2 font-semibold">Zweck</th>
                          <th className="text-left py-2 font-semibold">Laufzeit</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr>
                          <td className="py-2">umami.*.* </td>
                          <td className="py-2">Umami Analytics</td>
                          <td className="py-2">Anonymisierte Webanalyse</td>
                          <td className="py-2">12 Monate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                    <strong>Datenschutz:</strong> Umami Analytics ist ein datenschutzfreundliches Analysetool, das keine personenbezogenen Daten erfasst und IP-Adressen anonymisiert. Die Daten werden auf Servern in der EU gespeichert.
                  </p>
                </div>

              </CardContent>
            </Card>

            {/* Cookie-Verwaltung */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ihre Cookie-Einstellungen verwalten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sie können Ihre Cookie-Einstellungen jederzeit ändern:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-2">
                  <li><strong>Über unser Cookie-Banner:</strong> Wenn Sie unsere Website das erste Mal besuchen, erscheint ein Cookie-Banner, in dem Sie Ihre Präferenzen festlegen können. Sie können Ihre Einstellungen jederzeit über den Link „Cookie-Einstellungen" im Footer ändern.</li>
                  <li><strong>Über Ihren Browser:</strong> Die meisten Webbrowser ermöglichen es Ihnen, Cookies über die Browsereinstellungen zu verwalten. Sie können Cookies blockieren, löschen oder eine Benachrichtigung erhalten, bevor ein Cookie gesetzt wird.</li>
                </ul>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg mt-4">
                  <p className="text-sm text-amber-900 dark:text-amber-100">
                    <strong>⚠️ Hinweis:</strong> Wenn Sie Cookies deaktivieren, können einige Funktionen unserer Website möglicherweise nicht ordnungsgemäß funktionieren.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Browser-spezifische Anleitungen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Cookies in Ihrem Browser verwalten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Hier finden Sie Anleitungen zum Verwalten von Cookies in den gängigsten Browsern:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Google Chrome:</strong>{' '}
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Cookie-Einstellungen in Chrome
                    </a>
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong>{' '}
                    <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Cookie-Einstellungen in Firefox
                    </a>
                  </li>
                  <li>
                    <strong>Safari:</strong>{' '}
                    <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Cookie-Einstellungen in Safari
                    </a>
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong>{' '}
                    <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Cookie-Einstellungen in Edge
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Weitere Informationen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Weitere Informationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wenn Sie Fragen zu unserer Verwendung von Cookies haben, können Sie uns kontaktieren unter:
                </p>
                <p className="text-muted-foreground text-sm">
                  Content Aimbassy ist ein Service der <strong>Global Media Consult GmbH</strong><br /><br />
                  <strong>Global Media Consult GmbH</strong><br />
                  Grüngartenstrasse 1<br />
                  77836 Rheinmünster<br />
                  Deutschland<br /><br />
                  Geschäftsführer: Christian Knaebel<br />
                  Telefon: +49 7227 50 36 992<br />
                  E-Mail: cai@globalmediaconsult.com
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
