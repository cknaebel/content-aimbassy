import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/manus-storage/cai-logo-transparent_8c299a49.png" 
              alt="Content Aimbassy" 
              className="h-12 w-auto max-w-[300px] object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Bespoke AI training data licensing—rights-cleared, audit-ready, globally diverse.
            </p>
            <p className="text-xs text-muted-foreground">
              A service of Global Media Consult GmbH and its Partner Network
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              EU VAT ID: DE462698096
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/for-ai-companies">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    For AI Companies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/for-content-owners">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    For Content Owners
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    What We Steward
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://globalmediaconsult.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Global Media Consult
                </a>
              </li>
              <li>
                <a 
                  href="https://globalmediaconsult.com/with-sidebar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/imprint">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Impressum
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Cookie-Richtlinie
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem('cookie-consent');
                    window.location.reload();
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} <a href="https://globalmediaconsult.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Global Media Consult GmbH</a> &middot; EU VAT ID: DE462698096 &middot; Content Aimbassy is a service of Global Media Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
