import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProjects, getBlogPosts, getUserProfile, getSkills } from "@/lib/data";

// Static generation configuration
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour


const Index = async () => {
  // Fetch data at build time for static generation
  const projects = await getProjects();
  const blogPosts = await getBlogPosts();
  const userProfile = await getUserProfile();
  const skills = await getSkills();
  
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About userProfile={userProfile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Blog blogPosts={blogPosts} />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
