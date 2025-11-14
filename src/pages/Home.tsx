import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Palette, Server, Mail, Shield, CheckCircle, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive websites built with the latest technologies",
      gradient: "from-cyan to-blue"
    },
    {
      icon: Server,
      title: "Software & Systems",
      description: "Custom business software and automation solutions",
      gradient: "from-blue to-purple"
    },
    {
      icon: Smartphone,
      title: "Android Apps",
      description: "Native mobile applications for Android devices",
      gradient: "from-purple to-cyan"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Professional logos, company profiles, and social media kits",
      gradient: "from-cyan to-purple"
    },
    {
      icon: Mail,
      title: "Email & Domain Setup",
      description: "Professional email hosting and domain configuration",
      gradient: "from-blue to-cyan"
    },
    {
      icon: Shield,
      title: "Business IT Solutions",
      description: "Complete IT infrastructure and support services",
      gradient: "from-purple to-blue"
    },
  ];

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Users, text: "Expert Team" },
    { icon: Award, text: "Quality Code" },
    { icon: CheckCircle, text: "Full Support" },
  ];

  const featuredProjects = [
    {
      image: "/placeholder.svg",
      title: "E-Commerce Platform",
      description: "Modern online store with payment integration",
      technologies: ["React", "Node.js", "Stripe"],
      category: "Website",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Business Management System",
      description: "Custom ERP system for inventory and sales",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      category: "Software",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Mobile Banking App",
      description: "Secure Android banking application",
      technologies: ["Android Studio", "Java", "Firebase"],
      category: "Mobile",
      liveUrl: "#"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Build{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Websites, Software
              </span>
              {" "}&{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Digital Solutions
              </span>
              {" "}That Grow Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Web Development • Software Engineering • Branding • IT Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow text-lg px-8">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:border-primary">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-cyan/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </section>

      {/* Services Snapshot */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="bg-gradient-secondary bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-semibold">{feature.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-primary rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-semibold mb-4 text-primary-foreground">
                LIMITED OFFER
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
                Complete Digital Package
              </h2>
              <p className="text-xl mb-2 text-primary-foreground/90">
                Website + Logo + Social Media Kit
              </p>
              <p className="text-4xl font-bold mb-6 text-primary-foreground">
                Only KES 15,000
              </p>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/contact">Claim This Offer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Recent work we're proud of
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
