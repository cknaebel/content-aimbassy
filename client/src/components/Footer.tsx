import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/logo-beige.png" 
              alt="Content Aimbassy" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Your trusted partner in AI content licensing and monetization.
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
                <Link href="/how-it-works">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    How It Works
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/questionnaire">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Submit Content
                  </span>
                </Link>
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
                    Imprint
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
          <p>&copy; {new Date().getFullYear()} Content Aimbassy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
