import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">ASCII</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Australian cybersecurity training institute. EC-Council registered.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Sydney, NSW, Australia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+61 2 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@ascii.edu.au</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 ASCII Australia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
