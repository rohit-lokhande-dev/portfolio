'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BASE_URLS, EXTERNAL_LINK_ATTRIBUTES, BlogPost } from "@/config/links";

interface BlogProps {
  blogPosts: BlogPost[];
}

const Blog = ({ blogPosts }: BlogProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const posts = blogPosts;

  return (
    <section id="blog" className="py-24 px-4 bg-card/30">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card 
              key={index}
              className={`group p-8 bg-card border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <Button 
                variant="outline" 
                className="gap-2 border-primary/30 hover:bg-primary/10 w-full"
                asChild
              >
                <a href={post.url} {...EXTERNAL_LINK_ATTRIBUTES}>
                  Read Article <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
        
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a href={BASE_URLS.BLOG} {...EXTERNAL_LINK_ATTRIBUTES}>
              <ExternalLink className="w-5 h-5" />
              Visit Blog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
