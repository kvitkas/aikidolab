import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Sun, Menu, X, Flower } from "lucide-react";
import { cn } from "@/lib/utils";
import cherryBlossomImage from "@/images/ui/cherry-blossom.webp";

interface NavigationProps {
  className?: string;
  onCherryBlossomToggle?: (enabled: boolean) => void;
  cherryBlossomEnabled?: boolean;
}

export default function Navigation({
  className,
  onCherryBlossomToggle,
  cherryBlossomEnabled = true,
}: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect current theme
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  // Navigation handler for smooth scrolling and page navigation
  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === "/" && sectionId && path === "/") {
      // On homepage, scroll to section (for Process button)
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (path === "/" && sectionId) {
      // Navigate to homepage first, then scroll to section (for Process from other pages)
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // Navigate to different page and scroll to top
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  // Home navigation with scroll to top
  const handleHomeNavigation = () => {
    navigate("/");
    // Scroll to top when going home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Navigation menu items
  const navItems = [
    { label: "Home", path: "/", sectionId: undefined },
    { label: "Research", path: "/research", sectionId: "research" },
    { label: "Process", path: "/", sectionId: "process" },
    { label: "About", path: "/about", sectionId: "about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-xl"
          : "bg-transparent",
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with Cherry Blossom - Improved mobile layout */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <button
              onClick={handleHomeNavigation}
              className="flex items-center space-x-2 lg:space-x-3 group"
            >
              {/* Cherry Blossom Logo */}
              <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                <img
                  src={cherryBlossomImage}
                  alt="Aikido Labs Cherry Blossom Logo"
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:cherry-blossom-gentle-spin transition-all duration-300"
                />
                <div className="absolute inset-0 opacity-30 blur-sm group-hover:cherry-blossom-gentle-spin">
                  <img
                    src={cherryBlossomImage}
                    alt="Aikido Labs Logo Glow Effect"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Company Name - Responsive text sizes */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-black text-foreground group-hover:gradient-text-cherry transition-all duration-300 font-mono tracking-tight">
                  Aikido Labs
                </span>
                <span className="text-xs font-medium text-cherry-pink tracking-wider uppercase">
                  AI Research Lab
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-all duration-300 relative group font-mono tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-cherry transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action Buttons - Responsive layout */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Book Consultation Button - Hidden on small screens, visible on sm+ */}
            <Button
              onClick={() => {
                navigate("/booking");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
              className="hidden sm:inline-flex premium-button text-white px-4 lg:px-8 py-2 lg:py-3 rounded-xl font-semibold text-sm tracking-wide relative z-10 font-mono"
            >
              <span className="relative z-10">Book Consult</span>
            </Button>

            {/* Cherry Blossom Toggle Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onCherryBlossomToggle?.(!cherryBlossomEnabled)}
                  className={cn(
                    "text-foreground transition-colors duration-300",
                    cherryBlossomEnabled
                      ? "hover:text-cherry-pink hover:bg-cherry-pink/10 text-cherry-pink"
                      : "hover:text-muted-foreground hover:bg-muted/10 text-muted-foreground",
                  )}
                  aria-label={
                    cherryBlossomEnabled
                      ? "Disable cherry blossoms"
                      : "Enable cherry blossoms"
                  }
                >
                  <Flower className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {cherryBlossomEnabled ? "Disable" : "Enable"} cherry blossoms
                </p>
              </TooltipContent>
            </Tooltip>

            {/* Theme Toggle Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-foreground hover:text-cherry-pink transition-colors duration-300 hover:bg-cherry-pink/10"
                  aria-label={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Switch to {isDark ? "light" : "dark"} mode</p>
              </TooltipContent>
            </Tooltip>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-foreground hover:text-cherry-pink transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Improved styling and spacing */}
      {isMobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-background/95 border-t border-border/50">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  className="text-left text-base font-semibold text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 font-mono"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Book Button */}
              <Button
                onClick={() => {
                  navigate("/booking");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                  setIsMobileMenuOpen(false);
                }}
                className="sm:hidden premium-button text-white w-full mt-4 py-3 font-semibold relative z-10 font-mono"
              >
                <span className="relative z-10">
                  Book Research Consultation
                </span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
