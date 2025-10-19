'use client';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rohit Lokhande",
      "jobTitle": "Software Engineer",
      "description": "Software Engineer with 2+ years of experience building scalable web and mobile applications",
      "url": "https://rohitlokhande.in",
      "sameAs": [
        "https://github.com/rohit-lokhande-dev",
        "https://linkedin.com/in/rohit-lokhande-3b15ab181",
        "https://blog.rohitlokhande.in"
      ],
      "knowsAbout": ["React.js", "Node.js", "Docker", "AWS", "Full Stack Development"],
      "alumniOf": "Software Engineering",
      "worksFor": {
        "@type": "Organization",
        "name": "Tech Industry"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
