'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  PROJECT_LINKS,
  EXTERNAL_LINK_ATTRIBUTES,
  Project,
} from "@/config/links";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-4">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group p-6 bg-card border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 flex flex-col ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.github} {...EXTERNAL_LINK_ATTRIBUTES}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.link} {...EXTERNAL_LINK_ATTRIBUTES}>
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a href={PROJECT_LINKS.github} {...EXTERNAL_LINK_ATTRIBUTES}>
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
