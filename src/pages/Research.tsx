import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomBackground from "@/components/CherryBlossomBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Cpu,
  Database,
  Network,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Activity,
  Star,
  Award,
  Beaker,
  FileText,
  ExternalLink,
  Download,
  Users,
  Calendar,
  Microscope,
  BookOpen,
  Lightbulb,
  Rocket,
  ChevronRight,
  Play,
  Code,
  FlaskConical,
  GitBranch,
  Timer,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const Research = () => {
  const [activeResearchTab, setActiveResearchTab] = useState("current");
  const [cherryBlossomEnabled, setCherryBlossomEnabled] = useState(true);

  const researchAreas = [
    {
      icon: Microscope,
      title: "TBA",
      description: "Coming Soon...",
      progress: 0,
      timeline: "xxx",
      status: "xxx",
      team: ["xxx", "xxx"],
      technologies: ["xxx", "xxx", "xxx"],
      impact: "xxx",
      difficulty: "xxx",
    },
  ];

  const publications = [
    {
      title: "Soon...",
      status: "Soon...",
      journal: "Soon...",
      date: "2025 Q2",
      authors: "Soon...",
      type: "Soon...",
      abstract: "Soon...",
    },
  ];

  const researchMetrics = [
    { label: "Active Projects", value: "0", trend: "+0", icon: Rocket },
    { label: "Publications", value: "0", trend: "+0", icon: FileText },
    { label: "Research Hours", value: "0", trend: "+0", icon: Timer },
    { label: "Collaborations", value: "0", trend: "+0", icon: Users },
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

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Revolutionary":
        return "text-red-500";
      case "High":
        return "text-orange-500";
      case "Medium":
        return "text-yellow-500";
      default:
        return "text-gray-500";
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
                  Research Lab
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tighter">
                  PUSHING
                  <span className="block gradient-text-cherry">BOUNDARIES</span>
                  <span className="block text-4xl lg:text-5xl text-muted-foreground">
                    in AI Research
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg">
                  Where cutting-edge research meets practical innovation. We're
                  building the AI systems of tomorrow, today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setActiveResearchTab("current")}
                    className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Explore Research
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/booking")}
                    className="px-8 py-4 font-bold rounded-xl border-2 font-mono"
                  >
                    Collaborate With Us
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
                        {metric.trend} this quarter
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
                Publication Pipeline
              </h2>
              <p className="text-xl text-muted-foreground">
                Research papers advancing the field of artificial intelligence
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
                              Journal:
                            </span>
                            <div className="text-cherry-pink font-bold">
                              {paper.journal}
                            </div>
                          </div>
                          <div>
                            <span className="font-bold text-foreground">
                              Authors:
                            </span>
                            <div className="text-muted-foreground">
                              {paper.authors}
                            </div>
                          </div>
                          <div>
                            <span className="font-bold text-foreground">
                              Expected:
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
                            Preview
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
                    Our Approach
                  </Badge>
                  <h2 className="text-5xl font-black text-foreground mb-8 font-mono tracking-tight">
                    Research
                    <span className="block gradient-text-cherry">
                      Philosophy
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    We believe in open, collaborative, and ethical research that
                    pushes the boundaries of what's possible while maintaining
                    responsibility for societal impact.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/about")}
                    className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
                  >
                    Learn About Our Team
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
                        Open Science
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Transparent methodologies and reproducible research for
                      the global community
                    </p>
                  </Card>

                  <Card className="premium-card p-6 border-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-black text-foreground font-mono">
                        Global Impact
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Research that addresses real-world challenges and benefits
                      all of humanity
                    </p>
                  </Card>

                  <Card className="premium-card p-6 border-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <Layers className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-lg font-black text-foreground font-mono">
                        Interdisciplinary
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Combining insights from multiple fields to create
                      breakthrough innovations
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
