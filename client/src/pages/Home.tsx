import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="max-w-7xl mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
}