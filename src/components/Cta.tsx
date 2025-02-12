
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="glass-card p-12 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-indigo-600/20 animate-gradient" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Ready to Transform Your <span className="text-gradient">Online Presence?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 relative">
            Let's create a website that drives real business results and sets you apart from the competition.
          </p>
          <div className="flex gap-4 justify-center relative">
            <Button size="lg" className="group">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
