import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Research: [
      { label: "Research", page: "/research" },
      { label: "Publications", page: "/research" },
      { label: "Collaborations", page: "/research" },
      { label: "Open Source", page: "/research" },
    ],
    Services: [
      { label: "Consulting", page: "/booking" },
      { label: "Book Session", page: "/booking" },
      { label: "Research Partnership", page: "/booking" },
      { label: "Contact", page: "/booking" },
    ],
    Company: [
      { label: "About", page: "/about" },
      { label: "Team", page: "/about" },
      { label: "Careers", page: "/about" },
      { label: "News", page: "/about" },
    ],
    Support: [
      { label: "Documentation", page: "/about" },
      { label: "Status", page: "/about" },
      { label: "Security", page: "/about" },
      { label: "FAQ", page: "/about" },
    ],
  };

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
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-16 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative w-12 h-12">
                  <img
                    src={cherryBlossomImage}
                    alt="Aikido Labs Cherry Blossom"
                    className="w-full h-full object-contain cherry-blossom-spin opacity-90"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-background font-mono tracking-tight">
                    Aikido Labs
                  </span>
                  <span className="text-xs font-bold text-cherry-pink tracking-widest uppercase">
                    AI Research Lab
                  </span>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-8 max-w-md font-medium text-lg">
                Advancing AI to transform businesses into smart, automated,
                intelligent organizations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-background/70 font-medium">
                  <Mail className="w-5 h-5" />
                  <span>nvenna@4ikido.com</span>
                </div>

                <div className="flex items-center space-x-4 text-background/70 font-medium">
                  <MapPin className="w-5 h-5" />
                  <span>San Diego, CA • Serving Globally</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-black text-background mb-6 text-lg font-mono tracking-tight">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => (window.location.href = link.page)}
                        className="text-background/70 hover:text-background transition-colors duration-300 font-medium hover:translate-x-1 transform transition-transform"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-6 text-background/70 font-medium">
              <span>© {currentYear} Aikido Labs. All rights reserved.</span>
              <span>•</span>
              <button
                onClick={() => (window.location.href = "/policy")}
                className="hover:text-background transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => (window.location.href = "/tos")}
                className="hover:text-background transition-colors duration-300"
              >
                Terms of Service
              </button>
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
