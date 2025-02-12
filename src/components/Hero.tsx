
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8">
      <span className="inline-flex animate-fade-down items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary">
        Premium Web Development & SEO Services
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl animate-fade-up">
        Transform Your <span className="text-gradient">Online Presence</span> with Expert Solutions
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl animate-fade-up">
        We build high-converting, mobile-friendly websites that drive real business results for law firms, coaches, and small businesses.
      </p>
      <div className="flex gap-4 animate-fade-up">
        <Button size="lg" className="group">
          Get Free Consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg">
          View Our Work
        </Button>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-background/0 pointer-events-none" />
    </section>
  );
};

export default Hero;
