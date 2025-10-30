'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Star, Award } from 'lucide-react';

const missionVisionValues = {
  mission: [
    {
      title: "Our Mission",
      description: "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create sustainable competitive advantages in an ever-evolving digital landscape.",
      icon: Target
    }
  ],
  vision: [
    {
      title: "Our Vision",
      description: "To be the leading global partner for digital transformation, creating a connected world where technology enhances every aspect of human experience and business operations.",
      icon: Eye
    }
  ],
  values: [
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "We embrace change and continuously seek new ways to solve problems and create value.",
      icon: Zap
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from strategy to execution.",
      icon: Star
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships and work closely with our clients to achieve shared success.",
      icon: Award
    }
  ]
};

const MissionVisionValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          {missionVisionValues.mission.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h2>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </motion.div>
            );
          })}

          {/* Vision */}
          {missionVisionValues.vision.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h2>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Core Values
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values form the foundation of our culture and drive every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionVisionValues.values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;