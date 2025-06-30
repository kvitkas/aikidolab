import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="relative">
                <h1 className="text-9xl lg:text-[12rem] font-bold text-muted/20 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-cherry rounded-2xl flex items-center justify-center animate-float">
                    <span className="text-white text-3xl font-bold">AL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Looks like you've ventured into uncharted AI territory. The page
              you're looking for doesn't exist, but our innovation continues.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                className="premium-button text-white px-6 py-3 inline-flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                className="px-6 py-3 inline-flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </Button>
            </div>

            {/* Help Text */}
            <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Need assistance?
              </h3>
              <p className="text-sm text-muted-foreground">
                If you believe this is an error, please contact our support team
                or explore our AI solutions on the homepage.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
