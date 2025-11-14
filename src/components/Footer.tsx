import { Link } from "react-router-dom";
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    "Website Development",
    "Software Development",
    "Mobile App Development",
    "Branding & Graphics",
    "IT Solutions",
    "Business Setup",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-darker border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Panda<span className="text-secondary">Tech</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Building digital solutions that grow your business. From websites to full software systems.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@labankhisa.co.ke" className="hover:text-primary transition-colors">
                  info@labankhisa.co.ke
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <div className="flex flex-col">
                  <a href="tel:0111679286" className="hover:text-primary transition-colors">0111679286</a>
                  <a href="tel:0793923427" className="hover:text-primary transition-colors">0793923427</a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe size={16} className="text-primary" />
                <a href="https://pandatech.labankhisa.co.ke" className="hover:text-primary transition-colors">
                  pandatech.labankhisa.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Panda Tech. All rights reserved. Made with 💙 by Panda Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
