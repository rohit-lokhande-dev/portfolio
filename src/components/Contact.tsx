'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, FileText, Twitter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CONTACT_LINKS, getEmailLink, EXTERNAL_LINK_ATTRIBUTES } from "@/config/links";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  // Map contact links with icons
  const contactLinks = CONTACT_LINKS.map(link => ({
    ...link,
    icon: link.name === 'github' ? Github : 
          link.name === 'linkedin' ? Linkedin : 
          link.name === 'twitter' ? Twitter :
          link.name === 'resume' ? FileText : 
          ExternalLink
  }));

  return (
    <section id="contact" className="py-24 px-4">
      <div ref={ref} className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let&apos;s connect!
          </p>
        </div>

        <Card className={`p-8 md:p-12 bg-card border-border text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h3 className="text-2xl font-semibold mb-4">Let&apos;s work together</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-4 mb-8">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                {...EXTERNAL_LINK_ATTRIBUTES}
                className={`flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:translate-x-2 group ${contact.color}`}
                aria-label={contact.label}
              >
                <div className="p-3 rounded-full bg-background">
                  <contact.icon className="w-5 h-5" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-medium">{contact.label}</div>
                  <div className="text-sm text-muted-foreground">{contact.value}</div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <Button 
            size="lg" 
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
            asChild
          >
            <a href={getEmailLink()}>
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
