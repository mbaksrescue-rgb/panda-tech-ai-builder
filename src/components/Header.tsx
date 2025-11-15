import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group perspective">
            <div className="text-3xl font-bold text-shadow-3d transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Panda</span>
              <span className="bg-gradient-secondary bg-clip-text text-transparent">Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative perspective ${
                  location.pathname === link.path
                    ? "text-primary text-shadow-3d scale-110"
                    : "text-foreground/80 hover:text-primary hover:text-shadow-3d hover:scale-105"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full shadow-glow" />
                )}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative flex items-center gap-1 perspective ${
                  location.pathname === "/admin"
                    ? "text-primary text-shadow-3d scale-110"
                    : "text-foreground/80 hover:text-primary hover:text-shadow-3d hover:scale-105"
                }`}
              >
                <Shield size={16} />
                Admin
                {location.pathname === "/admin" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full shadow-glow" />
                )}
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Button
                onClick={() => signOut()}
                variant="outline"
                size="sm"
                className="border-primary/50"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            ) : (
              <>
                <Button asChild variant="outline" size="sm" className="border-primary/50">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-primary text-shadow-3d scale-105"
                    : "text-foreground/80 hover:text-primary hover:text-shadow-3d"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`flex items-center gap-2 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === "/admin"
                    ? "text-primary text-shadow-3d scale-105"
                    : "text-foreground/80 hover:text-primary hover:text-shadow-3d"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield size={16} />
                Admin
              </Link>
            )}
            {user ? (
              <Button
                onClick={() => {
                  signOut();
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full mt-4 border-primary/50"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            ) : (
              <>
                <Button asChild variant="outline" className="w-full mt-4 border-primary/50">
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full mt-2 bg-gradient-primary">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
