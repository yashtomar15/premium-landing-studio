
import { Code, Search, Smartphone, Gauge } from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    description: "Bespoke websites tailored to your unique business needs",
    icon: Code,
  },
  {
    title: "SEO Optimization",
    description: "Drive more organic traffic and improve search rankings",
    icon: Search,
  },
  {
    title: "Mobile-First Design",
    description: "Responsive websites that look great on all devices",
    icon: Smartphone,
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast websites that convert visitors into customers",
    icon: Gauge,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions designed to help your business grow online
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-background rounded-lg shadow-lg hover-card"
            >
              <service.icon className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
