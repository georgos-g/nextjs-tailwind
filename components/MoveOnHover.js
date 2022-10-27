import React from 'react';
import { motion } from 'framer-motion';

export default function MoveOnHover({ children }) {
  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {children}
      </motion.div>
    </>
  );
}
