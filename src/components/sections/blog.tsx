'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing: Trends to Watch in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay ahead.",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "AI Marketing",
    image: "https://images.unsplash.com/photo-1677442135722-5f11e06a4e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Alex Morgan"
  },
  {
    id: 2,
    title: "Mastering Social Media Algorithms: A Complete Guide",
    excerpt: "Learn how to optimize your content for different social media platforms and maximize your organic reach.",
    date: "May 8, 2024",
    readTime: "6 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Jamie Smith"
  },
  {
    id: 3,
    title: "The Psychology Behind Conversion Optimization",
    excerpt: "Understanding how users think can dramatically improve your conversion rates. Here's the science behind effective UX.",
    date: "May 1, 2024",
    readTime: "10 min read",
    category: "Conversion",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Taylor Johnson"
  },
  {
    id: 4,
    title: "SEO Best Practices for E-commerce in 2024",
    excerpt: "Maximize your online store's visibility with these proven SEO strategies specifically designed for e-commerce businesses.",
    date: "April 25, 2024",
    readTime: "7 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Casey Brown"
  },
  {
    id: 5,
    title: "The Art of Influencer Marketing: Building Authentic Partnerships",
    excerpt: "How to identify the right influencers and create partnerships that drive real business results.",
    date: "April 18, 2024",
    readTime: "5 min read",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Riley Davis"
  },
  {
    id: 6,
    title: "Content Marketing ROI: Measuring What Matters",
    excerpt: "Learn how to measure the true impact of your content marketing efforts and optimize for business growth.",
    date: "April 12, 2024",
    readTime: "9 min read",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Jordan Lee"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-accent rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">INSIGHTS & TRENDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Latest <span className="text-gold-gradient">Marketing Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay ahead of the curve with our expert analysis, industry trends, and actionable marketing tips.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary">By {post.author}</span>
                  <Link href={`/blog/${post.id}`} className="text-primary font-medium flex items-center group">
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog" 
            className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 font-medium inline-flex items-center"
          >
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}