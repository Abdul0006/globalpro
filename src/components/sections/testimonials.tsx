'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    content: "Working with this team transformed our digital presence. Our ROI increased by 300% in just 6 months. Their strategic approach and attention to detail are unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateX",
    content: "The campaign they developed for us exceeded all expectations. Our brand awareness increased by 250% and lead generation improved by 180%. Truly exceptional work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "E-commerce Manager",
    company: "StyleHub",
    content: "Our online sales increased by 200% after implementing their strategies. They understood our market perfectly and delivered results that exceeded our goals.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CMO",
    company: "Global Solutions",
    content: "Their data-driven approach and creative strategies helped us achieve a 400% increase in qualified leads. The team is professional, responsive, and results-oriented.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Jennifer Kim",
    role: "Brand Manager",
    company: "Luxury Lifestyle",
    content: "They helped us establish a strong brand presence in a highly competitive market. Our engagement rates increased by 350% and customer loyalty improved significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "Robert Johnson",
    role: "Founder",
    company: "StartUp Pro",
    content: "From day one, they delivered on their promises. Our traffic doubled in the first quarter, and conversion rates improved by 150%. A truly valuable partnership.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-card rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from businesses that have transformed their digital presence with our strategies.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-muted-foreground" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}