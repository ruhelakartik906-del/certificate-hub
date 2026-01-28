import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary">ASCII</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Australia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("courses")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection("verify")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Verify
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("about")} className="text-left text-sm text-muted-foreground hover:text-foreground py-2">
                About
              </button>
              <button onClick={() => scrollToSection("courses")} className="text-left text-sm text-muted-foreground hover:text-foreground py-2">
                Courses
              </button>
              <button onClick={() => scrollToSection("verify")} className="text-left text-sm text-muted-foreground hover:text-foreground py-2">
                Verify
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-sm text-muted-foreground hover:text-foreground py-2">
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
