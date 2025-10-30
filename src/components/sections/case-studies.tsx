'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  category: string;
  results: string;
  description: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce ROI Boost",
    client: "Fashion Brand",
    category: "PPC",
    results: "180% increase in conversions",
    description: "Strategic PPC campaign that transformed online sales for a mid-market fashion retailer.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "SEO Authority Building",
    client: "Tech Startup",
    category: "SEO",
    results: "Top 3 rankings for 50+ keywords",
    description: "Comprehensive SEO strategy that established thought leadership in the tech space.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Social Media Growth",
    client: "Restaurant Chain",
    category: "Social Media",
    results: "300% growth in social engagement",
    description: "Multi-platform social strategy that increased brand awareness and foot traffic.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Content Marketing Success",
    client: "SaaS Company",
    category: "Content",
    results: "400% increase in qualified leads",
    description: "Content strategy that positioned the company as an industry thought leader.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Email Marketing Revamp",
    client: "E-commerce",
    category: "Email",
    results: "250% increase in email revenue",
    description: "Automated email sequences that enhanced customer retention and lifetime value.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Conversion Optimization",
    client: "Travel Agency",
    category: "CRO",
    results: "120% increase in bookings",
    description: "UX and conversion optimization that improved the booking process significantly.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const categories = ["All", "PPC", "SEO", "Social Media", "Content", "Email", "CRO"];

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCaseStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-accent rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">CASE STUDIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Proven <span className="text-gold-gradient">Results</span> for Our Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses like yours achieve measurable growth and success through strategic digital marketing.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-gold shadow-md'
                    : 'bg-secondary text-foreground hover:bg-accent border border-border'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                  <p className="text-primary font-medium">{study.client}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                    {study.category}
                  </span>
                  <span className="text-lg font-bold text-primary">{study.results}</span>
                </div>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="text-primary font-medium flex items-center group-hover:underline"
                >
                  View Case Study <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.div>
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
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 font-medium flex items-center mx-auto"
          >
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}