/**
 * Data Fetching Service
 * 
 * This file contains server-side data fetching functions that run at build time.
 * In a real application, these functions would fetch data from APIs, databases, or CMS.
 */

import { Project, HashnodePost, HashnodePostEdge } from "@/config/links";

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

// Fetch blog posts from Hashnode API
export async function getBlogPosts(): Promise<HashnodePost[]> {
  try {
    const query = `
      query {
        publication(host: "blog.rohitlokhande.in") {
          posts(first: 4) {
            edges {
              node {
                id
                title
                brief
                url
                publishedAt
                readTimeInMinutes
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result?.data?.publication?.posts?.edges) {
      throw new Error('No posts found from Hashnode API');
    }

    // Transform Hashnode data to match our HashnodePost interface
    const blogPosts: HashnodePost[] = result.data.publication.posts.edges.map((edge: HashnodePostEdge) => {
      const post = edge.node;
      return post;
    });

    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts from Hashnode:', error);
    
    // Return fallback static data if API fails
    return [
      {
        id: "1",
        title: "Easy Ways to Set Up Your Own Deep Linking System",
        url: "https://blog.rohitlokhande.in/easy-ways-to-set-up-your-own-deep-linking-system",
        brief: "Gain complete control over your app's navigation by creating custom deep links for Android and iOS, eliminating the need for Firebase.",
        publishedAt: "2025",
        readTimeInMinutes: 6,
        coverImage: {
          url: "https://blog.rohitlokhande.in/easy-ways-to-set-up-your-own-deep-linking-system/cover.jpg"
        }
      },
      {
        id: "2",
        title: "Boosting LLM Performance with RAG",
        url: "https://blog.rohitlokhande.in/boosting-llm-performance-with-rag",
        brief: "Explore how Retrieval-Augmented Generation can enhance Large Language Models for more accurate and contextual responses.",
        publishedAt: "2023",
        readTimeInMinutes: 8,
        coverImage: {
          url: "https://blog.rohitlokhande.in/boosting-llm-performance-with-rag/cover.jpg"
        }
      }
    ];
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
