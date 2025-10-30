'use client';

import { motion } from 'framer-motion';

type Stat = {
  number: string;
  label: string;
  description: string;
};

const stats: Stat[] = [
  {
    number: "500+",
    label: "Clients",
    description: "Diverse portfolio across multiple industries"
  },
  {
    number: "250%",
    label: "Avg ROI",
    description: "Average return on investment for clients"
  },
  {
    number: "98%",
    label: "Retention",
    description: "Client retention rate over 5 years"
  },
  {
    number: "24/7",
    label: "Support",
    description: "Round-the-clock campaign monitoring"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">{stat.number}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}