import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-adventure rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Wilderness Alternative</h3>
                <p className="text-sm text-primary-foreground/80">Expedition</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your premier adventure travel company specializing in authentic African experiences 
              through mountain climbing, wildlife safaris, and cultural expeditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                Blog
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Expeditions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Expeditions</h4>
            <nav className="space-y-2">
              <Link to="/mt-kenya" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                Mount Kenya
              </Link>
              <Link to="/kilimanjaro" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                Kilimanjaro
              </Link>
              <Link to="/safaris" className="block text-primary-foreground/80 hover:text-white transition-colors duration-200">
                Kenya Safaris
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="space-y-4">
              <div className="text-primary-foreground/80">
                <p>Email: info@wildernessalternativeexpedition.com</p>
                <p>Phone: +254 743789655</p>
                <p>Nairobi, Kenya</p>
              </div>
              
              <div>
                <p className="text-sm text-primary-foreground/80 mb-2">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
                  />
                  <Button variant="adventure" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Wilderness Alternative Expedition. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;