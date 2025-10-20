/**
 * Centralized Links Configuration
 * 
 * This file contains all external links used throughout the application.
 * Update links here to automatically reflect changes across all components.
 * 
 * SEO Benefits:
 * - Consistent URLs across all components
 * - Easy to update and maintain
 * - Prevents broken links
 * - Better structured data management
 */

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon?: string;
  color?: string;
}

export interface ProjectLink {
  github: string;
  demo?: string;
  blog?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
}

// Base URLs
export const BASE_URLS = {
  WEBSITE: 'https://rohitlokhande.in',
  GITHUB: 'https://github.com/rohit-lokhande-dev',
  ORIGINAL_GITHUB: 'https://github.com/rohit-lokhande-dev',
  ORIGINAL_LINKEDIN: 'https://linkedin.com/in/rohit-lokhande-3b15ab181',
  LINKEDIN: 'https://linkedin.rohitlokhande.in',
  BLOG: 'https://blog.rohitlokhande.in',
  EMAIL: 'rohitlokhande6293@gmail.com',
} as const;

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: BASE_URLS.GITHUB,
    label: 'GitHub Profile',
    color: 'hover:text-foreground'
  },
  {
    name: 'linkedin',
    url: BASE_URLS.LINKEDIN,
    label: 'LinkedIn Profile',
    color: 'hover:text-[#0077B5]'
  },
  {
    name: 'blog',
    url: BASE_URLS.BLOG,
    label: 'Blog',
    color: 'hover:text-primary'
  }
];

// Contact Links (used in Contact component)
export const CONTACT_LINKS = [
  {
    name: 'github',
    url: BASE_URLS.GITHUB,
    label: 'GitHub',
    value: '@rohit-lokhande-dev',
    color: 'hover:text-foreground'
  },
  {
    name: 'linkedin',
    url: BASE_URLS.LINKEDIN,
    label: 'LinkedIn',
    value: 'rohit-lokhande',
    color: 'hover:text-[#0077B5]'
  },
  {
    name: 'blog',
    url: BASE_URLS.BLOG,
    label: 'Blog',
    value: 'blog.rohitlokhande.in',
    color: 'hover:text-primary'
  }
];

// Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Easy Ways to Set Up Your Own Deep Linking System",
    url: `${BASE_URLS.BLOG}/easy-ways-to-set-up-your-own-deep-linking-system`,
    excerpt: "Gain complete control over your app's navigation by creating custom deep links for Android and iOS, eliminating the need for Firebase.",
    date: "2025",
    readTime: "6 min read"
  },
  {
    id: "2",
    title: "Boosting LLM Performance with RAG",
    url: `${BASE_URLS.BLOG}/boosting-llm-performance-with-rag`,
    excerpt: "Explore how Retrieval-Augmented Generation can enhance Large Language Models for more accurate and contextual responses.",
    date: "2023",
    readTime: "8 min read"
  }
];

// Project Links
export const PROJECT_LINKS: ProjectLink = {
  github: BASE_URLS.GITHUB,
  demo: BASE_URLS.BLOG,
  blog: BASE_URLS.BLOG
};

// Navigation Links (internal)
export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

// Structured Data for SEO
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rohit Lokhande",
  "jobTitle": "Software Engineer",
  "description": "Software Engineer with 2+ years of experience building scalable web and mobile applications",
  "url": BASE_URLS.WEBSITE,
  "sameAs": [
    BASE_URLS.GITHUB,
    BASE_URLS.LINKEDIN,
    BASE_URLS.BLOG
  ],
  "knowsAbout": ["React.js", "Node.js", "Docker", "AWS", "Full Stack Development"],
  "alumniOf": "Software Engineering",
  "worksFor": {
    "@type": "Organization",
    "name": "Tech Industry"
  }
};

// Email link helper
export const getEmailLink = (email: string = BASE_URLS.EMAIL) => `mailto:${email}`;

// External link attributes for SEO and security
export const EXTERNAL_LINK_ATTRIBUTES = {
  target: '_blank',
  rel: 'noopener noreferrer'
} as const;
