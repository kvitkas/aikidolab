import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Flower, Menu, Moon, Sun, X } from "lucide-react";
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
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === "/" && sectionId && path === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (path === "/" && sectionId) {
      navigate(path);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 250);
    } else {
      navigate(path);
      setTimeout(
        () => window.scrollTo({ top: 0, behavior: "smooth" }),
        100,
      );
    }

    setIsMobileMenuOpen(false);
  };

  const handleHomeNavigation = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/", sectionId: undefined },
    { label: "Research", path: "/research", sectionId: undefined },
    { label: "Process", path: "/", sectionId: "process" },
    { label: "About", path: "/about", sectionId: undefined },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/95 shadow-lg border-b border-white/10"
          : "bg-black/80 border-b border-white/10",
        className,
      )}
    >
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={handleHomeNavigation}
            className="flex items-center gap-3 rounded-full px-3 py-1.5 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={cherryBlossomImage}
              alt="Aikido Labs logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Aikido Labs
            </span>
          </button>
        </div>

        <nav className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 items-center justify-center md:flex">
          <div className="pointer-events-auto flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="group relative font-mono text-sm font-semibold uppercase tracking-[0.25em] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cherry-pink transition-all duration-500 ease-out group-hover:w-full" />
              </button>
            ))}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-4">
          <Button
            onClick={() => {
              navigate("/booking");
              setTimeout(
                () => window.scrollTo({ top: 0, behavior: "smooth" }),
                100,
              );
            }}
            className="relative z-10 hidden rounded-full px-5 py-2 font-mono text-sm font-semibold tracking-wide text-white premium-button sm:inline-flex"
          >
            <span className="relative z-10">Book Consult</span>
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onCherryBlossomToggle?.(!cherryBlossomEnabled)}
                className={cn(
                  "text-white/70 transition-colors duration-300 hover:bg-cherry-pink/10 hover:text-cherry-pink",
                  cherryBlossomEnabled && "text-cherry-pink",
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
              <p>{cherryBlossomEnabled ? "Disable" : "Enable"} blossoms</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-white/70 transition-colors duration-300 hover:bg-cherry-pink/10 hover:text-cherry-pink"
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

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-white/70 transition-colors duration-300 hover:text-cherry-pink md:hidden"
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

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </button>
              ))}

              <Button
                onClick={() => {
                  navigate("/booking");
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: "smooth" }),
                    100,
                  );
                  setIsMobileMenuOpen(false);
                }}
                className="premium-button relative z-10 mt-4 w-full py-3 font-mono font-semibold text-white"
              >
                <span className="relative z-10">Book Consult</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
