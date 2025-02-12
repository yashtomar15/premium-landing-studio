
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary relative"
      >
        Premium Web Development & SEO Services
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-center max-w-4xl relative"
      >
        Transform Your <span className="text-gradient">Online Presence</span> with Expert Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl relative"
      >
        We build high-converting, mobile-friendly websites that drive real business results for law firms, coaches, and small businesses.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-4 relative"
      >
        <Button size="lg" className="group">
          Get Free Consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg">
          View Our Work
        </Button>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
