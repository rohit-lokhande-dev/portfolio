import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, FileText, Twitter } from "lucide-react";
import Image from "next/image";
import { SOCIAL_LINKS, EXTERNAL_LINK_ATTRIBUTES, BASE_URLS } from "@/config/links";
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Hero background" width={1920} height={1080} className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              Software Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="gradient-text">Rohit Lokhande</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building scalable web and mobile applications with <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Node.js</span>, and modern cloud technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in-delayed">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch <Mail className="w-4 h-4" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
              <a href={BASE_URLS.RESUME} {...EXTERNAL_LINK_ATTRIBUTES} className="flex items-center gap-2">
                Download Resume <FileText className="w-4 h-4" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent = social.name === 'github' ? Github : 
                                  social.name === 'linkedin' ? Linkedin : 
                                  social.name === 'twitter' ? Twitter :
                                  ExternalLink;
              
              return (
                <a 
                  key={index}
                  href={social.url} 
                  {...EXTERNAL_LINK_ATTRIBUTES}
                  className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
