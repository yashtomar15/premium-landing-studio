
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "10+ Years of Industry Experience",
  "Award-winning Design Team",
  "Results-driven Development Process",
  "Expert SEO & Performance Optimization",
];

const About = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting <span className="text-gradient">Digital Excellence</span> for Forward-Thinking Businesses
              </h2>
              <p className="text-muted-foreground mb-8">
                We're more than just a web development agency – we're your strategic partner in digital success. With a decade of experience crafting high-performance websites and implementing cutting-edge SEO strategies, we help businesses like yours stand out in the digital landscape.
              </p>
              <ul className="space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-gradient mb-2">150+</h3>
                  <p className="text-sm text-muted-foreground">Active Clients</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-gradient mb-2">95%</h3>
                  <p className="text-sm text-muted-foreground">Client Retention</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-gradient mb-2">24/7</h3>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 blur-3xl bg-primary/10 rounded-lg transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
