
import { motion } from "framer-motion";

const stats = [
  { label: "Websites Built", value: "500+" },
  { label: "Client Satisfaction", value: "95%" },
  { label: "Traffic Growth", value: "300%" },
  { label: "Awards Won", value: "50+" },
];

const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-lg text-center hover-card"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gradient animate-text-shimmer">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
