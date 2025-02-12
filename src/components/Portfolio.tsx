
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Law Firm Website",
    description: "Modern website with 200% increase in leads",
    image: "/placeholder.svg",
    tags: ["Web Design", "SEO", "Lead Generation"],
  },
  {
    title: "Coach Platform",
    description: "Online coaching platform with booking system",
    image: "/placeholder.svg",
    tags: ["Web App", "Booking System", "Mobile-First"],
  },
  {
    title: "E-commerce Store",
    description: "High-converting store with 150% ROI",
    image: "/placeholder.svg",
    tags: ["E-commerce", "SEO", "Performance"],
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses through innovative web solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-lg overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
