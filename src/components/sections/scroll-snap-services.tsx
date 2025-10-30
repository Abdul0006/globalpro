"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const services = [
  { title: "Web Development", desc: "Modern, scalable web applications built with React & Next.js." },
  { title: "App Design", desc: "Pixel-perfect UI/UX for cross-platform apps." },
  { title: "SEO Optimization", desc: "Rank higher with optimized SEO strategies." },
  { title: "Digital Marketing", desc: "Engage, convert, and grow your audience." },
  { title: "E-commerce Solutions", desc: "Custom storefronts powered by secure APIs." },
  { title: "Social Media Management", desc: "Boost engagement with data-driven campaigns." },
  { title: "Content Creation", desc: "Eye-catching visuals and digital storytelling." },
  { title: "Brand Identity", desc: "Crafting memorable brand experiences." },
  { title: "Video Editing", desc: "Cinematic edits for your next viral clip." },
  { title: "AI Chatbot Integration", desc: "Automate customer support using AI." },
];

const ServiceCard = ({ service, index, scrollYProgress, total }: { 
  service: { title: string; desc: string }; 
  index: number; 
  scrollYProgress: MotionValue<number>;
  total: number; 
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(scrollYProgress, [start, end], [150, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);
  const rotate = useTransform(scrollYProgress, [start, end], [5, 0]);

  return (
    <section
      key={index}
      className="snap-center flex items-center justify-center min-h-[100dvh] w-full"
    >
      <motion.div
        style={{ y, scale, opacity, rotate }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative w-[90%] max-w-lg p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 to-purple-700/10 rounded-3xl" />
        <h3 className="text-3xl font-semibold mb-4 text-blue-400">
          {service.title}
        </h3>
        <p className="text-neutral-300 text-lg leading-relaxed">{service.desc}</p>
      </motion.div>
    </section>
  );
};

export default function ScrollSnapServices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 via-black to-neutral-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">
        Our Digital Services
      </h2>
      <div
        ref={ref}
        className="relative h-[100dvh] overflow-y-scroll snap-y snap-mandatory"
      >
        {services.map((service, i) => (
          <ServiceCard 
            key={i} 
            service={service} 
            index={i} 
            scrollYProgress={scrollYProgress} 
            total={services.length} 
          />
        ))}
      </div>
    </section>
  );
}