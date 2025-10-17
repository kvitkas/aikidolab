import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomBackground from "@/components/CherryBlossomBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building,
  GraduationCap,
  Heart,
  Lightbulb,
  Microscope,
  BookOpen,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const [cherryBlossomEnabled, setCherryBlossomEnabled] = useState(true);
  const teamMembers = [
    {
      name: "Sasha Nguyen",
      role: "Bioengineering major",
      specialization: "Neuroscience wet lab",
      education: "UC San Diego",
      experience: "Undergraduate",
      avatar: "SN",
      bio: "Matched with a neurodegeneration lab, funded her first reagents, and is drafting a poster within eight weeks.",
      skills: ["wet lab", "analysis", "presentation"],
      focus: "Neurodegeneration",
    },
    {
      name: "Diego Morales",
      role: "Cognitive science major",
      specialization: "Human-computer interaction",
      education: "UC San Diego",
      experience: "Undergraduate",
      avatar: "DM",
      bio: "Used our questionnaire to scope an experiment, earned cloud credits, and submitted a preprint with his mentor.",
      skills: ["python", "statistics", "UX studies"],
      focus: "HCI",
    },
    {
      name: "Priya Kapoor",
      role: "Computer science major",
      specialization: "AI for health",
      education: "UC San Diego",
      experience: "Undergraduate",
      avatar: "PK",
      bio: "Joined Aikido Labs to turn a class project into a real study with faculty support and a micro-grant for datasets.",
      skills: ["machine learning", "data wrangling", "writing"],
      focus: "ML for healthcare",
    },
  ];

  const companyStats = [
    {
      icon: Users,
      value: "Matchmaking",
      label: "Faculty introductions",
      description:
        "We connect you with mentors based on your major, year, and interests. No cold emails required.",
      color: "text-cherry-pink",
    },
    {
      icon: Zap,
      value: "Micro-grants",
      label: "$100–$1,000 support",
      description:
        "Cover software, datasets, consumables, or cloud credits so you can start the moment you’re matched.",
      color: "text-blue-500",
    },
    {
      icon: Lightbulb,
      value: "Guidance",
      label: "Idea → execution",
      description:
        "Weekly checklists take you from topic selection to methods, analysis, and clear next steps.",
      color: "text-purple-500",
    },
    {
      icon: BookOpen,
      value: "Publishing",
      label: "Posters & preprints",
      description:
        "Templates, editing support, and submission nudges to help you share your results.",
      color: "text-green-500",
    },
    {
      icon: Heart,
      value: "Community",
      label: "Builder cohort",
      description:
        "Join peers who swap feedback, co-work, and celebrate small wins every week.",
      color: "text-orange-500",
    },
  ];

  const milestones = [
    {
      year: "2025",
      quarter: "Q1",
      title: "Aikido Labs Founded",
      description: "Started by undergrads to make research accessible at UCSD.",
      icon: Rocket,
      status: "Completed",
    },
    {
      year: "2025",
      quarter: "Q2",
      title: "First mentor cohorts",
      description: "Launched structured mentor matching plus the student questionnaire.",
      icon: Microscope,
      status: "In Progress",
    },
    {
      year: "2025",
      quarter: "Q3",
      title: "Micro-grant expansion",
      description:
        "Rolling micro-grants fund starter costs so every student can begin experiments fast.",
      icon: BookOpen,
      status: "Planned",
    },
    {
      year: "2025",
      quarter: "Q4",
      title: "Publish-ready pipeline",
      description:
        "Posters, preprints, and submission support baked into every cohort’s checklist.",
      icon: Zap,
      status: "Planned",
    },
  ];

  const coreValues = [
    {
      icon: Brain,
      title: "Student-first guidance",
      description:
        "Clear, upbeat check-ins that demystify research and keep momentum high.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Belonging",
      description:
        "You join a welcoming cohort that shares feedback, resources, and encouragement.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Access for everyone",
      description:
        "We remove gatekeeping with warm introductions, micro-grants, and quick answers.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Ship small wins",
      description:
        "Projects move in 4–8 week cycles so you can show progress and build confidence.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Planned":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
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
        {/* Hero Section - Split Layout */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-cherry-pink/5 to-background" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              {/* Content - 3 columns */}
              <div className="lg:col-span-3">
                <Badge className="mb-6 bg-cherry-pink/10 text-cherry-pink border-cherry-pink/20 font-mono">
                  <Building className="w-4 h-4 mr-2" />
                  What We Do
                </Badge>
                <h1 className="text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none">
                  What we do
                  <span className="block gradient-text-cherry">
                    We help undergrads do real research—fast.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                  We make undergraduate research radically accessible by matching students to mentors, funding micro-grants, and guiding them from idea → execution → publication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => (window.location.href = "/booking")}
                    className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
                  >
                    <Microscope className="w-5 h-5 mr-2" />
                    Apply for Research
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/policy")}
                    variant="outline"
                    className="px-8 py-4 font-bold rounded-xl border-2 font-mono"
                  >
                    Get Matched to a Professor
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Stats Grid - 2 columns */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                  {companyStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <Card
                        key={index}
                        className="p-6 premium-card border-0 text-center relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cherry-pink/5 to-transparent" />
                        <Icon
                          className={`w-8 h-8 ${stat.color} mx-auto mb-4`}
                        />
                        <div className="text-3xl font-black text-foreground font-mono mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm font-bold text-foreground mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.description}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values - Unique Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-foreground mb-6 font-mono tracking-tight">
                How we make research accessible
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple structure, human mentorship, and a welcoming community keep every project moving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="premium-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500"
                  >
                    <div className="p-8 relative">
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${value.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}
                      />
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-foreground mb-4 font-mono tracking-tight">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Team - Card Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-foreground mb-6 font-mono tracking-tight">
                Student stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Undergrads who joined Aikido Labs and shipped real projects with mentor support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="premium-card border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-cherry rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-black text-2xl font-mono">
                          {member.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-foreground mb-2 font-mono tracking-tight">
                          {member.name}
                        </h3>
                        <div className="text-cherry-pink font-bold mb-2">
                          {member.role}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{member.education}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline - Horizontal Timeline */}
        <section className="py-20 bg-gradient-to-r from-muted/50 to-cherry-pink/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-foreground mb-6 font-mono tracking-tight">
                Our builder timeline
              </h2>
              <p className="text-xl text-muted-foreground">
                Milestones that keep undergrads moving from idea to publication.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <Card
                      key={index}
                      className="premium-card border-0 relative overflow-hidden"
                    >
                      <div className="p-6">
                        {/* Quarter badge */}
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            className={`${getStatusColor(milestone.status)} text-xs font-bold`}
                          >
                            {milestone.status}
                          </Badge>
                          <div className="text-xs text-muted-foreground font-mono">
                            {milestone.quarter}
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-cherry rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="text-2xl font-black text-cherry-pink font-mono mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-3 font-mono tracking-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Simplified */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <Card className="premium-card p-12 max-w-4xl mx-auto text-center border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cherry-pink/5 via-transparent to-blue-500/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-cherry-pink/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Sparkles className="w-8 h-8 text-cherry-pink" />
                </div>
                <h3 className="text-4xl font-black text-foreground mb-6 font-mono tracking-tight">
                  Ready to start your research project?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
                  Apply for the next Aikido Labs cohort, get matched to mentors, and launch a project you can publish.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button
                    onClick={() => (window.location.href = "/booking")}
                    className="premium-button text-white px-8 py-4 text-lg font-bold rounded-xl font-mono tracking-wide"
                  >
                    <span className="relative z-10 flex items-center">
                      Apply for Research
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
