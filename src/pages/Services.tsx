import { Code, Server, Smartphone, Palette, Mail, Shield, Globe, Database, Cloud, Lock } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies. From business sites and e-commerce platforms to portfolios and landing pages, we create web experiences that convert visitors into customers.",
      gradient: "from-cyan to-blue",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"]
    },
    {
      icon: Server,
      title: "Software Development",
      description: "Custom business software solutions designed to streamline your operations. We build enterprise systems, business automation tools, inventory management, and desktop applications tailored to your needs.",
      gradient: "from-blue to-purple",
      features: ["Custom Solutions", "Business Automation", "Integration Services", "Desktop Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native Android applications with beautiful UI/UX design. From concept to deployment, we create mobile apps that deliver seamless user experiences and drive engagement.",
      gradient: "from-purple to-cyan",
      features: ["Android Development", "UI/UX Design", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: Palette,
      title: "Branding & Graphics",
      description: "Professional brand identity design that makes you stand out. We create logos, company profiles, social media kits, business cards, flyers, and all visual assets your brand needs.",
      gradient: "from-cyan to-purple",
      features: ["Logo Design", "Brand Guidelines", "Social Media Kits", "Print Materials"]
    },
    {
      icon: Mail,
      title: "Email & Domain Setup",
      description: "Professional email hosting and domain configuration services. Get your business online with custom email addresses, domain registration, SSL certificates, and DNS management.",
      gradient: "from-blue to-cyan",
      features: ["Custom Email", "Domain Registration", "SSL Certificates", "DNS Management"]
    },
    {
      icon: Shield,
      title: "Business IT Solutions",
      description: "Complete IT infrastructure and support services for your business. We handle everything from network setup to ongoing maintenance, ensuring your technology runs smoothly.",
      gradient: "from-purple to-blue",
      features: ["IT Consulting", "Network Setup", "System Maintenance", "24/7 Support"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and management services. We ensure your data is secure, accessible, and optimized for performance.",
      gradient: "from-cyan to-blue",
      features: ["Database Design", "Data Migration", "Backup Solutions", "Performance Tuning"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Modern cloud infrastructure setup and management. We help you leverage cloud platforms for scalability, reliability, and cost efficiency.",
      gradient: "from-blue to-purple",
      features: ["Cloud Migration", "AWS/Azure Setup", "Cloud Storage", "Serverless Apps"]
    },
    {
      icon: Globe,
      title: "Digital Marketing Setup",
      description: "Establish your digital presence with comprehensive online marketing setup. Social media accounts, Google Business Profile, and analytics integration.",
      gradient: "from-purple to-cyan",
      features: ["Social Media Setup", "Google Business", "Analytics", "SEO Setup"]
    },
    {
      icon: Lock,
      title: "Security Solutions",
      description: "Protect your digital assets with comprehensive security implementations. SSL certificates, firewall configuration, security audits, and data encryption.",
      gradient: "from-cyan to-purple",
      features: ["SSL Implementation", "Security Audits", "Data Encryption", "Access Control"]
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-transparent">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital solutions designed to transform your business. 
              From web development to complete IT infrastructure, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in perspective"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="group relative bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-3d hover:shadow-3d-hover overflow-hidden h-full transform hover:-translate-y-2 hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-3d">
                      <service.icon className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-shadow-3d group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-glow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Project</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help transform your business with our digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:border-primary">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
