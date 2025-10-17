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
          <div className="mb-10 lg:mb-14 fade-in-delay-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 lg:mb-6 tracking-tight leading-tight">
              <span className="block text-foreground font-mono">
                Undergrads doing real research, faster.
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-4 lg:space-x-5 mb-5 lg:mb-6">
              <div className="h-px bg-gradient-cherry w-12 sm:w-16 lg:w-24" />
              <div className="text-xs sm:text-sm lg:text-base font-semibold text-cherry-pink/80 tracking-[0.25em] uppercase">
                Aikido Labs
              </div>
              <div className="h-px bg-gradient-cherry w-12 sm:w-16 lg:w-24" />
            </div>
          </div>

          {/* Subtitle with improved mobile padding */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-aikido-gray/90 max-w-3xl mx-auto mb-10 lg:mb-14 leading-relaxed fade-in-delay-2 font-medium px-4">
            <span className="gradient-text-cherry font-semibold">
              We make undergraduate research radically accessible by matching
              students to mentors, funding micro-grants, and guiding them from
              idea → execution → publication.
            </span>
          </p>

          {/* CTA Buttons with better mobile layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-5 mb-16 lg:mb-18 fade-in-delay-3 px-4">
            <Button
              onClick={() => (window.location.href = "/booking")}
              className="group premium-button text-white px-7 lg:px-9 py-3.5 lg:py-4 text-base lg:text-lg font-semibold rounded-2xl transition-all duration-500 relative z-10 tracking-wide w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Apply for Research
                <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "/policy")}
              className="group px-7 lg:px-9 py-3.5 lg:py-4 text-base lg:text-lg font-semibold rounded-2xl border border-foreground/70 hover:bg-foreground hover:text-background transition-all duration-500 tracking-wide w-full sm:w-auto"
            >
              <Play className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
              Get Matched to a Professor
            </Button>
          </div>

          {/* Simple founding message with mobile padding */}
          <div className="text-center fade-in-delay-4 px-4">
            <p className="text-sm lg:text-base text-muted-foreground/90 font-medium">
              Questions? hello@aikidolab.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
