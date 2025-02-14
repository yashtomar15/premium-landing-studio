
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2024",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape and learn how to implement them in your projects.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "The Ultimate Guide to SEO Optimization",
    excerpt: "Learn the fundamental strategies and techniques to improve your website's search engine rankings and drive organic traffic.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    id: 3,
    title: "Maximizing Website Performance",
    excerpt: "Explore proven techniques to optimize your website's performance, improve load times, and enhance user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Development",
  },
  // Add more blog posts here
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Our <span className="text-gradient">Blog</span>
            </motion.h1>

            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-lg overflow-hidden hover-card"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="aspect-[2/1] relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
