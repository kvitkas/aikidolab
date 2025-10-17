import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomBackground from "@/components/CherryBlossomBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  FlaskConical,
  Globe,
  Layers,
  Lightbulb,
  Play,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

const Research = () => {
  const [cherryBlossomEnabled, setCherryBlossomEnabled] = useState(true);

  const publications = [
    {
      title: "Step 1: Pick a direction",
      status: "In Progress",
      journal: "Choose a broad field you’re curious about.",
      date: "Outcome: a simple focus statement.",
      authors: "Skim interests, courses, and labs you admire.",
      type: "Step 1",
      abstract: "Start with curiosity. One or two sentences about what excites you is enough to begin.",
    },
    {
      title: "Step 2: Scan the field",
      status: "In Progress",
      journal: "Read 5–10 recent papers or posters.",
      date: "Outcome: notes on methods and open questions.",
      authors: "Look for repeat methods, gaps, or datasets you can access.",
      type: "Step 2",
      abstract:
        "Skim abstracts, highlight key methods, and write one takeaway per paper. You’re hunting for patterns.",
    },
    {
      title: "Step 3: Define a tiny project",
      status: "In Progress",
      journal: "Scope something you can run in 4–8 weeks.",
      date: "Outcome: one testable idea plus success metric.",
      authors: "Use our templates to frame a small, clear question.",
      type: "Step 3",
      abstract:
        "Shrink the ambition: what can you test quickly with tools you already know? We sanity-check this with you.",
    },
    {
      title: "Step 4: Find a mentor",
      status: "In Progress",
      journal: "We send warm intros with your context and project scope.",
      date: "Outcome: a meeting on the calendar.",
      authors: "Faculty, grad students, or research staff who align with your topic.",
      type: "Step 4",
      abstract:
        "We package your interests, availability, and draft project so mentors can say yes faster.",
    },
    {
      title: "Step 5: Run → analyze → share",
      status: "In Progress",
      journal: "Execute, review data with us, and polish your story.",
      date: "Outcome: poster, preprint, or submission.",
      authors: "We co-create timelines, figure drafts, and feedback loops.",
      type: "Step 5",
      abstract:
        "Weekly check-ins keep momentum. We guide you through analysis, writing, and sharing your results.",
    },
  ];

  const researchMetrics = [
    {
      label: "Pick a direction",
      value: "Step 1",
      trend: "Choose a broad area you’re curious about.",
      icon: Lightbulb,
    },
    {
      label: "Scan the field",
      value: "Step 2",
      trend: "Read 5–10 papers and note methods or open questions.",
      icon: BookOpen,
    },
    {
      label: "Define a tiny project",
      value: "Step 3",
      trend: "Frame one testable idea you can run in 4–8 weeks.",
      icon: Target,
    },
    {
      label: "Find a mentor",
      value: "Step 4",
      trend: "We send warm intros and share your project scope.",
      icon: Users,
    },
    {
      label: "Run → analyze → share",
      value: "Step 5",
      trend: "Execute with weekly check-ins and finish with a poster or preprint.",
      icon: Rocket,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Development":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Research Phase":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Experimental":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Beta Testing":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CherryBlossomBackground enabled={cherryBlossomEnabled} />
      <Navigation
        onCherryBlossomToggle={setCherryBlossomEnabled}
        cherryBlossomEnabled={cherryBlossomEnabled}
      />

      <main className="pt-20 relative z-10">
        {/* Hero Section - Modern Grid Layout */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cherry-pink/5 via-transparent to-blue-500/5" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <Badge className="mb-6 bg-cherry-pink/10 text-cherry-pink border-cherry-pink/20 font-mono">
                  <FlaskConical className="w-4 h-4 mr-2" />
                  How research works
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tighter">
                  How research works
                  <span className="block gradient-text-cherry">
                    (the simple version)
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg">
                  No jargon. Clear steps. You’ve got this. New to research? Start with our questionnaire. Already have data? We can help you analyze and publish.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => (window.location.href = "/tos")}
                    className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Questionnaire
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/policy")}
                    className="px-8 py-4 font-bold rounded-xl border-2 font-mono"
                  >
                    Get Faculty Intro
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Research Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {researchMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 premium-card border-0 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cherry-pink/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                      <Icon className="w-8 h-8 text-cherry-pink mb-4" />
                      <div className="text-3xl font-black text-foreground font-mono">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {metric.label}
                      </div>
                      <div className="text-xs text-green-500 font-bold mt-1">
                        {metric.trend}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Pipeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-foreground mb-6 font-mono tracking-tight">
                The 5-step research starter
              </h2>
              <p className="text-xl text-muted-foreground">
                Follow this sequence and you’ll move from idea to shareable results without getting stuck.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {publications.map((paper, index) => (
                <Card
                  key={index}
                  className="premium-card border-0 p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-cherry" />
                  <div className="ml-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-xl font-black text-foreground font-mono tracking-tight">
                            {paper.title}
                          </h3>
                          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                            {paper.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {paper.abstract}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-bold text-foreground">
                              Action:
                            </span>
                            <div className="text-cherry-pink font-bold">
                              {paper.journal}
                            </div>
                          </div>
                          <div>
                            <span className="font-bold text-foreground">
                              Focus:
                            </span>
                            <div className="text-muted-foreground">
                              {paper.authors}
                            </div>
                          </div>
                          <div>
                            <span className="font-bold text-foreground">
                              Outcome:
                            </span>
                            <div className="text-muted-foreground">
                              {paper.date}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <Badge
                          className={`${getStatusColor(paper.status)} mb-2`}
                        >
                          {paper.status}
                        </Badge>
                        <div className="space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-cherry-pink"
                            disabled
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Template coming soon
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Philosophy - Unique Design */}
        <section className="py-20 bg-gradient-to-r from-muted/50 to-cherry-pink/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="mb-6 bg-cherry-pink/10 text-cherry-pink border-cherry-pink/20 font-mono">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Week-by-week support
                  </Badge>
                  <h2 className="text-5xl font-black text-foreground mb-8 font-mono tracking-tight">
                    How we help you
                    <span className="block gradient-text-cherry">
                      finish strong
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Every student gets a mentor intro, a checklist, and fast answers. Our job is to unblock you so you can ship real work.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/about")}
                    className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
                  >
                    See What We Do
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <Card className="premium-card p-6 border-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <h3 className="text-lg font-black text-foreground font-mono">
                        Weekly check-ins
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Short syncs and async feedback keep you accountable without derailing your schedule.
                    </p>
                  </Card>

                  <Card className="premium-card p-6 border-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-black text-foreground font-mono">
                        Templates & examples
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Use our literature review, experiment, and poster templates so you’re never starting from scratch.
                    </p>
                  </Card>

                  <Card className="premium-card p-6 border-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <Layers className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-lg font-black text-foreground font-mono">
                        Realistic scope
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      We keep projects tiny and doable so you see results in 4–8 weeks and build confidence for the next step.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
