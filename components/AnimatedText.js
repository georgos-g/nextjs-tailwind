import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function AnimatedText() {
  const [titleTypewriter, count] = useTypewriter({
    words: [
      '(JUNIOR) FRONTEND DEVELOPER',
      // 'MEDIA DESIGNER',
      // 'WEB DESIGNER',
      'PALOMAS BABAKA',
      'AMALIAS BABAKA',
      // 'HALLO FREUNDE',
      // 'WILLKOMMEN',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <>
      <h2 className='drop-shadow-lg shadow-slate-100 font-openSansLight text-left  text-gray-400 text-[1em] md:text-[1.4em] tracking-[3px]'>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.7,
            delay: 0,
          }}
        >
          Hello, I'm
        </motion.div>
      </h2>
      <h1 className='font-montserratBold text-[2em] md:text-[3em] tracking-[9px] text-gray-100'>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.7,
            delay: 1.5,
          }}
        >
          GEORGOS
        </motion.div>
      </h1>
      <motion.div
        initial={{
          opacity: 0,
          x: -300,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 2.0,
          delay: 2.5,
        }}
      >
        <h2 className='drop-shadow-lg text-gray-300 shadow-slate-100 font-openSansLight text-left text-[1em] md:text-[1.2em] tracking-[3px]'>
          <span>{titleTypewriter}</span>_
          <Cursor cursorColor='gray' />
        </h2>
      </motion.div>
    </>
  );
}
