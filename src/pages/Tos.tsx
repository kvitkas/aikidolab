// Terms of Service (TOS)
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CherryBlossomCursor from "@/components/CherryBlossomCursor";
import { Button } from "@/components/ui/button";

const Tos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CherryBlossomCursor />
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-black text-foreground font-mono tracking-tight">
                Tell us about you
              </h1>
              <p className="text-xl text-muted-foreground">
                We’ll use this to suggest topics and professors.
              </p>
              <p className="text-muted-foreground">
                We start broad, then get specific. If you’re brand new, perfect. If you already have data, we’ll tailor the path and help you publish.
              </p>
            </div>

            <div className="space-y-8 text-left">
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Basics
                </h2>
                <p className="text-muted-foreground">
                  Major, year, school, and your contact info help us align you with the right mentors.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Experience gauge
                </h2>
                <p className="text-muted-foreground">
                  Choose the option that fits you best:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>I’m new—never done research</li>
                  <li>I’ve helped on a project</li>
                  <li>I’ve led a project / have data</li>
                  <li>I’m ready to publish</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Broad topics
                </h2>
                <p className="text-muted-foreground">
                  Pick what excites you. We recommend choosing one to five:
                </p>
                <p className="text-muted-foreground">
                  AI/ML, Neuroscience, Bioinformatics, Robotics, Human–Computer Interaction, Cognitive Science, Psychology, Public Health, Genomics, Systems Biology, Materials, Climate/Environmental.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Niche follow-ups
                </h2>
                <p className="text-muted-foreground">
                  We unlock extra chips based on what you pick. Examples:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>AI/ML → ML for healthcare, Reinforcement learning, Computer vision, NLP, Causal inference, Edge ML</li>
                  <li>Neuroscience → Two-photon imaging, Calcium imaging analysis, BCI, Neurodegeneration, Behavior analysis</li>
                  <li>Bioinformatics/Genomics → Variant calling, Gene expression, Single-cell, Genomic language models (gLMs), CRISPR screens</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Optional project idea
                </h2>
                <p className="text-muted-foreground">
                  Have a seed idea? Drop a sentence or two. Not required—we can help you shape one.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-black text-foreground font-mono tracking-tight">
                  Match preview
                </h2>
                <p className="text-muted-foreground">
                  Once you choose topics, we’ll show professors with similar work so you can favorite the best fits.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => (window.location.href = "/about")}
                className="premium-button text-white px-8 py-4 font-bold rounded-xl font-mono"
              >
                See Suggested Topics
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/policy")}
                className="px-8 py-4 font-bold rounded-xl border-2 font-mono"
              >
                See Matching Professors
              </Button>
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/booking")}
                className="px-8 py-4 font-bold rounded-xl font-mono"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tos;
