import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Brain,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-background pt-20", // Add top padding to prevent header overlap
        className,
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Premium Grid */}
        <div className="absolute inset-0 superpower-grid opacity-30" />

        {/* Subtle light effects instead of pink blobs */}
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-l from-white/8 to-transparent rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Improved mobile responsiveness */}
          <div className="mb-12 lg:mb-16 fade-in-delay-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 lg:mb-8 tracking-tighter leading-none">
              <span className="block text-foreground font-mono">AIKIDO</span>
              <span className="block gradient-text-cherry font-mono">LABS</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 lg:space-x-6 mb-6 lg:mb-8">
              <div className="h-px bg-gradient-cherry w-16 sm:w-20 lg:w-32" />
              <div className="text-sm sm:text-base lg:text-lg font-bold text-cherry-pink font-mono tracking-[0.2em] uppercase">
                AI Research Lab
              </div>
              <div className="h-px bg-gradient-cherry w-16 sm:w-20 lg:w-32" />
            </div>
          </div>

          {/* Subtitle with improved mobile padding */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-aikido-gray max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed fade-in-delay-2 font-medium px-4">
            <span className="gradient-text-cherry font-bold">
              Advancing AI to transform businesses into smart, automated,
              intelligent organizations.
            </span>
          </p>

          {/* CTA Buttons with better mobile layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-16 lg:mb-20 fade-in-delay-3 px-4">
            <Button
              onClick={() => (window.location.href = "/booking")}
              className="group premium-button text-white px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold rounded-2xl transition-all duration-500 relative z-10 font-mono tracking-wide w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start AI Transformation
                <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "/research")}
              className="group px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold rounded-2xl border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-500 font-mono tracking-wide w-full sm:w-auto"
            >
              <Play className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
              View Research
            </Button>
          </div>

          {/* Simple founding message with mobile padding */}
          <div className="text-center fade-in-delay-4 px-4">
            <p className="text-base lg:text-lg text-muted-foreground font-medium">
              AI Research Lab • Founded 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
