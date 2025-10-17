import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
  Zap,
  Brain,
} from "lucide-react";

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update Email for "Send Message" button
    const emailSubject = encodeURIComponent(
      `Contact from ${formData.name}`,
    );
    const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
School or program: ${formData.company}
Support needed: ${formData.projectType}
Timeline or funding notes: ${formData.budget}
Message: ${formData.message}
    `);
    window.open(
      `mailto:hello@aikidolab.org?subject=${emailSubject}&body=${emailBody}`,
    );
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Apply for Research",
      description: "Submit the application to unlock mentor matches and funding.",
      action: "Apply Now",
      highlight: true,
      feature: "Primary CTA",
    },
    {
      icon: Mail,
      title: "Email Our Team",
      description: "hello@aikidolab.org",
      action: "Email Us",
      highlight: false,
      feature: "Replies in 1 business day",
    },
  ];

  return (
    <section
      id="contact"
      className={cn("py-16 lg:py-32 bg-muted/30", className)}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cherry-pink/10 border border-cherry-pink/20 text-cherry-pink text-sm font-bold mb-8 font-mono tracking-wide">
            <Sparkles className="w-4 h-4 mr-2" />
            Need a nudge to start?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-8 font-mono tracking-tighter">
            Let’s map your
            <span className="block gradient-text-cherry">research path</span>
          </h2>
          <p className="text-xl lg:text-2xl text-aikido-gray leading-relaxed font-medium">
            Reach out if you want feedback on your idea, need a mentor intro, or have a data question. We’ll point you to the right next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-foreground mb-6 font-mono tracking-tight">
                Get in touch
              </h3>
              <p className="text-aikido-gray mb-8 leading-relaxed font-medium text-lg">
                Pick what you need right now. We’ll meet you where you are—brand new or ready to publish.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className={cn(
                      "group p-8 cursor-pointer transition-all duration-500 border-0",
                      method.highlight
                        ? "premium-card bg-gradient-cherry text-white"
                        : "premium-card",
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-6">
                        <div
                          className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center",
                            method.highlight
                              ? "bg-white/20"
                              : "bg-cherry-pink/10",
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-8 h-8",
                              method.highlight
                                ? "text-white"
                                : "text-cherry-pink",
                            )}
                          />
                        </div>
                        <div className="flex-1">
                          <h4
                            className={cn(
                              "text-xl font-black mb-2 font-mono tracking-tight",
                              method.highlight
                                ? "text-white"
                                : "text-foreground",
                            )}
                          >
                            {method.title}
                          </h4>
                          <p
                            className={cn(
                              "font-medium mb-3",
                              method.highlight
                                ? "text-white/90"
                                : "text-aikido-gray",
                            )}
                          >
                            {method.description}
                          </p>
                          <div
                            className={cn(
                              "inline-flex items-center space-x-2 text-sm font-bold font-mono tracking-wide",
                              method.highlight
                                ? "text-white/80"
                                : "text-cherry-pink",
                            )}
                          >
                            <Zap className="w-4 h-4" />
                            <span>{method.feature}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          if (method.title === "Apply for Research") {
                            window.location.href = "/booking";
                          } else if (method.title === "Email Our Team") {
                            window.open("mailto:hello@aikidolab.org");
                          }
                        }}
                        variant={method.highlight ? "secondary" : "ghost"}
                        className={cn(
                          "font-bold font-mono tracking-wide transition-all duration-300",
                          method.highlight
                            ? "bg-white text-cherry-pink hover:bg-white/90"
                            : "hover:bg-cherry-pink hover:text-white border border-cherry-pink text-cherry-pink",
                        )}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="premium-card p-8 border-0">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-cherry-pink/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-cherry-pink" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground mb-2 font-mono">
                    Quick Facts
                  </h4>
                  <div className="space-y-3 text-sm text-aikido-gray font-medium">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4" />
                      <span>hello@aikidolab.org — we reply within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4" />
                      <span>Based in San Diego, supporting undergrads everywhere</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="premium-card p-8 lg:p-12 border-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-foreground mb-2 font-mono tracking-tight">
                  Send us a note
                </h3>
                <p className="text-aikido-gray font-medium">
                  Share what you’re trying to build and we’ll respond with next steps.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="text-foreground font-bold font-mono text-sm tracking-wide"
                  >
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="First and last name"
                    required
                    className="border-border focus:border-cherry-pink h-12 font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-foreground font-bold font-mono text-sm tracking-wide"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="you@university.edu"
                    required
                    className="border-border focus:border-cherry-pink h-12 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="company"
                  className="text-foreground font-bold font-mono text-sm tracking-wide"
                >
                  School or program
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="e.g., UC San Diego, biology program"
                  className="border-border focus:border-cherry-pink h-12 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-foreground font-bold font-mono text-sm tracking-wide">
                    What support do you need?
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleInputChange("projectType", value)
                    }
                  >
                    <SelectTrigger className="border-border focus:border-cherry-pink h-12 font-medium">
                      <SelectValue placeholder="Choose support type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mentor">
                        Mentor match
                      </SelectItem>
                      <SelectItem value="microgrant">Micro-grant</SelectItem>
                      <SelectItem value="analysis">
                        Help analyzing data
                      </SelectItem>
                      <SelectItem value="publishing">
                        Publishing support
                      </SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label className="text-foreground font-bold font-mono text-sm tracking-wide">
                    Timeline or funding notes
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger className="border-border focus:border-cherry-pink h-12 font-medium">
                      <SelectValue placeholder="Share timing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">Ready to start ASAP</SelectItem>
                      <SelectItem value="semester">
                        Planning for this quarter/semester
                      </SelectItem>
                      <SelectItem value="funding">
                        Need funding details first
                      </SelectItem>
                      <SelectItem value="unsure">Still figuring it out</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label
                    htmlFor="message"
                    className="text-foreground font-bold font-mono text-sm tracking-wide"
                >
                  What should we know? *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Share your idea, experience level, and how we can help you move forward."
                  rows={5}
                  required
                  className="border-border focus:border-cherry-pink resize-none font-medium"
                />
              </div>

              <Button
                type="submit"
                className="w-full premium-button text-white py-4 text-lg font-bold transition-all duration-500 relative z-10 font-mono tracking-wide"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="relative z-10">Note sent!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <Send className="w-6 h-6" />
                    <span className="relative z-10">Send Note</span>
                  </div>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
