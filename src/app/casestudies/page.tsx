'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  category: string;
  results: string;
  description: string;
  detailedDescription: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  timeline: string;
  budget: string;
  image: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce ROI Boost",
    client: "FashionForward",
    category: "PPC & Conversion",
    results: "180% increase in conversions",
    description: "Strategic PPC campaign that transformed online sales for a mid-market fashion retailer.",
    detailedDescription: "FashionForward was struggling with declining online sales and high customer acquisition costs. Our team conducted a comprehensive audit of their existing campaigns and identified several optimization opportunities. We implemented a multi-platform advertising strategy focusing on high-intent keywords and improved targeting methods.",
    challenges: [
      "High cost per acquisition",
      "Low conversion rates",
      "Inconsistent brand messaging",
      "Fragmented customer journey"
    ],
    solutions: [
      "Restructured Google Ads campaigns with improved targeting",
      "Implemented dynamic product ads on Facebook",
      "Optimized landing pages for better conversion",
      "A/B tested ad creatives and messaging"
    ],
    outcomes: [
      "Conversion rate increased by 180%",
      "Cost per acquisition reduced by 45%",
      "Revenue increased by 250%",
      "Return on ad spend improved by 300%"
    ],
    timeline: "6 months",
    budget: "$50,000",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["PPC", "E-commerce", "Conversion Optimization"]
  },
  {
    id: 2,
    title: "SEO Authority Building",
    client: "TechSolutions Inc.",
    category: "SEO & Content",
    results: "Top 3 rankings for 50+ keywords",
    description: "Comprehensive SEO strategy that established thought leadership in the tech space.",
    detailedDescription: "TechSolutions Inc. needed to establish authority in a competitive tech market. Our SEO team developed a comprehensive content strategy combined with technical optimization to improve organic visibility and drive qualified traffic.",
    challenges: [
      "No organic visibility",
      "Competitive keyword landscape",
      "Lack of thought leadership",
      "Poor website architecture"
    ],
    solutions: [
      "Conducted technical SEO audit and improvements",
      "Developed content strategy targeting 100+ keywords",
      "Created authoritative pillar content and resources",
      "Implemented link building strategy"
    ],
    outcomes: [
      "Top 3 rankings for 50+ target keywords",
      "Organic traffic increased by 350%",
      "Lead generation increased by 200%",
      "Brand authority signals improved significantly"
    ],
    timeline: "8 months",
    budget: "$75,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["SEO", "Content Marketing", "Authority Building"]
  },
  {
    id: 3,
    title: "Social Media Growth",
    client: "UrbanBite Restaurants",
    category: "Social Media",
    results: "300% growth in social engagement",
    description: "Multi-platform social strategy that increased brand awareness and foot traffic.",
    detailedDescription: "UrbanBite Restaurants needed to increase brand awareness and drive foot traffic across their restaurant locations. Our social media team created a cohesive strategy that showcased their unique culinary experience.",
    challenges: [
      "Low engagement rates",
      "Inconsistent brand voice",
      "Limited user-generated content",
      "Competition from national chains"
    ],
    solutions: [
      "Developed content calendar with 30+ pieces per month",
      "Created user-generated content campaigns",
      "Partnered with local food influencers",
      "Implemented geotargeted advertising"
    ],
    outcomes: [
      "Social engagement increased by 300%",
      "Foot traffic increased by 75%",
      "Brand mention sentiment improved by 90%",
      "Store visits increased by 200%"
    ],
    timeline: "4 months",
    budget: "$30,000",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Social Media", "Local Marketing", "UGC"]
  },
  {
    id: 4,
    title: "Content Marketing Success",
    client: "CloudSecure",
    category: "Content Marketing",
    results: "400% increase in qualified leads",
    description: "Content strategy that positioned the company as an industry thought leader.",
    detailedDescription: "CloudSecure needed to establish themselves as a thought leader in the cybersecurity space while generating high-quality leads. Our content team developed an extensive content strategy targeting decision-makers.",
    challenges: [
      "Complex product to explain",
      "Long sales cycles",
      "High competition",
      "Low trust in industry"
    ],
    solutions: [
      "Created comprehensive resource hub",
      "Developed educational webinar series",
      "Published industry research reports",
      "Launched thought leadership podcast"
    ],
    outcomes: [
      "Qualified leads increased by 400%",
      "Content engagement increased by 500%",
      "Sales cycle shortened by 30%",
      "Brand authority increased significantly"
    ],
    timeline: "10 months",
    budget: "$100,000",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Content Marketing", "Thought Leadership", "Lead Generation"]
  }
];

const categories = ["All", "PPC", "SEO", "Social Media", "Content", "Email", "CRO"];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  
  const filteredCaseStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(activeCategory) || study.category.includes(activeCategory));

  const openCaseStudy = (study: CaseStudy) => {
    setActiveStudy(study);
  };

  const closeCaseStudy = () => {
    setActiveStudy(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Case Study Detail Modal */}
      {activeStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black/80 transition-opacity" 
              onClick={closeCaseStudy}
            />
            
            {/* Modal panel */}
            <div className="inline-block transform overflow-hidden rounded-2xl bg-card text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:align-middle">
              <div className="bg-card p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{activeStudy.title}</h2>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <span className="mr-4">{activeStudy.client}</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">{activeStudy.category}</span>
                    </div>
                  </div>
                  <button 
                    onClick={closeCaseStudy}
                    className="text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-accent"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeStudy.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <img 
                  src={activeStudy.image} 
                  alt={activeStudy.title} 
                  className="w-full h-80 object-cover rounded-xl mb-8"
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-foreground mb-4">Project Overview</h3>
                    <p className="text-muted-foreground mb-6">{activeStudy.detailedDescription}</p>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">Challenges</h3>
                    <ul className="space-y-3 mb-6">
                      {activeStudy.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">Solutions</h3>
                    <ul className="space-y-3 mb-6">
                      {activeStudy.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">Outcomes</h3>
                    <ul className="space-y-3">
                      {activeStudy.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="bg-accent/50 p-6 rounded-xl mb-6">
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>Timeline: {activeStudy.timeline}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <span className="mr-2">💰</span>
                        <span>Total Investment: {activeStudy.budget}</span>
                      </div>
                      <div className="text-lg font-bold text-primary mb-4">{activeStudy.results}</div>
                      <Link 
                        href="#contact" 
                        className="flex items-center justify-center w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
                      >
                        Start Your Project <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-accent rounded-full mb-4">
            <span className="text-primary text-sm font-semibold">CASE STUDIES</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Proven <span className="text-gold-gradient">Results</span> for Our Clients
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we{'\''}ve helped businesses like yours achieve measurable growth and success through strategic digital marketing.
          </p>
        </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
              onClick={() => openCaseStudy(study)}
            >
              <div className="relative h-64 overflow-hidden">
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
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Read Case Study</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}