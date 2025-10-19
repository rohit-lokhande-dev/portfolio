import { Card } from "@/components/ui/card";
import { Code2, Rocket, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Expert in building modern web applications with React, Node.js, and cutting-edge frameworks."
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Designing clean architectures and efficient APIs for reliable, high-performance systems."
    },
    {
      icon: Database,
      title: "Cloud & DevOps",
      description: "Proficient in Docker, CI/CD, AWS, and cloud technologies for seamless deployments."
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg leading-relaxed text-foreground/90">
              👋 Hi, I&apos;m <span className="text-primary font-semibold">Rohit Lokhande</span> — a Software Engineer with <span className="text-primary font-semibold">2+ years of experience</span> building scalable web and mobile applications using React.js, Node.js, and cloud technologies.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              💡 I enjoy designing clean architectures, crafting efficient APIs, and exploring Docker, CI/CD, and AWS for reliable deployments.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              🚀 Currently working on <span className="text-secondary font-semibold">Backend-focused projects</span> and sharing learnings through blogs and open-source contributions.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-700 hover:translate-x-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
