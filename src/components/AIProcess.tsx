import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Brain,
  Settings,
  LineChart,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Users,
} from "lucide-react";

interface AIProcessProps {
  className?: string;
}

export default function AIProcess({ className }: AIProcessProps) {
  // Define realistic process steps with practical outcomes
  const processSteps = [
    {
      step: "01",
      icon: Calendar,
      title: "Initial Strategy Session",
      description:
        "Schedule a comprehensive consultation with our research team to understand your business needs and identify practical AI implementation opportunities.",
      visual: (
        <div className="w-full h-64 bg-gradient-cherry-soft rounded-2xl p-6 flex items-center justify-center">
          <div className="text-center">
            <Calendar className="w-16 h-16 text-cherry-pink mx-auto mb-4" />
            <div className="font-bold text-foreground font-mono text-lg">
              Strategy Session
            </div>
            <div className="text-sm text-aikido-gray mt-2">
              30-minute deep dive
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      icon: Brain,
      title: "TBD",
      description:
        "Coming soon - we're developing new processes to better serve our clients.",
      visual: (
        <div className="w-full h-64 bg-gradient-premium rounded-2xl p-6 border border-border">
          <div className="flex justify-between items-start mb-4">
            <div className="text-sm font-bold text-foreground font-mono">
              IN DEVELOPMENT
            </div>
            <div className="w-3 h-3 bg-cherry-pink rounded-full animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <Brain className="w-16 h-16 text-cherry-pink mx-auto mb-4" />
              <div className="text-lg font-bold text-foreground font-mono">
                Process Step #2
              </div>
              <div className="text-sm text-aikido-gray mt-2">
                To Be Determined
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      icon: Settings,
      title: "TBD",
      description:
        "Coming soon - we're developing new processes to better serve our clients.",
      visual: (
        <div className="w-full h-64 bg-gradient-premium rounded-2xl p-6 border border-border">
          <div className="flex justify-between items-start mb-4">
            <div className="text-sm font-bold text-foreground font-mono">
              IN DEVELOPMENT
            </div>
            <div className="w-3 h-3 bg-cherry-pink rounded-full animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <Settings className="w-16 h-16 text-cherry-pink mx-auto mb-4" />
              <div className="text-lg font-bold text-foreground font-mono">
                Process Step #3
              </div>
              <div className="text-sm text-aikido-gray mt-2">
                To Be Determined
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Scroll to contact section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="process"
      className={cn("py-16 lg:py-32 bg-background", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with improved mobile spacing */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cherry-pink/10 border border-cherry-pink/20 text-cherry-pink text-sm font-bold mb-6 lg:mb-8 font-mono tracking-wide">
            <Brain className="mr-2 w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-6 lg:mb-8 font-mono tracking-tighter leading-tight">
            What to expect as an
            <span className="block gradient-text-cherry">AIKIDO LABS</span>
            <span className="block text-foreground">client</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-aikido-gray leading-relaxed font-medium px-4">
            From initial consultation to ongoing support, our proven process
            ensures practical AI implementation with measurable results
          </p>
        </div>

        {/* Process Steps with improved responsive design */}
        <div className="space-y-16 lg:space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center",
                  !isEven && "lg:flex-row-reverse",
                )}
              >
                {/* Content section with improved mobile padding */}
                <div
                  className={cn(
                    "space-y-6 lg:space-y-8 px-4 sm:px-0",
                    !isEven && "lg:order-2",
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-cherry rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-6xl font-black text-cherry-pink/20 font-mono">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground font-mono tracking-tight leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-base lg:text-lg text-aikido-gray leading-relaxed font-medium">
                    {step.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      className="w-full sm:w-auto font-bold font-mono tracking-wide border-2 hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      Learn More
                    </Button>
                    <div className="flex items-center space-x-2 text-sm font-bold text-cherry-pink font-mono">
                      <Zap className="w-4 h-4" />
                      <span>Professional Implementation</span>
                    </div>
                  </div>
                </div>

                {/* Visual section with improved mobile margins */}
                <div className={cn("px-4 sm:px-0", !isEven && "lg:order-1")}>
                  {step.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with improved mobile spacing */}
        <div className="text-center mt-16 lg:mt-24 px-4">
          <Card className="premium-card p-8 lg:p-12 max-w-4xl mx-auto border-0">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 lg:mb-8">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-cherry rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-foreground font-mono tracking-tight text-center sm:text-left">
                Ready to implement practical AI solutions?
              </h3>
            </div>
            <p className="text-base lg:text-lg text-aikido-gray mb-6 lg:mb-8 font-medium">
              Join forward-thinking companies already benefiting from our
              research-driven AI solutions
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="group premium-button text-white px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold rounded-2xl transition-all duration-500 relative z-10 font-mono tracking-wide w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Your AI Journey
                <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
