import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomCursor from "@/components/CherryBlossomCursor";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const Booking = () => {
  const consultationTypes = [
    {
      title: "Start Application",
      duration: "10–15 minutes",
      description:
        "Tell us who you are, what you want to study, and the support that would help.",
      features: [
        "Basics: name, email, major, year, GPA (optional)",
        "Experience snapshot: prior research or labs",
        "Interests, skills, and support requests",
        "Auto-save keeps your progress",
      ],
      price: "Ready when you are",
      popular: true,
    },
    {
      title: "Save and Continue Later",
      duration: "Pick up anytime",
      description:
        "Pause midway, share a note, or ask us to review before you submit.",
      features: [
        "Email reminder with your saved link",
        "Ask questions inside the application",
        "Flag sections you want help with",
        "We reply within one business day",
      ],
      price: "Email support included",
      popular: false,
    },
  ];

  const handleBooking = (consultationType: string) => {
    if (consultationType === "Start Application") {
      window.location.href = "/tos";
    } else {
      window.open(
        "mailto:hello@aikidolab.org?subject=Save my Aikido Labs application",
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CherryBlossomCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight font-mono">
              <span className="block text-foreground font-mono">Your Application</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              10–15 minutes. You can save and return. Gather the basics and we’ll match you to mentors, funding, and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Get set before you apply
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Review what you’ll need, then start now or save and keep us posted.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {consultationTypes.map((consultation, index) => (
                  <Card
                    key={index}
                    className="relative p-6 sm:p-7 h-full border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border hover:border-cherry-pink/40 rounded-2xl"
                  >
                    <div className="flex items-center mb-3">
                      <Zap className="w-6 h-6 text-cherry-pink mr-3" />
                      <h3 className="text-lg font-semibold">
                        {consultation.title}
                      </h3>
                    </div>

                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{consultation.duration}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {consultation.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {consultation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-cherry-pink mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="text-xl font-semibold text-cherry-pink mb-3">
                        {consultation.price}
                      </div>
                      <Button
                        onClick={() => handleBooking(consultation.title)}
                        className="w-full py-3 rounded-xl font-medium transition-all duration-300 premium-button text-white"
                      >
                        {consultation.title}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Application steps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">1. Basics</h3>
                <p className="text-muted-foreground text-sm">
                  Name, email, major, year, GPA (optional).
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">2. Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Share prior research, labs, or coursework and how involved you were.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">3. Interests</h3>
                <p className="text-muted-foreground text-sm">
                  Pick broad topics; we’ll help narrow once we review.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">4. Skills</h3>
                <p className="text-muted-foreground text-sm">
                  List methods or tools you can use—coding, stats, wet lab, design, anything relevant.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">5. Support</h3>
                <p className="text-muted-foreground text-sm">
                  Tell us if you need funding, mentor intros, or both.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">6. Timeline</h3>
                <p className="text-muted-foreground text-sm">
                  Share your hours per week and preferred start date.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-cherry-pink" />
                </div>
                <h3 className="text-lg font-semibold mb-1">7. Submit</h3>
                <p className="text-muted-foreground text-sm">
                  We email matches, funding decisions, and next steps within 3–5 days.
                </p>
              </div>
            </div>

            <p className="text-base text-muted-foreground mb-8">
              Have questions before you submit?
              <a
                href="mailto:hello@aikidolab.org"
                className="text-cherry-pink hover:underline ml-1"
              >
                Contact our team directly
              </a>
            </p>

            <div className="text-left space-y-5">
              <h3 className="text-xl font-semibold text-foreground">
                FAQ
              </h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    Do I need prior experience?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    No. We meet you where you are.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    How long does a project take?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Expect small wins in 4–8 weeks; deeper work can continue after that.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    Will I get paid?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We provide micro-grants for project needs; some labs also offer paid roles.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    Can I publish as an undergrad?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Yes—posters, preprints, and sometimes journals. We guide you through it.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    Time commitment?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Start with 5–8 hours per week, then scale as needed.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    Universities covered?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We support UCSD first and are expanding soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
