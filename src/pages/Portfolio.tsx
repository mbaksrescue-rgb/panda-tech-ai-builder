import { useState, useEffect } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

// Import portfolio images
import ecommercePlatform from "@/assets/portfolio/ecommerce-platform.jpg";
import restaurantSystem from "@/assets/portfolio/restaurant-system.jpg";
import fitnessApp from "@/assets/portfolio/fitness-app.jpg";
import corporateBranding from "@/assets/portfolio/corporate-branding.jpg";
import realEstateWebsite from "@/assets/portfolio/real-estate-website.jpg";
import schoolSystem from "@/assets/portfolio/school-system.jpg";
import deliveryApp from "@/assets/portfolio/delivery-app.jpg";
import techStartupBranding from "@/assets/portfolio/tech-startup-branding.jpg";
import portfolioWebsite from "@/assets/portfolio/portfolio-website.jpg";

const imageMap: Record<string, string> = {
  "/src/assets/portfolio/ecommerce-platform.jpg": ecommercePlatform,
  "/src/assets/portfolio/restaurant-system.jpg": restaurantSystem,
  "/src/assets/portfolio/fitness-app.jpg": fitnessApp,
  "/src/assets/portfolio/corporate-branding.jpg": corporateBranding,
  "/src/assets/portfolio/real-estate-website.jpg": realEstateWebsite,
  "/src/assets/portfolio/school-system.jpg": schoolSystem,
  "/src/assets/portfolio/delivery-app.jpg": deliveryApp,
  "/src/assets/portfolio/tech-startup-branding.jpg": techStartupBranding,
  "/src/assets/portfolio/portfolio-website.jpg": portfolioWebsite,
};

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image_url: string | null;
  live_url: string | null;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Websites", "Software", "Mobile Apps", "Branding"];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("portfolio_projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

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
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PortfolioCard 
                  image={project.image_url ? (imageMap[project.image_url] || project.image_url) : "/placeholder.svg"}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  category={project.category}
                  liveUrl={project.live_url || undefined}
                />
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
