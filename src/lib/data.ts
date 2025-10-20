/**
 * Data Fetching Service
 * 
 * This file contains server-side data fetching functions that run at build time.
 * In a real application, these functions would fetch data from APIs, databases, or CMS.
 */

import { Project, BlogPost } from "@/config/links";

// Example: Fetch projects from an API
export async function getProjects(): Promise<Project[]> {
  try {
    // In a real app, you would fetch from an API:
    // const response = await fetch('https://api.yourcms.com/projects', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.API_TOKEN}`,
    //   },
    // });
    // const projects = await response.json();
    // return projects;

    // For now, return static data
    // This simulates what you'd get from an API
    return [
      {
        id: "1",
        title: "Veterinary Appointment System",
        description: "Multi-tenant scheduling platform for veterinary hospitals with Zoom integration, AI transcription, and scalable AWS architecture.",
        tags: ["Node.js", "Express.js", "MySQL", "AWS(EC2,S3)", "Docker", "CI/CD", "Zoom API", "ElevenLabs", "LLM(OpenAI)"],
      },
      {
        id: "2",
        title: "RAG System for Business Document Q&A",
        description: "AI-powered natural language search for business documents using Google Apps Script and Gemini API.",
        tags: ["Google Apps Script", "AppSheet", "Gemini API", "AI/ML", "Document Processing", "LLM(Gemini API)"],
      },
      {
        id: "3",
        title: "Meal Management Platform",
        description: "Automated meal tracking system with real-time dashboards and attendance-based automation.",
        tags: ["Node.js", "MySQL", "Socket.IO", "Real-time", "Automation"],
      },
      {
        id: "4",
        title: "Student Management System",
        description: "Modern Next.js platform with dynamic forms, automated workflows, and PDF generation for 500+ users.",
        tags: ["Next.js", "Node.js", "Tailwind CSS", "Shadcn UI", "Uppy", "PDF Generation(Puppeteer)"],
      },
    ];
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return fallback data or empty array
    return [];
  }
}

// Example: Fetch blog posts from a CMS
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // In a real app, you would fetch from a CMS like Contentful, Strapi, etc.:
    // const response = await fetch('https://api.contentful.com/spaces/YOUR_SPACE/entries', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    //   },
    // });
    // const data = await response.json();
    // return data.items.map(item => ({
    //   title: item.fields.title,
    //   url: `https://blog.rohitlokhande.in/${item.fields.slug}`,
    //   excerpt: item.fields.excerpt,
    //   date: item.fields.publishDate,
    //   readTime: item.fields.readTime
    // }));

    // For now, return static data
    return [
      {
        id: "1",
        title: "Easy Ways to Set Up Your Own Deep Linking System",
        url: "https://blog.rohitlokhande.in/easy-ways-to-set-up-your-own-deep-linking-system",
        excerpt: "Gain complete control over your app's navigation by creating custom deep links for Android and iOS, eliminating the need for Firebase.",
        date: "2025",
        readTime: "6 min read"
      },
      {
        id: "2",
        title: "Boosting LLM Performance with RAG",
        url: "https://blog.rohitlokhande.in/boosting-llm-performance-with-rag",
        excerpt: "Explore how Retrieval-Augmented Generation can enhance Large Language Models for more accurate and contextual responses.",
        date: "2023",
        readTime: "8 min read"
      }
    ];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Example: Fetch user profile data
export async function getUserProfile() {
  try {
    // In a real app, you might fetch from a database or API:
    // const response = await fetch(`${process.env.API_BASE_URL}/user/profile`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.API_TOKEN}`,
    //   },
    // });
    // return await response.json();

    return {
      name: "Rohit Lokhande",
      title: "Software Engineer",
      experience: "2+ years",
      location: "India",
      bio: "Passionate Full Stack Developer focused on building end-to-end solutions, optimizing performance, and contributing to innovative projects and open-source communities."
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

// Example: Fetch skills data
export async function getSkills() {
  try {
    // In a real app, you might fetch from a database:
    // const response = await fetch(`${process.env.API_BASE_URL}/skills`);
    // return await response.json();

    return {
      frontend: ["React.js", "Next.js", "React Native", "Flutter", "Redux", "React Query", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
      cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "CloudFormation"],
      tools: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack"]
    };
  } catch (error) {
    console.error('Error fetching skills:', error);
    return null;
  }
}

// Utility function to handle API errors
export function handleApiError(error: unknown, context: string) {
  console.error(`Error in ${context}:`, error);
  // In production, you might want to log to a service like Sentry
  // Sentry.captureException(error, { tags: { context } });
}
