import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "React Native", "Flutter", "Redux", "React Query", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Socket.io", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Firebase", "MongoDB"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS", "Cloudflare", "GitHub Actions", "GitLab CI", "Nginx"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Jira", "NPM", "CI/CD", "Microservices"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card border-border hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 bg-muted hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
