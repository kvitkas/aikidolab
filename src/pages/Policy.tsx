// Privacy Policy
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomCursor from "@/components/CherryBlossomCursor";
import { Button } from "@/components/ui/button";

const Policy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CherryBlossomCursor />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-black text-foreground font-mono tracking-tight">
                Micro-grants & faculty introductions
              </h1>
              <p className="text-xl text-muted-foreground">
                Remove the friction. Start sooner.
              </p>
              <p className="text-muted-foreground">
                We cover starter costs and send warm intros so you can focus on the science, not the logistics.
              </p>
            </div>

            <div className="space-y-8 text-left">
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Micro-Grants ($100–$1,000)
                </h2>
                <p className="text-muted-foreground">
                  Use micro-grants for software, datasets, cloud credits, or lab materials. We approve fast so you can order what you need right away.
                </p>
                <p className="text-muted-foreground">
                  We fund small, fast starts. Once you have results, you can apply for a follow-on budget.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Faculty intros
                </h2>
                <p className="text-muted-foreground">
                  Tell us your major, year, and topic interests. We send professors a concise intro email with your background and a suggested project scope.
                </p>
                <p className="text-muted-foreground">
                  You show up with context, a tiny project idea, and a clear ask. Mentors can say yes faster.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  What we need from you
                </h2>
                <p className="text-muted-foreground">
                  Share your major and year, a short statement of interest, and your availability. We handle the rest.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() =>
                  window.open("mailto:hello@aikidolab.org?subject=Micro-grant request")
                }
                className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
              >
                Request Micro-Grant
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/tos")}
                className="px-8 py-4 font-bold rounded-xl border-2 font-mono"
              >
                Get Matched to a Professor
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policy;
