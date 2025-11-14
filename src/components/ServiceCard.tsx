import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

const ServiceCard = ({ icon: Icon, title, description, gradient = "from-cyan to-blue" }: ServiceCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-primary-foreground" size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
