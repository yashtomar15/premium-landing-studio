
import { Check, ArrowRight, Rocket, Paintbrush, Code, Star } from "lucide-react";

const steps = [
  {
    icon: Star,
    title: "Discovery",
    description: "We learn about your business goals and requirements",
  },
  {
    icon: Paintbrush,
    title: "Design",
    description: "Create stunning mockups and prototypes",
  },
  {
    icon: Code,
    title: "Development",
    description: "Build your website with cutting-edge technology",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy and optimize for maximum performance",
  },
];

const Process = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="glass-card p-6 rounded-lg text-center hover-card h-full">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
