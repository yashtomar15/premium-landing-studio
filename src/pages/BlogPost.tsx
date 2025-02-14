
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2024",
    content: `
      <p>The web design landscape is constantly evolving, and staying ahead of the curve is crucial for creating modern, engaging websites. In this comprehensive guide, we'll explore the top 10 web design trends that are shaping the digital world in 2024.</p>
      
      <h2>1. Glassmorphism and Blur Effects</h2>
      <p>Glassmorphism continues to dominate modern web design, creating depth and visual interest through translucent, blurred elements that mimic frosted glass. This trend adds sophistication while maintaining readability and user experience.</p>
      
      <h2>2. Dark Mode Optimization</h2>
      <p>With users increasingly preferring dark mode interfaces, designing with both light and dark modes in mind has become essential. This trend not only enhances accessibility but also reduces eye strain during nighttime viewing.</p>
      
      <h2>3. Micro-interactions</h2>
      <p>Small, purposeful animations that respond to user actions are becoming more prevalent. These subtle interactions provide immediate feedback and create a more engaging user experience.</p>
    `,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Design",
    author: {
      name: "Sarah Johnson",
      role: "Senior UI/UX Designer",
      avatar: "/placeholder.svg"
    }
  },
  // Add more blog posts here
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 px-4">
        <article className="container max-w-3xl mx-auto">
          <Link 
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
            </div>

            <div className="aspect-[2/1] relative rounded-lg overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
