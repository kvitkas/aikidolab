import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientShowcase from "@/components/ClientShowcase";
import AIProcess from "@/components/AIProcess";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CherryBlossomBackground from "@/components/CherryBlossomBackground";

const Index = () => {
  const [cherryBlossomEnabled, setCherryBlossomEnabled] = useState(true);
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for premium animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add fade-in animation to elements
          entry.target.classList.add("animate-fade-in");

          // Add stagger animations to child elements
          const children = entry.target.querySelectorAll(
            ".fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4",
          );
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-fade-in");
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Removed cherry blossom scroll animation as we have a new system

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Enhanced Cherry Blossom Background with scroll interaction */}
      <CherryBlossomBackground enabled={cherryBlossomEnabled} />

      {/* Navigation with improved mobile responsiveness */}
      <Navigation
        onCherryBlossomToggle={setCherryBlossomEnabled}
        cherryBlossomEnabled={cherryBlossomEnabled}
      />

      {/* Main Content with proper spacing */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Client Showcase */}
        <ClientShowcase />

        {/* AI Process */}
        <AIProcess />

        {/* Pricing */}
        <Pricing />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
