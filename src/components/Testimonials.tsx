
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Law Firm Owner",
    content: "The team delivered an exceptional website that has transformed our online presence. Our leads have increased by 200% since launch.",
    image: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Coach",
    content: "Working with this agency was a game-changer. They understood our vision and created a platform that perfectly serves our clients.",
    image: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "E-commerce Owner",
    content: "Our online store's conversion rate has doubled since the redesign. The attention to detail and focus on user experience is outstanding.",
    image: "/placeholder.svg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
