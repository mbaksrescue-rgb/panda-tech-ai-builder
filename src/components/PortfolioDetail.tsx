import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface PortfolioDetailProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  category: string;
  processDescription?: string | null;
  processHighlights?: string[];
}

const PortfolioDetail = ({
  image,
  title,
  description,
  technologies,
  liveUrl,
  category,
  processDescription,
  processHighlights,
}: PortfolioDetailProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group perspective cursor-pointer">
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
              
              <div className="flex gap-2">
                {liveUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
                <Button variant="default" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-xl h-64 bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium shadow-3d"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {processDescription && (
            <div>
              <h3 className="text-xl font-semibold mb-3">How It Was Made</h3>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {processDescription}
                </p>
              </div>
            </div>
          )}

          {processHighlights && processHighlights.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {processHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 shadow-3d"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {liveUrl && (
            <div className="pt-4 border-t border-border">
              <Button
                asChild
                className="w-full bg-gradient-primary"
                size="lg"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetail;
