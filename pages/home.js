import React from 'react';
import Image from 'next/future/image';
import { MagicMouseIcon } from '../components/Icons';
import { Link } from 'react-scroll';
import AnimatedText from '../components/AnimatedText';
import SayHelloButton from '../components/SayHelloButton';

export default function HomeSection() {
  return (
    <>
      <section id='home'>
        <div className='w-full sm:h-full bg-gradient-to-tl from-yellow-800 to-gray-900'>
          <Image
            width={1920}
            height={1080}
            src='/img/hero_bg.jpg'
            alt='hero'
            className='absolute object-cover w-full h-screen mix-blend-overlay'
          />
          <div className='flex flex-col justify-center max-w-[300px] h-screen pb-20 md:pl-14 xs:pl-6 sm:pl-8 pl-4'>
            <AnimatedText />
            <SayHelloButton />
          </div>
        </div>

        {/* place div to bottom of section and center it */}
        <div className='absolute bottom-0 left-0 right-0 items-center justify-center hidden pb-6 sm:flex'>
          <Link to='services' spy smooth offset={-63} duration={500} key='33'>
            <div className='tracking-[2px] pb-[80px] absolute bottom-0 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 text-[10px] text-slate-300  font-openSansBold '>
              WHAT I DO
            </div>
            <MagicMouseIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
