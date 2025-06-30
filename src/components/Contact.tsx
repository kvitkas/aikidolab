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
  Clock,
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
      `Contact from ${formData.name} - ${formData.company}`,
    );
    const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Message: ${formData.message}
    `);
    window.open(
      `mailto:nvenna@4ikido.com?subject=${emailSubject}&body=${emailBody}`,
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
      title: "Schedule Research Consult",
      description: "Book a 30-minute AI strategy session",
      action: "Schedule Now",
      highlight: true,
      feature: "Free AI Assessment",
    },
    {
      icon: Mail,
      title: "Email Our Team",
      description: "nvenna@4ikido.com",
      action: "Send Email",
      highlight: false,
      feature: "24h Response",
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
            Ready to scale with AI?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-8 font-mono tracking-tighter">
            Let's build the
            <span className="block gradient-text-cherry">FUTURE TOGETHER</span>
          </h2>
          <p className="text-xl lg:text-2xl text-aikido-gray leading-relaxed font-medium">
            Schedule a consultation with our AI research team and discover how
            Aikido Labs can transform your business with cutting-edge automation
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
                Choose the best way to connect with our research team. We're
                here to help you leverage AI for unprecedented business growth.
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
                          if (method.title === "Schedule Research Consult") {
                            window.location.href = "/booking";
                          } else if (method.title === "Email Our Team") {
                            window.open("mailto:nvenna@4ikido.com");
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
                    Research Lab Location
                  </h4>
                  <div className="space-y-3 text-sm text-aikido-gray font-medium">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4" />
                      <span>Response time: Within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4" />
                      <span>San Diego, CA • Serving globally</span>
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
                  Send us a message
                </h3>
                <p className="text-aikido-gray font-medium">
                  Tell us about your AI transformation goals
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="text-foreground font-bold font-mono text-sm tracking-wide"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
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
                    placeholder="john@company.com"
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
                  Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company Name"
                  className="border-border focus:border-cherry-pink h-12 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-foreground font-bold font-mono text-sm tracking-wide">
                    Project Type
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleInputChange("projectType", value)
                    }
                  >
                    <SelectTrigger className="border-border focus:border-cherry-pink h-12 font-medium">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automation">
                        Business Automation
                      </SelectItem>
                      <SelectItem value="research">AI Research</SelectItem>
                      <SelectItem value="consulting">AI Consulting</SelectItem>
                      <SelectItem value="custom">Custom Development</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label className="text-foreground font-bold font-mono text-sm tracking-wide">
                    Budget Range
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger className="border-border focus:border-cherry-pink h-12 font-medium">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="discuss">Let's discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="message"
                  className="text-foreground font-bold font-mono text-sm tracking-wide"
                >
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your AI transformation goals, current challenges, and how we can help..."
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
                    <span className="relative z-10">Message Sent!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <Send className="w-6 h-6" />
                    <span className="relative z-10">Send Message</span>
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
