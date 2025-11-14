import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import techPattern from "@/assets/tech-pattern.jpg";

const About = () => {
  const values = [
    { icon: Target, title: "Innovation", description: "Staying ahead with cutting-edge technology" },
    { icon: Eye, title: "Transparency", description: "Clear communication at every step" },
    { icon: Heart, title: "Client Focus", description: "Your success is our priority" },
    { icon: CheckCircle2, title: "Excellence", description: "Delivering quality in every project" },
  ];

  const process = [
    { step: "01", title: "Planning", description: "We analyze your requirements and create a detailed project roadmap" },
    { step: "02", title: "Design", description: "Crafting beautiful, user-friendly interfaces that align with your brand" },
    { step: "03", title: "Development", description: "Building robust solutions with clean, maintainable code" },
    { step: "04", title: "Testing", description: "Rigorous quality assurance to ensure flawless performance" },
    { step: "05", title: "Deployment", description: "Smooth launch with comprehensive documentation" },
    { step: "06", title: "Maintenance", description: "Ongoing support and updates to keep you running smoothly" },
  ];

  const technologies = [
    "HTML5 & CSS3",
    "JavaScript & TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "PHP & Laravel",
    "Python & Django",
    "MySQL & PostgreSQL",
    "MongoDB",
    "Android Studio",
    "Java & Kotlin",
    "Firebase",
    "AWS & Azure",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={techPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Panda Tech</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a digital solutions company specializing in modern website development, 
              software engineering, branding, and business IT support. Our mission is to empower 
              businesses with technology that drives growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative and reliable digital solutions that help businesses thrive 
                in the modern world. We believe in making technology accessible and impactful for everyone.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4">
                <Eye className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading tech partner for businesses across Africa, recognized for our 
                innovation, quality, and customer-centric approach to digital transformation.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our <span className="bg-gradient-accent bg-clip-text text-transparent">Core Values</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all group"
              >
                <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies <span className="bg-gradient-secondary bg-clip-text text-transparent">We Use</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Leveraging modern tools and frameworks to build powerful solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card rounded-full border border-border hover:border-primary/50 hover:shadow-glow transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
