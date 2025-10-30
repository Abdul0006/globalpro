'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-1.5 bg-accent rounded-full mb-6">
                <span className="text-primary text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  DIGITAL MARKETING EXPERTS
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Transform Your <span className="text-gold-gradient">Digital Presence</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-8"
            >
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                We create powerful digital experiences that drive growth, engagement, and measurable results for forward-thinking brands.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="#contact">
                <Button size="lg" className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-gold hover:bg-primary/5 flex items-center"
              >
                <Play className="w-5 h-5 mr-2" /> Watch Our Story
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="grid grid-cols-3 gap-8 max-w-lg"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">250+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500%</div>
                <div className="text-muted-foreground">Avg ROI</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-2/5 bg-card p-8 rounded-2xl shadow-xl max-w-lg mx-auto border border-border relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-2xl"></div>
            
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Get Your Free Digital Audit
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Business Type
                </label>
                <select className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>E-commerce</option>
                  <option>Local Business</option>
                  <option>SaaS</option>
                  <option>Agency</option>
                  <option>Other</option>
                </select>
              </div>
              
              <Button className="w-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Get Free Audit
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Join 500+ businesses growing with our strategies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}