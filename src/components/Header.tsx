
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-gradient">
            WebCraft
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="px-4 py-2 hover:bg-primary/10">Services</a>
              <a href="#portfolio" className="px-4 py-2 hover:bg-primary/10">Portfolio</a>
              <a href="#process" className="px-4 py-2 hover:bg-primary/10">Process</a>
              <a href="#testimonials" className="px-4 py-2 hover:bg-primary/10">Testimonials</a>
              <div className="px-4">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
