import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, Zap, Award } from "lucide-react";

interface ClientShowcaseProps {
  className?: string;
}

export default function ClientShowcase({ className }: ClientShowcaseProps) {
  // Realistic client placeholder names for early-stage company
  const clients = [
    "Mentor matches",
    "Micro-grants",
    "Project roadmaps",
    "Publication prep",
    "Questionnaire insights",
    "Faculty intros",
    "Idea sprints",
    "Community check-ins",
    "Poster coaching",
    "Funding tips",
    "Data support",
    "Writing squads",
  ];

  // Realistic testimonials for a new research lab
  const testimonials = [
    {
      name: "Sasha, Bioengineering major",
      title: "Matched to neuroscience mentor",
      company: "UC San Diego",
      location: "La Jolla, CA",
      quote:
        "I expected weeks of cold emails. Instead, Aikido Labs connected me with a PI, funded my reagents, and helped me scope a poster-ready project.",
      rating: 5,
      results: "Poster draft ready",
      avatar: "SB",
    },
    {
      name: "Diego, Cognitive Science",
      title: "Micro-grant recipient",
      company: "UC San Diego",
      location: "San Diego, CA",
      quote:
        "The micro-grant covered cloud credits so I could run my experiment. Weekly check-ins kept the project moving and I submitted a preprint.",
      rating: 5,
      results: "Preprint submitted",
      avatar: "DM",
    },
    {
      name: "Priya, Computer Science",
      title: "Questionnaire fast-track",
      company: "UC San Diego",
      location: "San Diego, CA",
      quote:
        "The questionnaire translated my interests into faculty intros I never knew to try. Having a clear 5-step plan took away the intimidation.",
      rating: 5,
      results: "Mentor intro scheduled",
      avatar: "PK",
    },
  ];

  // Realistic stats for a new research lab
  const stats = [
    {
      icon: Users,
      value: "1:1",
      label: "Mentor matches",
      color: "text-cherry-pink",
      bg: "bg-cherry-pink/10",
    },
    {
      icon: TrendingUp,
      value: "4–8 weeks",
      label: "Project timeline",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Zap,
      value: "$100–$1,000",
      label: "Micro-grants",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Award,
      value: "Posters & preprints",
      label: "Publishing support",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section className={cn("py-16 lg:py-32 bg-background", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with improved mobile spacing */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cherry-pink/10 border border-cherry-pink/20 text-cherry-pink text-sm font-bold mb-6 lg:mb-8 font-mono tracking-wide">
            <Award className="mr-2 w-4 h-4" />
            Students who build get results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-6 lg:mb-8 font-mono tracking-tighter">
            Your curiosity plus our
            <span className="block gradient-text-cherry">research playbook</span>
            <span className="block text-foreground">gets you moving fast</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-aikido-gray leading-relaxed font-medium px-4">
            Join a cohort of builders who scope ideas, gather data, and share
            results without getting lost in busywork.
          </p>
        </div>

        {/* Client Logos Ticker with improved mobile visibility */}
        <div className="mb-16 lg:mb-20">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex space-x-8 lg:space-x-16 animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-12 lg:h-16 w-32 lg:w-40 text-aikido-gray font-black text-lg lg:text-xl opacity-60 hover:opacity-100 transition-opacity duration-300 font-mono tracking-wide"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid with improved mobile layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16 lg:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="premium-card p-4 lg:p-8 text-center border-0"
              >
                <div
                  className={cn(
                    "w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6",
                    stat.bg,
                  )}
                >
                  <Icon className={cn("w-6 h-6 lg:w-8 lg:h-8", stat.color)} />
                </div>
                <div className="text-2xl lg:text-4xl font-black text-foreground mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm font-bold text-aikido-gray font-mono tracking-wide uppercase">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonials with improved mobile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="premium-card p-6 lg:p-8 border-0 group"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 lg:mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 lg:w-5 lg:h-5 fill-cherry-pink text-cherry-pink"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6 lg:mb-8">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 lg:w-8 lg:h-8 text-cherry-pink/20" />
                <p className="text-aikido-gray leading-relaxed font-medium text-base lg:text-lg pl-4 lg:pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Results Badge */}
              <div className="inline-flex items-center px-3 lg:px-4 py-2 rounded-full bg-cherry-pink/10 text-cherry-pink text-xs lg:text-sm font-bold mb-4 lg:mb-6 font-mono">
                <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                {testimonial.results}
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-cherry rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold font-mono text-xs lg:text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-black text-foreground font-mono tracking-tight text-sm lg:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs lg:text-sm font-bold text-cherry-pink">
                    {testimonial.title}, {testimonial.company}
                  </div>
                  <div className="text-xs text-aikido-gray font-medium">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA with improved mobile spacing */}
        <div className="text-center mt-16 lg:mt-20 px-4">
          <Card className="premium-card p-8 lg:p-12 max-w-4xl mx-auto border-0">
            <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-4 font-mono tracking-tight">
              Join the Aikido Labs cohort
            </h3>
            <p className="text-base lg:text-lg text-aikido-gray mb-6 lg:mb-8 font-medium">
              Build your project alongside undergrads who are matching with mentors, earning micro-grants, and sharing real results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-black text-cherry-pink font-mono">
                  Weekly
                </div>
                <div className="text-xs lg:text-sm font-bold text-aikido-gray font-mono tracking-wide uppercase">
                  Check-ins
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-black text-cherry-pink font-mono">
                  3–5 days
                </div>
                <div className="text-xs lg:text-sm font-bold text-aikido-gray font-mono tracking-wide uppercase">
                  Mentor matches
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-black text-cherry-pink font-mono">
                  $100–$1,000
                </div>
                <div className="text-xs lg:text-sm font-bold text-aikido-gray font-mono tracking-wide uppercase">
                  Micro-grants
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
