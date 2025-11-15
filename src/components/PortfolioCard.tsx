import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  category: string;
}

const PortfolioCard = ({ image, title, description, technologies, liveUrl, category }: PortfolioCardProps) => {
  return (
    <div className="group perspective">
      <div className="bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-3d hover:shadow-3d-hover transform hover:-translate-y-2 hover:scale-[1.02]">
        <div className="relative overflow-hidden h-48 bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary shadow-3d">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/80 shadow-3d"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {liveUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="group/btn"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                View Live
                <ExternalLink size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
