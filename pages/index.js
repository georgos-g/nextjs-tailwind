import Head from 'next/head';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Posts from './Posts';
import Image from 'next/future/image';
import { MagicMouseIcon } from '../components/Icons';
import { MailIcon } from '../components/Icons';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

// Create Function who Change text every 1 second React useEffect

const titles = [
  {
    job_title: '(JUNIOR) FRONTEND DEVELOPER',
  },
  {
    job_title: 'MEDIA DESIGNER',
  },
  {
    job_title: 'WEB DESIGNER',
  },
  {
    job_title: 'PALOMAS BABAKA',
  },
  {
    job_title: 'AMALIAS BABAKA',
  },
];

export default function Home() {
  //  Change name of title array every 1.5 sec with useState
  const [title, setTitle] = useState(titles[0].job_title);
  useEffect(() => {
    const interval = setInterval(() => {
      const index = titles.findIndex((item) => item.job_title === title);
      if (index === titles.length - 1) {
        setTitle(titles[0].job_title);
      } else {
        setTitle(titles[index + 1].job_title);
      }
    }, 1700);
    return () => clearInterval(interval);
  }, [title]);

  return (
    <>
      {/* add a responsive fullscreen bg-img to section */}
      <Head>
        <title>Georgos Gakis | Fronend Developer & Media Designer </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='home'>
        <div className='relative bg-gradient-to-tl from-yellow-700 to-gray-900   w-full h-full'>
          <Image
            width={1920}
            height={1080}
            src='/img/hero_bg.jpg'
            alt='hero'
            className='absolute object-cover h-full w-full mix-blend-overlay'
          />
          <div className='h-screen flex flex-col justify-center pl-14 pb-20'>
            <h2 className='drop-shadow-lg shadow-slate-100 font-openSansLight text-left  text-gray-400 text-[1em] md:text-[1.4em] tracking-[3px]'>
              Hello, I'm
            </h2>
            <h1 className='font-montserratBold text-[2em] md:text-[3em] tracking-[9px] text-gray-100'>
              GEORGOS
            </h1>
            {/* toggle thru titles each second*/}
            <h2 className='drop-shadow-lg text-gray-300 shadow-slate-100 font-openSansLight text-left text-[1em] md:text-[1.2em] tracking-[3px]'>
              {title}
            </h2>
          </div>
          {/* Button say hello */}
          {/* <div className='pt-12'> */}
          <div className='absolute pl-14 bottom-80 '>
            <Link to='contact' spy smooth offset={-63} duration={500} key='32'>
              <a className='flex tracking-[2px] py-[8px] px-6 rounded-md  text-[16px] bg-gray-800 text-slate-300 hover:bg-orange-500  font-openSansBold hover:border-[1px] hover:border-slate-300  mt-[3px] '>
                SAY HELLO
                <span className='pl-2 '>
                  <MailIcon className='' />
                </span>
              </a>
            </Link>
          </div>
          {/* ------ / Button -------- */}
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
      {/* <Posts /> */}
      <About />
      <Contact />
    </>
  );
}
