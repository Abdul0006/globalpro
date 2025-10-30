'use client';

import { motion } from 'framer-motion';
import { BadgeDollarSign, Globe, Users, Zap, BarChart3, Shield } from 'lucide-react';

const partners = [
  { name: 'Microsoft', logo: 'M', color: 'bg-blue-500' },
  { name: 'Google', logo: 'G', color: 'bg-red-500' },
  { name: 'Adobe', logo: 'A', color: 'bg-purple-500' },
  { name: 'AWS', logo: 'A', color: 'bg-orange-500' },
  { name: 'Salesforce', logo: 'S', color: 'bg-blue-600' },
  { name: 'Slack', logo: 'S', color: 'bg-purple-600' },
  { name: 'Shopify', logo: 'S', color: 'bg-green-500' },
  { name: 'HubSpot', logo: 'H', color: 'bg-orange-600' },
];

const stats = [
  { value: '150+', label: 'Partners Worldwide' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Support Available' },
];

const Partners = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Our Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with the world's leading technology companies to deliver exceptional solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 rounded-2xl shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-muted-foreground">Partnering with companies across 50+ countries to deliver localized solutions with global standards.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 rounded-2xl shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">Constantly evolving our partnership strategies to leverage the latest technologies and market trends.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 rounded-2xl shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trust</h3>
            <p className="text-muted-foreground">Building long-term relationships based on transparency, reliability, and mutual success.</p>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Technology Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center"
              >
                <div className={`${partner.color} w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-2`}>
                  {partner.logo}
                </div>
                <span className="text-sm font-medium text-foreground">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;