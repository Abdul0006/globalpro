'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  BarChart3, 
  MessageCircle, 
  ShoppingBag, 
  Smartphone, 
  Search,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines and drive organic traffic with our comprehensive SEO strategies.',
    icon: <Search className="w-8 h-8" />,
    stats: '95% average increase in organic traffic',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand presence on all major social platforms with engaging content and targeted campaigns.',
    icon: <MessageCircle className="w-8 h-8" />,
    stats: '200% growth in social engagement',
  },
  {
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted pay-per-click campaigns that convert visitors into customers.',
    icon: <Target className="w-8 h-8" />,
    stats: '60% reduction in cost per acquisition',
  },
  {
    title: 'E-commerce Marketing',
    description: 'Drive sales and revenue with specialized strategies for online stores and marketplaces.',
    icon: <ShoppingBag className="w-8 h-8" />,
    stats: '150% increase in average order value',
  },
  {
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and establishes thought leadership.',
    icon: <BarChart3 className="w-8 h-8" />,
    stats: '300% improvement in brand awareness',
  },
  {
    title: 'Mobile Marketing',
    description: 'Reach customers on-the-go with mobile-optimized campaigns and app marketing strategies.',
    icon: <Smartphone className="w-8 h-8" />,
    stats: '80% increase in mobile conversions',
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base font-semibold uppercase tracking-[0.2em] text-primary mb-3"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            Strategic <span className="text-gold-gradient">Digital Marketing</span> Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We provide comprehensive digital marketing services tailored to your business goals and audience needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative bg-card rounded-2xl p-8 border border-border overflow-hidden transition-all duration-300 ${
                hoveredIndex === index ? 'shadow-gold shadow-xl' : 'shadow-lg'
              }`}
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="text-sm text-primary font-medium mb-6">{service.stats}</div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-primary font-medium group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}