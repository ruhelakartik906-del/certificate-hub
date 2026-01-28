import { Shield, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Shield className="w-10 h-10 text-primary" />
                <div className="absolute inset-0 bg-primary/20 blur-xl" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  CyberShield<span className="text-primary">Academy</span>
                </h3>
                <p className="text-xs text-muted-foreground">EC-Council Authorized</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Australia's premier cybersecurity training institute offering EC-Council certified 
              programs. Transform your career with world-class ethical hacking education.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-secondary" />
              <span>Serving students across Australia and globally</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#verify" className="text-muted-foreground hover:text-foreground transition-colors">
                  Verify Certificate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Level 10, 123 Tech Street<br />
                  Sydney, NSW 2000<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+61 2 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@cybershield.edu.au</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 CyberShield Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
