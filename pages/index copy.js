import Head from 'next/head';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Image from 'next/future/image';
import { MagicMouseIcon } from '../components/Icons';
import { Link } from 'react-scroll';
import React from 'react';

export default function Home() {
  return (
    <>
      {/* add a responsive fullscreen bg-img to section */}
      <Head>
        <title>Georgos Gakis | Fronend Developer & Media Designer </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='home'>
        <div className='relative  bg-gradient-to-tl from-yellow-900 to-gray-900 w-full h-full'>
          <Image
            width={1920}
            height={1080}
            src='/img/hero_bg.jpg'
            alt='hero'
            className='absolute object-cover h-full w-full mix-blend-overlay'
          />
          <div className='h-screen flex flex-col justify-center items-center pb-20'>
            <h2 className='drop-shadow-lg shadow-slate-100 font-openSansLight text-center  text-gray-400 text-[0.75em] md:text-[1em] tracking-[3px]'>
              JUNIOR FRONTEND DEVELOPER | MEDIA DESIGNER
              <h1 className='font-montserratBold text-[3em] md:text-[3.5em] tracking-[9px] text-gray-100'>
                GEORGOS GAKIS
              </h1>
            </h2>
          </div>
        </div>
        {/* place div to bottom of section and center it */}
        <div className='pb-6 absolute bottom-0 left-0 right-0 flex justify-center items-center'>
          <Link to='services' spy smooth offset={-63} duration={500} key='33'>
            <a className='tracking-[2px] pb-[80px] absolute bottom-0 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 text-[10px] text-slate-300  font-openSansBold '>
              WHAT I DO
            </a>
            <MagicMouseIcon />
          </Link>
        </div>
      </section>
      <Services />
      <About />
      <Contact />
    </>
  );
}
