import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Zap,
  Crown,
  Rocket,
  ArrowRight,
  Sparkles,
  Brain,
  Users,
  Clock,
  Shield,
} from "lucide-react";

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses exploring AI",
      price: "TBA",
      period: "contact for pricing",
      originalPrice: "",
      icon: Zap,
      highlight: false,
      features: [
        "Custom AI consultation",
        "Basic automation setup",
        "Integration support",
        "30-day implementation",
        "Email support",
        "Performance analytics",
      ],
      cta: "Start AI Journey",
      badge: "Most Popular",
    },
    {
      name: "Professional",
      description: "Advanced AI solutions for growing companies",
      price: "TBA",
      period: "contact for pricing",
      originalPrice: "",
      icon: Crown,
      highlight: true,
      features: [
        "Everything in Starter",
        "Advanced AI models",
        "Multi-system integration",
        "24/7 priority support",
        "Dedicated research team",
        "Continuous optimization",
        "Custom model training",
        "Performance guarantees",
      ],
      cta: "Scale with AI",
      badge: "Best Value",
    },
    {
      name: "Enterprise",
      description: "Full AI transformation for large organizations",
      price: "TBA",
      period: "tailored pricing",
      originalPrice: "",
      icon: Rocket,
      highlight: false,
      features: [
        "Everything in Professional",
        "White-label solutions",
        "On-premise deployment",
        "Dedicated infrastructure",
        "Custom research projects",
        "Executive training",
        "SLA guarantees",
        "Global support",
      ],
      cta: "Contact Sales",
      badge: "Enterprise",
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
            Transparent Pricing
          </div>
          <div className="mb-8">
            <div className="text-lg font-bold text-aikido-gray mb-4 font-mono tracking-wide">
              What could cost you $100,000+ is now
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground font-mono tracking-tighter">
              ACCESSIBLE TO
              <span className="block gradient-text-cherry">EVERYONE</span>
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-aikido-gray leading-relaxed font-medium">
            Choose the perfect AI transformation package for your business size
            and goals
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
                    {plan.price === "TBA" ? (
                      <div className="text-4xl font-black text-cherry-pink font-mono">
                        TBA
                      </div>
                    ) : (
                      <div className="flex items-baseline justify-center space-x-2">
                        {plan.originalPrice && (
                          <span className="text-sm font-bold text-aikido-gray line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-black text-foreground font-mono">
                          ${plan.price}
                        </span>
                      </div>
                    )}
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
              AI Research Included
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              Access to cutting-edge research and models
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Expert Team
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              Dedicated AI researchers and engineers
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Fast Implementation
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              AI solutions deployed in weeks, not months
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-black text-foreground mb-2 font-mono tracking-tight">
              Enterprise Security
            </h4>
            <p className="text-sm text-aikido-gray font-medium">
              SOC 2 compliant with full data protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
