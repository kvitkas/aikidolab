import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import cherryBlossomImage from "@/images/ui/cherry-blossom.webp";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/aikido-labs/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/aikidolabs",
      label: "Twitter",
    },
    {
      icon: Github,
      href: "https://github.com/aikidolabs",
      label: "GitHub",
    },
  ];

  return (
    <footer className={cn("bg-foreground text-background", className)}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-18">
          <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <img
                  src={cherryBlossomImage}
                  alt="Aikido Labs cherry blossom mark"
                  className="w-full h-full object-contain cherry-blossom-spin opacity-90"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold text-background tracking-tight">
                  Aikido Labs
                </span>
                <span className="text-xs font-medium text-cherry-pink tracking-wide">
                  Undergrads doing real research, faster.
                </span>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed font-medium text-base">
              We make undergraduate research radically accessible by matching students to mentors, funding micro-grants, and guiding projects from idea to publication.
            </p>
            <div className="flex items-center space-x-3 text-background/70 font-medium text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@aikidolab.org</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Brand Snippet and Legal */}
            <div className="text-background/70 font-medium space-y-2 text-center lg:text-left">
              <p>Aikido Labs — Undergrads doing real research, faster.</p>
              <p>Questions? hello@aikidolab.org</p>
              <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
                <span>© {currentYear} Aikido Labs</span>
              </div>
            </div>

            {/* Social Links & Back to Top */}
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 rounded-xl bg-background/10 hover:bg-cherry-pink flex items-center justify-center text-background/70 hover:text-white transition-all duration-300 hover:-translate-y-1"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  );
                })}
              </div>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="w-12 h-12 rounded-xl bg-background/10 hover:bg-cherry-pink text-background/70 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Accent */}
        <div className="h-1 bg-gradient-cherry" />
      </div>
    </footer>
  );
}
