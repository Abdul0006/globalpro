'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-accent rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">ABOUT US</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Leading <span className="text-gold-gradient">Digital Marketing</span> Agency
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2010, we've been transforming businesses through strategic digital marketing. Our team of experts combines creative thinking with data-driven strategies to deliver measurable results that drive growth and increase ROI.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We pride ourselves on staying ahead of industry trends and leveraging the latest marketing technologies to keep your brand competitive in an ever-evolving digital landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-card p-6 rounded-xl border border-border flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <div className="text-primary mr-4">✓</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Proven Strategies</h4>
                  <p className="text-muted-foreground">
                    Data-driven campaigns that deliver real business results and measurable ROI.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="bg-card p-6 rounded-xl border border-border flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="text-primary mr-4">✓</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Creative Excellence</h4>
                  <p className="text-muted-foreground">
                    Innovative concepts that capture attention and engage your target audience.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl w-full h-96 flex items-center justify-center border border-border overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-2xl"></div>
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary rounded-bl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-2xl"></div>
                
                {/* Placeholder for image with golden elements */}
                <div className="relative z-10 text-center p-4">
                  <div className="inline-block p-6 rounded-full mb-6 border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 flex items-center justify-center mx-auto">
                      <span className="text-primary text-4xl font-bold">G</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Global Marketing Experts</h3>
                  <p className="text-muted-foreground">15+ Countries • 500+ Clients • 10+ Years</p>
                </div>
                
                {/* Animated elements */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-xl shadow-gold shadow-xl z-10"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}