import React from 'react';
import { motion } from 'framer-motion';

export default function MoveUp({ children, delay }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        // activate the motion component when the element is in the viewport
        whileInView={{ opacity: 1, y: 0 }}
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
