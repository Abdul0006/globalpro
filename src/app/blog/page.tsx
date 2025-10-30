'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, MessageCircle, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

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
    content: "Artificial intelligence is transforming every aspect of digital marketing, from content creation to customer experience. In this comprehensive analysis, we explore the key AI trends that are reshaping the marketing landscape in 2024 and beyond.\n\nPersonalization at Scale: AI enables marketers to deliver highly personalized experiences to millions of customers simultaneously. By analyzing user behavior, preferences, and demographics, AI algorithms can predict what content, products, or services each individual is most likely to engage with.\n\nPredictive Analytics: Modern AI tools can forecast customer behavior, identify potential churn risks, and predict which leads are most likely to convert. This allows marketers to allocate resources more effectively and focus on high-value opportunities.\n\nContent Automation: AI-powered tools are revolutionizing content creation, helping marketers generate blog posts, social media content, and even video scripts at scale. While human creativity remains essential, AI can handle the heavy lifting of research, outlining, and initial drafts.",
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
  },
  {
    id: 4,
    title: "SEO Best Practices for E-commerce in 2024",
    excerpt: "Maximize your online store's visibility with these proven SEO strategies specifically designed for e-commerce businesses.",
    content: "E-commerce SEO requires a unique approach compared to traditional business websites. With thousands of products to optimize, e-commerce sites face specific challenges that require specialized strategies. In 2024, the landscape has evolved with new algorithm updates and user expectations.\n\nProduct Page Optimization: Each product page should have unique, keyword-rich content that goes beyond just the product description. Include detailed specifications, benefits, use cases, and even customer-generated content like reviews. High-quality images with descriptive alt text are crucial for both accessibility and SEO.\n\nTechnical SEO: Site speed, mobile responsiveness, and structured data are critical for e-commerce success. Google's Core Web Vitals directly impact rankings, making page load speed a key factor. Implement schema markup for products to enhance search result appearance with rich snippets showing prices, availability, and ratings.\n\nContent Marketing: Create helpful content around your products, such as buying guides, comparison articles, and tutorials. This content can rank for informational queries that eventually lead to product purchases. Also, consider the customer journey and create content for each stage, from awareness to purchase.",
    date: "April 25, 2024",
    readTime: "7 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Casey Brown",
      role: "SEO Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["SEO", "E-commerce", "Optimization", "Strategy"],
    comments: 15
  },
  {
    id: 5,
    title: "The Art of Influencer Marketing: Building Authentic Partnerships",
    excerpt: "How to identify the right influencers and create partnerships that drive real business results.",
    content: "Influencer marketing has evolved beyond simple product placements to become a sophisticated channel for building brand awareness and driving sales. Success in this space requires strategic partner selection and authentic content creation that resonates with both the influencer's audience and your brand values.\n\nSelecting the Right Partners: The best influencer partnerships go beyond follower count. Micro-influencers often provide better engagement rates and more authentic connections with their audiences. Look for influencers whose values align with your brand and whose content resonates with your target demographic.\n\nMeasuring ROI: Influencer marketing success should be measured beyond vanity metrics. Track conversions, brand lift, and customer acquisition costs. Implement unique discount codes, trackable links, and custom landing pages to measure the direct impact of influencer campaigns on your business goals.\n\nBuilding Long-term Relationships: Sustainable influencer partnerships develop over time. Instead of one-off campaigns, consider ongoing relationships that allow influencers to become genuine brand advocates. This authenticity leads to more effective content and better results.",
    date: "April 18, 2024",
    readTime: "5 min read",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Riley Davis",
      role: "Partnership Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Influencers", "Partnerships", "Social Media", "Authenticity"],
    comments: 27
  },
  {
    id: 6,
    title: "Content Marketing ROI: Measuring What Matters",
    excerpt: "Learn how to measure the true impact of your content marketing efforts and optimize for business growth.",
    content: "Content marketing ROI can be difficult to measure, but with the right approach, you can demonstrate clear business impact. The key is to look beyond vanity metrics and focus on indicators that directly correlate with business growth and conversions.\n\nAttribution Models: Content often plays multiple roles in the customer journey. Use multi-touch attribution models to understand how content contributes to conversions at different stages. A single piece of content might influence awareness, consideration, and decision-making phases.\n\nLead Quality Metrics: Instead of just tracking content consumption, measure how well content-driven leads convert. Track metrics like lead-to-customer conversion rates, customer lifetime value from content-driven leads, and sales cycle length for content-influenced prospects.\n\nBrand Metrics: Content marketing also impacts brand awareness and perception. Track metrics like branded search volume, social media sentiment, and brand mention volume to understand the full impact of your content efforts.",
    date: "April 12, 2024",
    readTime: "9 min read",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Jordan Lee",
      role: "Content Strategy Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Content Marketing", "ROI", "Analytics", "Strategy"],
    comments: 19
  }
];

const categories = ["All", "AI Marketing", "Social Media", "Conversion", "SEO", "Influencer Marketing", "Content Marketing"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-accent rounded-full mb-4">
            <span className="text-primary text-sm font-semibold">INSIGHTS & TRENDS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Marketing <span className="text-gold-gradient">Insights</span> & Trends
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expert analysis, industry trends, and actionable marketing tips from our team of specialists.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-card border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-accent border border-border'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
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
                  <div className="flex items-center">
                    <img 
                      src={post.author.image} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-primary">{post.author.name}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-primary font-medium flex items-center group">
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="bg-gradient-to-br from-accent to-background border border-border rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to our newsletter and get the latest marketing insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}