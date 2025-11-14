import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Websites", "Software", "Mobile Apps", "Branding"];

  const projects = [
    {
      image: "/placeholder.svg",
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment gateway integration and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Websites",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Restaurant Management System",
      description: "Complete POS system with order management, inventory tracking, and reporting",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      category: "Software",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Fitness Tracking App",
      description: "Android app for workout tracking, progress monitoring, and nutrition planning",
      technologies: ["Android Studio", "Kotlin", "Firebase"],
      category: "Mobile Apps",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Corporate Brand Identity",
      description: "Complete brand package including logo, business cards, letterhead, and brand guidelines",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      category: "Branding",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Real Estate Website",
      description: "Property listing platform with search filters, virtual tours, and contact forms",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "Websites",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "School Management System",
      description: "Comprehensive system for student records, attendance, grades, and parent communication",
      technologies: ["Laravel", "Vue.js", "PostgreSQL"],
      category: "Software",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Delivery Tracking App",
      description: "Real-time package tracking with GPS integration and customer notifications",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "Mobile Apps",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Tech Startup Branding",
      description: "Modern brand identity for a SaaS company including logo, website design, and marketing materials",
      technologies: ["Figma", "Adobe Creative Suite"],
      category: "Branding",
      liveUrl: "#"
    },
    {
      image: "/placeholder.svg",
      title: "Portfolio Website",
      description: "Stunning portfolio site for a creative professional with gallery and contact features",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      category: "Websites",
      liveUrl: "#"
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our recent work and see how we've helped businesses achieve their digital goals
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-gradient-primary hover:shadow-glow"
                    : "border-border hover:border-primary/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want Your Project <span className="bg-gradient-primary bg-clip-text text-transparent">Here</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create something amazing together. Get in touch to discuss your project
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
