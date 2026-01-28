import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl" />
            </div>
            <div>
              <h1 className="font-display text-lg md:text-xl font-bold text-foreground">
                CyberShield<span className="text-primary">Academy</span>
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">EC-Council Authorized</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("courses")} className="text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection("verify")} className="text-muted-foreground hover:text-foreground transition-colors">
              Verify Certificate
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                About
              </button>
              <button onClick={() => scrollToSection("courses")} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Courses
              </button>
              <button onClick={() => scrollToSection("verify")} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Verify Certificate
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
