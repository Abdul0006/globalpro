'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, MessageCircle, ArrowRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  tags: string[];
  comments: number;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing: Trends to Watch in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay ahead.",
    content: "Artificial intelligence is transforming every aspect of digital marketing, from content creation to customer experience. In this comprehensive analysis, we explore the key AI trends that are reshaping the marketing landscape in 2024 and beyond.\n\nPersonalization at Scale: AI enables marketers to deliver highly personalized experiences to millions of customers simultaneously. By analyzing user behavior, preferences, and demographics, AI algorithms can predict what content, products, or services each individual is most likely to engage with.\n\nPredictive Analytics: Modern AI tools can forecast customer behavior, identify potential churn risks, and predict which leads are most likely to convert. This allows marketers to allocate resources more effectively and focus on high-value opportunities.\n\nContent Automation: AI-powered tools are revolutionizing content creation, helping marketers generate blog posts, social media content, and even video scripts at scale. While human creativity remains essential, AI can handle the heavy lifting of research, outlining, and initial drafts.\n\nFurthermore, AI is enhancing customer service through advanced chatbots and virtual assistants that can handle complex queries and provide personalized recommendations. These tools are becoming increasingly sophisticated, offering human-like interactions that improve customer satisfaction and reduce response times.",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "AI Marketing",
    image: "https://images.unsplash.com/photo-1677442135722-5f11e06a4e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Morgan",
      role: "Senior Marketing Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["AI", "Marketing Trends", "Technology", "Innovation"],
    comments: 24
  },
  {
    id: 2,
    title: "Mastering Social Media Algorithms: A Complete Guide",
    excerpt: "Learn how to optimize your content for different social media platforms and maximize your organic reach.",
    content: "Social media algorithms determine which content users see in their feeds. Understanding these algorithms is crucial for maximizing your organic reach and engagement. Each platform has its own unique algorithm with specific factors that influence visibility.\n\nFacebook's Algorithm: Facebook's algorithm prioritizes content that generates meaningful interactions. Posts that prompt comments, shares, and reactions are more likely to appear in users' news feeds. The algorithm also considers the relationship between the user and the content creator, the type of content, and the user's past behavior.\n\nInstagram's Algorithm: Instagram's algorithm focuses on timeliness, relationship, and interest. The algorithm shows content that it believes users will be interested in, content from accounts they have a close relationship with, and timely posts. Engagement metrics like saves, shares, and comments significantly impact reach.\n\nTikTok's Algorithm: TikTok's algorithm is highly effective at content discovery. It considers factors like video information, user behavior, and device settings to personalize the For You feed. The platform emphasizes user engagement over follower count, allowing even new creators to gain visibility.",
    date: "May 8, 2024",
    readTime: "6 min read",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Jamie Smith",
      role: "Social Media Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Social Media", "Algorithms", "Engagement", "Strategy"],
    comments: 18
  },
  {
    id: 3,
    title: "The Psychology Behind Conversion Optimization",
    excerpt: "Understanding how users think can dramatically improve your conversion rates. Here's the science behind effective UX.",
    content: "Conversion optimization is more than just changing button colors or headlines. It's about understanding human psychology and designing experiences that align with how users think, feel, and make decisions. By applying psychological principles, marketers can significantly improve their conversion rates.\n\nSocial Proof: People are more likely to take action when they see that others have done the same. Customer testimonials, reviews, and user statistics can significantly boost conversion rates. The key is to make this proof as specific and relatable as possible.\n\nScarcity and Urgency: These principles leverage the fear of missing out (FOMO) to encourage immediate action. Limited-time offers, countdown timers, and low-stock notifications create a sense of urgency that can drive conversions.\n\nAnchoring: The first piece of information people receive influences their subsequent decisions. By presenting a higher-priced option first, you can make your main offer seem more reasonable in comparison. This principle is commonly used in pricing strategies.",
    date: "May 1, 2024",
    readTime: "10 min read",
    category: "Conversion",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Taylor Johnson",
      role: "UX Research Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["UX", "Psychology", "Conversion", "CRO"],
    comments: 32
  }
];

export default function BlogPostPage() {
  const { id } = useParams();
  const postId = Array.isArray(id) ? parseInt(id[0] || '0') : parseInt(id || '0');
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Link href="/blog" className="inline-flex items-center text-primary mb-6">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-muted-foreground mb-8">
            <div className="flex items-center mr-6 mb-2 md:mb-0">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2 md:mb-0">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">By</span>
              <span className="text-primary">{post.author.name}</span>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mb-10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full max-w-4xl h-96 object-cover rounded-2xl"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between py-8 border-t border-b border-border">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={post.author.image} 
                alt={post.author.name} 
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-foreground">{post.author.name}</h4>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex items-center text-muted-foreground hover:text-primary">
                <MessageCircle className="w-5 h-5 mr-1" /> {post.comments} Comments
              </button>
              <button className="flex items-center text-muted-foreground hover:text-primary">
                <Share2 className="w-5 h-5 mr-1" /> Share
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                    <motion.div
                      className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-muted-foreground">{relatedPost.excerpt}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}