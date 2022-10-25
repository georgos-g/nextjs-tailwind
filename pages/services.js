import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';
import {
  ContentCreationIcon,
  FrameworksIcon,
  ProgrammingIcon,
} from '../components/Icons';
import MoveUp from '../components/MoveUp';

export default function Services() {
  return (
    <>
      {/* section wrapper */}
      <section id='services' className='h-screen pt-0 bg-gray-300 '>
        {/* Container */}
        <div className='container mx-auto'>
          {/* ========= Text Header ========== */}
          <div className='flex flex-col items-center mx-auto text-center'>
            <h1 className='mt-14 section_header'>WHAT I DO</h1>
            <h2 className='mb-10 section_sub_header'>SOME OF MY SKILLS</h2>
          </div>
          {/* ========= Cards ========== */}
          <div className='flex flex-wrap justify-center '>
            <MoveUp delay={0}>
              <div className='flex w-full p-2'>
                <div className='bg-gray-200 rounded-none shadow-xl card w-[320px] h-56 sm:w-96'>
                  <div className='card-body'>
                    <ProgrammingIcon />
                    <h2 className='card-title'>PROGRAMMING</h2>
                    <p>JS-ES6, PHP, HTML5, CSS3 (Tailwind)</p>

                    <div className='justify-end card-actions'></div>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp delay={0.8}>
              <div className='flex w-full p-2'>
                <div className='bg-gray-200 rounded-none shadow-xl card w-[320px] h-56 sm:w-96'>
                  <div className='card-body'>
                    <FrameworksIcon />
                    <h2 className='card-title'>FRAMEWORKS</h2>
                    <p>React/Next.js, Vue, Node.js, </p>
                    <div className='justify-end card-actions'></div>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp delay={1.6}>
              <div className='flex w-full p-2'>
                <div className='bg-gray-200 rounded-none shadow-xl card w-[320px] h-56 sm:w-96'>
                  <div className='card-body'>
                    <ContentCreationIcon />
                    <h2 className='card-title'>CONTENT CREATION</h2>
                    <p>
                      Photoshop, Premiere Pro, After Effects, XD, Sketchup Pro,
                      Vray, Samplitude Pro
                    </p>
                    <div className='justify-end card-actions'></div>
                  </div>
                </div>
              </div>
            </MoveUp>
          </div>
        </div>
        {/* Skills */}
        <div
          className='relative w-full m-20 mx-auto overflow-hidden bg-fixed bg-cover h-96 '
          style={{
            backgroundImage: `url('/img/hero_bg3.jpg')`,
          }}
        >
          {/* add transparent color over the img div */}
          <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-tl from-yellow-700 to-gray-900'></div>
        </div>
      </section>
    </>
  );
}
