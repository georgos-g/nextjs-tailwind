import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { MailIcon } from './Icons';

export default function SayHelloButton() {
  return (
    <>
      <motion.div
        className='z-10 pt-40 md:pt-8'
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
        <div className='w-[180px] '>
          <Link to='contact' spy smooth duration={500} key='32'>
            <div className='flex tracking-[2px] py-[8px] px-6 text-[16px] bg-gray-800 text-slate-300 hover:bg-orange-500  font-openSansBold mt-[3px]'>
              SAY HELLO
              <span className='pl-2 '>
                <MailIcon />
              </span>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
