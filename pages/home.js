import React from 'react';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/future/image';
import { MagicMouseIcon } from '../components/Icons';
import { MailIcon } from '../components/Icons';
import { Link } from 'react-scroll';

function HomeSection() {
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
      <section id='home'>
        <div className='relative w-full h-full bg-gradient-to-tl from-yellow-700 to-gray-900'>
          <Image
            width={1920}
            height={1080}
            src='/img/hero_bg.jpg'
            alt='hero'
            className='absolute object-cover w-full h-full mix-blend-overlay'
          />

          <div className='flex flex-col justify-center h-screen pb-20 pl-14'>
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
            {/* ------ / Button say hello -------- */}

            <motion.div
              className='z-10'
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 2,
                delay: 4,
              }}
            >
              <div className='z-10 pt-12 w-[180px] '>
                <Link to='contact' spy smooth duration={500} key='32'>
                  <a className='flex tracking-[2px] py-[8px] px-6 rounded-md  text-[16px] bg-gray-800 text-slate-300 hover:bg-orange-500  font-openSansBold  mt-[3px] '>
                    SAY HELLO
                    <span className='pl-2 '>
                      <MailIcon className='' />
                    </span>
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
          {/* ------ / Button -------- */}
        </div>

        {/* place div to bottom of section and center it */}
        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6'>
          <Link to='services' spy smooth offset={-63} duration={500} key='33'>
            <a className='tracking-[2px] pb-[80px] absolute bottom-0 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 text-[10px] text-slate-300  font-openSansBold '>
              WHAT I DO
            </a>
            <MagicMouseIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
export default HomeSection;
