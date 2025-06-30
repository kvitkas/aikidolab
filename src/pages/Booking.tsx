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
} from "lucide-react";

const Booking = () => {
  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      duration: "30 minutes",
      description:
        "Comprehensive AI roadmap and implementation strategy for your business",
      features: [
        "AI readiness assessment",
        "Custom AI strategy roadmap",
        "Technology recommendations",
        "ROI projections and timeline",
      ],
      price: "Free Discovery Call",
      popular: true,
    },
    {
      title: "Technical Deep Dive",
      duration: "60 minutes",
      description:
        "In-depth technical consultation for complex AI implementation challenges",
      features: [
        "Technical architecture review",
        "Data infrastructure assessment",
        "AI model recommendations",
        "Integration planning",
      ],
      price: "Contact for Pricing",
      popular: false,
    },
  ];

  const handleBooking = (consultationType: string) => {
    // This would integrate with a booking system like Calendly, Acuity, etc.
    window.open("https://cal.com/nvenna/15min", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CherryBlossomCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              <span className="block text-foreground">Book Your</span>
              <span className="block gradient-text-cherry">
                Research Consultation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Schedule a personalized consultation with our AI research experts
              to explore how cutting-edge artificial intelligence can transform
              your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your Consultation Type
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the consultation that best fits your needs and objectives
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {consultationTypes.map((consultation, index) => (
                  <Card
                    key={index}
                    className="relative p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 border-border hover:border-cherry-pink/50"
                  >
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-cherry-pink mr-3" />
                      <h3 className="text-xl font-bold">
                        {consultation.title}
                      </h3>
                    </div>

                    <div className="flex items-center text-muted-foreground mb-4">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{consultation.duration}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {consultation.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {consultation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-cherry-pink mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="text-2xl font-bold text-cherry-pink mb-4">
                        {consultation.price}
                      </div>
                      <Button
                        onClick={() => handleBooking(consultation.title)}
                        className="w-full py-3 rounded-xl font-semibold transition-all duration-300 premium-button text-white"
                      >
                        Book Consultation
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              What Happens Next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-cherry-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Book</h3>
                <p className="text-muted-foreground text-sm">
                  Select your preferred consultation time
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cherry-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Confirm</h3>
                <p className="text-muted-foreground text-sm">
                  Receive booking confirmation and meeting details
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cherry-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Meet</h3>
                <p className="text-muted-foreground text-sm">
                  Join the video call at scheduled time
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-cherry-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4. Discuss</h3>
                <p className="text-muted-foreground text-sm">
                  Share your goals and explore solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cherry-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cherry-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5. Follow-up</h3>
                <p className="text-muted-foreground text-sm">
                  Get summary notes and next steps
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Have questions before booking?
              <a
                href="mailto:nvenna@4ikido.com"
                className="text-cherry-pink hover:underline ml-1"
              >
                Contact our team directly
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
