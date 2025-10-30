'use client';

import { motion } from 'framer-motion';

interface AnimatedPageWrapperProps {
  children: React.ReactNode;
}

export default function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}