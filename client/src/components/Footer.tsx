import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/content-aimbassy-logo.png" 
              alt="Content AImbassy" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              A service by Global Media Consult. Your trusted partner in AI content licensing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Content Portfolio
                  </span>
                </Link>
              </li>
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
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} <a href="https://globalmediaconsult.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Global Media Consult</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
