import { useEffect } from "react";
import { CursorTrail } from "@/components/ui/cursor-trail";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { initializeSmoothScroll, useIntersectionObserver } from "@/lib/smooth-scroll";

export default function Portfolio() {
  useEffect(() => {
    // Initialize smooth scrolling
    initializeSmoothScroll();

    // Initialize intersection observer for animations
    const observer = useIntersectionObserver();

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .glassmorphic-dark');
    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorTrail />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
