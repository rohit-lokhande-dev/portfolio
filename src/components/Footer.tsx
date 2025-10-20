import { Github, Linkedin, ExternalLink, Twitter } from "lucide-react";
import { SOCIAL_LINKS, EXTERNAL_LINK_ATTRIBUTES } from "@/config/links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rohit Lokhande.
          </p>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent =
                social.name === "github"
                  ? Github
                  : social.name === "linkedin"
                  ? Linkedin
                  : social.name === "twitter"
                  ? Twitter
                  : ExternalLink;

              return (
                <a
                  key={index}
                  href={social.url}
                  {...EXTERNAL_LINK_ATTRIBUTES}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
