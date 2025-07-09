import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mt. Kenya", href: "/mt-kenya" },
    { name: "Kilimanjaro", href: "/kilimanjaro" },
    { name: "Safaris", href: "/safaris" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-adventure rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <img src="/src/assets/wilderness alternative logo.png" alt="Wilderness Alternative Logo" />
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Wilderness Alternative</h1>
              <p className="text-xs text-muted-foreground">Expedition</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-colors duration-200 relative group ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="adventure" size="sm">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-foreground hover:text-primary transition-colors duration-200 py-2 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="adventure" size="sm" className="w-full mt-4">
                <Link to="/contact">Book Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;