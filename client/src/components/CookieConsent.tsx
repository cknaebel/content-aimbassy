import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';
import { Link } from 'wouter';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Apply saved preferences
      applyCookiePreferences(JSON.parse(consent));
    }
  }, []);

  const applyCookiePreferences = (preferences: { necessary: boolean; analytics: boolean }) => {
    // Necessary cookies are always enabled
    // Analytics cookies controlled by user preference
    if (preferences.analytics) {
      // Enable analytics tracking
      enableAnalytics();
    } else {
      // Disable analytics tracking
      disableAnalytics();
    }
  };

  const enableAnalytics = () => {
    // Load Umami analytics script when user consents
    const script = document.getElementById('umami-script') as HTMLScriptElement;
    if (script && script.hasAttribute('data-src')) {
      const src = script.getAttribute('data-src');
      if (src) {
        script.setAttribute('src', src);
        script.removeAttribute('data-src');
      }
    }
    console.log('Analytics enabled');
  };

  const disableAnalytics = () => {
    // Prevent analytics script from loading
    const script = document.getElementById('umami-script') as HTMLScriptElement;
    if (script && script.hasAttribute('src')) {
      // Remove script if already loaded
      script.remove();
    }
    console.log('Analytics disabled');
    // Remove analytics cookies if they exist
    document.cookie.split(";").forEach((c) => {
      if (c.trim().startsWith('umami')) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      }
    });
  };

  const acceptAll = () => {
    const preferences = { necessary: true, analytics: true };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const preferences = { necessary: true, analytics: false };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = (analytics: boolean) => {
    const preferences = { necessary: true, analytics };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none">
        <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl pointer-events-auto border-2 border-primary/20">
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  🍪 Cookie-Einstellungen
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. Analyse-Cookies helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Weitere Informationen finden Sie in unserer{' '}
                  <Link href="/privacy">
                    <span className="text-primary hover:underline cursor-pointer font-medium">
                      Datenschutzerklärung
                    </span>
                  </Link>
                  {' '}und{' '}
                  <Link href="/cookie-policy">
                    <span className="text-primary hover:underline cursor-pointer font-medium">
                      Cookie-Richtlinie
                    </span>
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!showSettings ? (
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={acceptNecessary}
                  variant="outline"
                  className="border-2"
                >
                  Nur notwendige
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                >
                  Einstellungen anpassen
                </Button>
              </div>
            ) : (
              <CookieSettings
                onSave={savePreferences}
                onCancel={() => setShowSettings(false)}
              />
            )}
          </div>
        </Card>
      </div>
    </>
  );
}

interface CookieSettingsProps {
  onSave: (analytics: boolean) => void;
  onCancel: () => void;
}

function CookieSettings({ onSave, onCancel }: CookieSettingsProps) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  return (
    <div className="space-y-4 mt-4 pt-4 border-t border-border">
      <h4 className="font-semibold text-foreground">Cookie-Kategorien</h4>
      
      {/* Necessary Cookies - Always enabled */}
      <div className="flex items-start justify-between gap-4 p-3 bg-muted/30 rounded-lg">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h5 className="font-medium text-foreground">Notwendige Cookies</h5>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
              Immer aktiv
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
          </p>
        </div>
      </div>

      {/* Analytics Cookies - Optional */}
      <div className="flex items-start justify-between gap-4 p-3 bg-muted/30 rounded-lg">
        <div className="flex-1">
          <h5 className="font-medium text-foreground mb-1">Analyse-Cookies</h5>
          <p className="text-sm text-muted-foreground">
            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={analyticsEnabled}
            onChange={(e) => setAnalyticsEnabled(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          onClick={() => onSave(analyticsEnabled)}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Einstellungen speichern
        </Button>
        <Button
          onClick={onCancel}
          variant="outline"
        >
          Abbrechen
        </Button>
      </div>
    </div>
  );
}
