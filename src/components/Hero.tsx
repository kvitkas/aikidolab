import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      id="hero"
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-black text-white pt-24",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-95" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-6 left-1/4 h-3 w-3 rounded-full bg-cherry-pink/90 blur-[1px] animate-float" />
        <div className="absolute top-12 right-1/5 h-4 w-4 rounded-full bg-cherry-pink/70 blur-[1px] animate-float" />
        <div className="absolute bottom-10 right-12 h-3 w-3 rounded-full bg-cherry-pink/80 blur-[1px] animate-float" />
      </div>
      <div className="relative z-10 w-full px-6 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.2em] uppercase text-white">
                AIKIDO
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.2em] uppercase text-cherry-pink">
                LABS
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 sm:w-24 bg-cherry-pink" />
              <span className="text-[0.65rem] sm:text-xs md:text-sm tracking-[0.6em] uppercase text-cherry-pink font-semibold">
                AI RESEARCH LAB
              </span>
              <div className="h-px w-20 sm:w-24 bg-cherry-pink" />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium tracking-wide">
              Undergrads doing real research, faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
