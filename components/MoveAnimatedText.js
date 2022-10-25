import React from 'react';
import { motion } from 'framer-motion';

export default function MoveAnimatedText({ children, delay }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          // ad a delay value as a prop
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
