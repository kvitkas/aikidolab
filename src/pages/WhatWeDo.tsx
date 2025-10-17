import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomBackground from "@/components/CherryBlossomBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Sparkles,
  Zap,
  Compass,
  PenSquare,
  Layers,
} from "lucide-react";

const keyHighlights = [
  {
    icon: Users,
    title: "Matchmaking",
    description:
      "We connect you with faculty based on your major, year, and interests. No cold emails needed.",
  },
  {
    icon: Zap,
    title: "Micro-grants",
    description:
      "We fund starter costs—software, datasets, consumables—so you can begin immediately.",
  },
  {
    icon: Compass,
    title: "Step-by-step guidance",
    description:
      "We walk you from idea → literature review → methods → results → write-up.",
  },
  {
    icon: PenSquare,
    title: "Publishing support",
    description:
      "We help with posters, preprints, and submissions when it’s time to share results.",
  },
  {
    icon: Layers,
    title: "Community",
    description: "Join a cohort of builders who encourage progress every week.",
  },
];

const WhatWeDo = () => {
  const [cherryBlossomEnabled, setCherryBlossomEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CherryBlossomBackground enabled={cherryBlossomEnabled} />
      <Navigation
        onCherryBlossomToggle={setCherryBlossomEnabled}
        cherryBlossomEnabled={cherryBlossomEnabled}
      />

      <main className="pt-24 lg:pt-32 relative z-10">
        {/* Hero */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-cherry-pink/10 text-cherry-pink border-cherry-pink/20">
                What We Do
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                We help undergrads do real research—fast.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Aikido Labs makes undergraduate research radically accessible by matching
                students to mentors, funding micro-grants, and guiding every project from idea
                to publication-ready results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => (window.location.href = "/booking")}
                  className="px-6 py-3 text-base font-medium premium-button text-white"
                >
                  Apply for Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/policy")}
                  className="px-6 py-3 text-base font-medium border border-foreground/70"
                >
                  Get Matched to a Professor
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                How we make it happen
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Clear steps, supportive mentors, and on-demand funding mean you can focus on
                building the science—not chasing logistics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={highlight.title}
                    className="p-6 border border-border/70 hover:border-cherry-pink/40 transition-colors duration-300 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-cherry-pink/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-cherry-pink" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Card className="p-8 md:p-10 border border-border/70 rounded-3xl text-center">
              <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-cherry-pink/10 text-cherry-pink text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to start?
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Join the next cohort of builders
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                Apply now to get matched with a mentor, secure micro-grant support, and follow
                a clear week-by-week plan to publishable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => (window.location.href = "/booking")}
                  className="px-6 py-3 text-base font-medium premium-button text-white"
                >
                  Apply for Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/tos")}
                  className="px-6 py-3 text-base font-medium border border-foreground/70"
                >
                  Start Questionnaire
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatWeDo;

