import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomBackground from "@/components/CherryBlossomBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Target,
  Award,
  Users,
  Globe,
  Lightbulb,
  Heart,
  Zap,
  ArrowRight,
  MapPin,
  Calendar,
  Trophy,
  Star,
  GraduationCap,
  Microscope,
  BookOpen,
  Rocket,
  Building,
  Clock,
  TrendingUp,
  Sparkles,
  Shield,
  Layers,
} from "lucide-react";

const About = () => {
  const [cherryBlossomEnabled, setCherryBlossomEnabled] = useState(true);
  const teamMembers = [
    {
      name: "Nolan Au",
      role: "Research Team Member",
      specialization: "Neurobiology & AI",
      education: "University of California - San Diego",
      experience: "Undergraduate",
      avatar: "NA",
      bio: "Exploring the intersection of neurobiology and artificial intelligence.",
      skills: ["xxx", "xxx", "xxx"],
      focus: "TBA",
    },
    {
      name: "Alejandro J. De Leon",
      role: "Research Team Member",
      specialization: "AI Research",
      education: "University of California - San Diego",
      experience: "Undergraduate",
      avatar: "AD",
      bio: "Bringing diverse perspectives to AI research and development initiatives.",
      skills: ["xxx", "xxx", "xxx"],
      focus: "TBA",
    },
    {
      name: "Neeraj Venna",
      role: "Research Team Member",
      specialization: "Neurobiology & ML",
      education: "University of California - San Diego",
      experience: "Undergraduate",
      avatar: "NV",
      bio: "Bridging the gap between biological intelligence and artificial systems.",
      skills: ["xxx", "xxx", "xxx"],
      focus: "TBA",
    },
    {
      name: "Krish Desai",
      role: "Research Team Member",
      specialization: "Data Science & AI",
      education: "University of California - San Diego",
      experience: "Undergraduate",
      avatar: "KD",
      bio: "Applying data science methodologies to solve complex AI research challenges.",
      skills: ["xxx", "xxx", "xxx"],
      focus: "TBA",
    },
  ];

  const companyStats = [
    {
      icon: Users,
      value: "3+",
      label: "Research Team",
      description: "Dedicated researchers",
      color: "text-cherry-pink",
    },
    {
      icon: Calendar,
      value: "2025",
      label: "Founded",
      description: "Year established",
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      value: "San Diego",
      label: "Headquarters",
      description: "Research hub location",
      color: "text-green-500",
    },
    {
      icon: Target,
      value: "20+",
      label: "Hour Reduction",
      description: "Manual Labor Cut",
      color: "text-purple-500",
    },
  ];

  const milestones = [
    {
      year: "2025",
      quarter: "Q1",
      title: "Aikido Labs Founded",
      description: "Established AI research lab",
      icon: Rocket,
      status: "Completed",
    },
    {
      year: "2025",
      quarter: "Q2",
      title: "Research Framework Launch",
      description: "Deployed Research Framework",
      icon: Microscope,
      status: "In Progress",
    },
    {
      year: "2025",
      quarter: "Q3",
      title: "First Publication Target",
      description:
        "Aiming for breakthrough research publication in top-tier AI journal",
      icon: BookOpen,
      status: "Planned",
    },
    {
      year: "2025",
      quarter: "Q4",
      title: "20+ Hour Labor Reduction",
      description: "Deliver guaranteed 20+ hour manual labor reduction",
      icon: Zap,
      status: "GUARANTEED",
    },
  ];

  const coreValues = [
    {
      icon: Brain,
      title: "Research Excellence",
      description:
        "Advancing the frontiers of AI through rigorous scientific methodology and innovative thinking.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Ethical Innovation",
      description:
        "Developing AI systems that prioritize human welfare, privacy, and societal benefit.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Creating solutions that transcend boundaries and address challenges across cultures and industries.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description:
        "Translating research breakthroughs into practical solutions with unprecedented speed.",
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
      case "Target":
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
        {/* Hero Section - Split Layout */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-cherry-pink/5 to-background" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              {/* Content - 3 columns */}
              <div className="lg:col-span-3">
                <Badge className="mb-6 bg-cherry-pink/10 text-cherry-pink border-cherry-pink/20 font-mono">
                  <Building className="w-4 h-4 mr-2" />
                  Our Story
                </Badge>
                <h1 className="text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none">
                  BUILDING
                  <span className="block gradient-text-cherry">THE FUTURE</span>
                  <span className="block text-4xl lg:text-5xl text-muted-foreground mt-4">
                    of artificial intelligence
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                  Based in San Diego, we're a cutting-edge AI research lab
                  dedicated to transforming businesses through intelligent
                  automation and breakthrough research.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => (window.location.href = "/research")}
                    className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
                  >
                    <Microscope className="w-5 h-5 mr-2" />
                    Explore Research
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/booking")}
                    variant="outline"
                    className="px-8 py-4 font-bold rounded-xl border-2 font-mono"
                  >
                    Schedule Consultation
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
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our research and define our approach
                to AI innovation
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
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Passionate researchers from UC San Diego driving AI innovation
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
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in building the future of AI research
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
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
                  We're focused on advancing AI research and creating innovative
                  solutions that transform how businesses operate.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button
                    onClick={() => (window.location.href = "/booking")}
                    className="premium-button text-white px-8 py-4 text-lg font-bold rounded-xl font-mono tracking-wide"
                  >
                    <span className="relative z-10 flex items-center">
                      Schedule Consultation
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
