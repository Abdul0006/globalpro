'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface PillNavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo: string;
  logoAlt: string;
  items: PillNavItem[];
  activeHref: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

export default function PillNav({
  logo,
  logoAlt,
  items,
  activeHref,
  className = '',
  ease = "power2.easeOut",
  baseColor = 'hsl(var(--foreground))',
  pillColor = 'hsl(var(--primary))',
  hoveredPillTextColor = 'hsl(var(--primary-foreground))',
  pillTextColor = 'hsl(var(--primary-foreground))',
}: PillNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Find the active item based on the current path
  const activeItem = items.find(item => item.href === activeHref);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl py-3 shadow-sm border-b border-border' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/50 flex items-center justify-center border border-primary/20">
              <img 
                src={logo} 
                alt={logoAlt} 
                className="w-8 h-8 object-contain rounded-full"
              />
            </div>
            {/* Decorative ring elements */}
            <div className="absolute -inset-1.5 rounded-full border border-primary/10 pointer-events-none"></div>
          </div>
          <span className="text-xl font-bold text-foreground">
            {logoAlt.replace(' Logo', '')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                className="py-3 px-5 rounded-full transition-all duration-300 inline-block relative text-foreground hover:text-primary group"
              >
                {activeHref === item.href ? (
                  <motion.div
                    className="absolute inset-0 rounded-full z-0 bg-gradient-to-r from-primary/20 to-primary/5 bg-primary"
                    layoutId="pillActive"
                    transition={{ 
                      ease: ease === "power2.easeOut" ? [0.34, 1.56, 0.64, 1] : "easeOut",
                      duration: 0.4 
                    }}
                  />
                ) : (
                  <motion.div 
                    className="absolute inset-0 rounded-full z-0 bg-transparent"
                    whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span 
                  className={`relative z-10 font-medium block ${
                    activeHref === item.href ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </div>
          ))}
          <motion.div 
            className="ml-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none p-2 rounded-full hover:bg-accent transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t border-border pt-6 pb-8 px-4 shadow-2xl shadow-primary/10"
        >
          <div className="flex flex-col space-y-3">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  href={item.href}
                  className="py-3.5 px-5 rounded-full text-base transition-colors duration-300 block relative text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {activeHref === item.href && (
                    <motion.div
                      className="absolute inset-0 rounded-full z-0 left-0 right-0 bg-gradient-to-r from-primary/20 to-primary/5 bg-primary"
                      layoutId="pillActive"
                      transition={{ 
                        ease: ease === "power2.easeOut" ? [0.34, 1.56, 0.64, 1] : "easeOut",
                        duration: 0.4 
                      }}
                    />
                  )}
                  <span 
                    className={`relative z-10 block ${
                      activeHref === item.href ? 'text-primary-foreground' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Link 
                href="#contact" 
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}