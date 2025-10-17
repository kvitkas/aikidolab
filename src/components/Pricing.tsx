import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Check,
  Clock,
  Crown,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  const pricingPlans = [
    {
      name: "Mentor Match",
      description: "Warm introductions to professors and graduate mentors",
      price: "$0",
      period: "included with your application",
      originalPrice: "",
      icon: Users,
      highlight: false,
      features: [
        "Matches based on major, year, and interests",
        "Context email drafted for you",
        "Example project scope to share",
        "Follow-up checklist after each intro",
        "Option to request additional labs",
      ],
      cta: "Get Matched!",
      badge: "Included",
    },
    {
      name: "Micro-Grant Boost",
      description: "$100–$1,000 to cover software, datasets, and materials",
      price: "$0",
      period: "awarded in rolling cycles",
      originalPrice: "",
      icon: Zap,
      highlight: true,
      features: [
        "Fast approval in 3–5 days",
        "Use for cloud credits, consumables, data",
        "Budget template and accountability plan",
        "Purchase tracking support",
        "Renewable for follow-on experiments",
      ],
      cta: "Request Micro-Grant",
      badge: "Student Favorite",
    },
    {
      name: "Publishing Support",
      description: "Guidance from results to posters, preprints, or journals",
      price: "$0",
      period: "available once you have data",
      originalPrice: "",
      icon: Crown,
      highlight: false,
      features: [
        "Outline reviews and writing sprints",
        "Poster and slide templates",
        "Submission calendar reminders",
        "Peer feedback from your cohort",
        "Warm intros to student conferences",
      ],
      cta: "See Publishing Help",
      badge: "Included",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className={cn("py-16 lg:py-32 bg-muted/30", className)}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cherry-pink/10 border border-cherry-pink/20 text-cherry-pink text-sm font-bold mb-8 font-mono tracking-wide">
            <Sparkles className="mr-2 w-4 h-4" />
            Funding & support included
          </div>
          <div className="mb-8">
            <div className="text-lg font-bold text-aikido-gray mb-4 font-mono tracking-wide">
              Research shouldn’t require guesswork or hidden fees
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground font-mono tracking-tighter">
              Everything you need to
              <span className="block gradient-text-cherry">launch and publish</span>
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-aikido-gray leading-relaxed font-medium">
            Pick the support you need right now. Apply once—unlock all three.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={cn(
                  "relative p-8 lg:p-10 border-0 transition-all duration-500",
                  plan.highlight
                    ? "premium-card scale-105 ring-2 ring-cherry-pink/20"
                    : "premium-card",
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={cn(
                      "absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-black font-mono tracking-wider",
                      plan.highlight
                        ? "bg-gradient-cherry text-white"
                        : "bg-foreground text-background",
                    )}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                      plan.highlight
                        ? "bg-gradient-cherry"
                        : "bg-cherry-pink/10",
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-8 h-8",
                        plan.highlight ? "text-white" : "text-cherry-pink",
                      )}
                    />
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-2 font-mono tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-aikido-gray font-medium mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      {plan.originalPrice && (
                        <span className="text-sm font-bold text-aikido-gray line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-black text-foreground font-mono">
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-aikido-gray font-mono tracking-wide">
                      {plan.period}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-cherry-pink mt-0.5 flex-shrink-0" />
                      <span className="text-aikido-gray font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className={cn(
                    "w-full py-4 text-lg font-bold rounded-2xl transition-all duration-500 relative z-10 font-mono tracking-wide",
                    plan.highlight
                      ? "premium-button text-white"
                      : "border-2 border-foreground hover:bg-foreground hover:text-background",
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-cherry-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-cherry-pink" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Project templates
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              Checklists, outlines, and examples so you never start from scratch.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Mentor cohort
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              Faculty, grad students, and peers who give warm feedback each week.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Fast starts
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              Micro-grants approved within days so you can order supplies quickly.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Guided publishing
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              Editing support and submission prep when you’re ready to share results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
