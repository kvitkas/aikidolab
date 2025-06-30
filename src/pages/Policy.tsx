// Privacy Policy
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomCursor from "@/components/CherryBlossomCursor";

const Policy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CherryBlossomCursor />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-black text-foreground mb-8 font-mono tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-6xl text-muted-foreground font-mono">Soon...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policy;
