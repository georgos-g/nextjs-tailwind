import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';
import {
  ContentCreationIcon,
  FrameworksIcon,
  ProgrammingIcon,
} from '../components/Icons';
import MoveUp from '../components/MoveUp';
import ProgressBar from '../components/ProgressBar';

export function Services() {
  return (
    <>
      {/* section wrapper */}
      <section id='services' className='h-auto pt-0 bg-gray-300 '>
        {/* Container */}
        <div className='container mx-auto'>
          {/* ========= Text Header ========== */}
          <div className='flex flex-col items-center mx-auto text-center'>
            <h1 className='mb-3 mt-28 section_header'>WHAT I DO</h1>
            <h2 className='mb-20 section_sub_header'>SOME OF MY SKILLS</h2>
          </div>
          {/* ========= Cards ========== */}
          <div className='flex flex-wrap justify-center '>
            <MoveUp delay={0}>
              <div className='flex w-full p-2'>
                <div className='bg-gray-200 rounded-none shadow-xl card w-[320px] h-auto sm:h-72 sm:w-96'>
                  <div className='card-body'>
                    <div className='pb-4'>
                      <ProgrammingIcon />
                    </div>
                    <h2 className='pb-4 tracking-widest card-title'>
                      PROGRAMMING
                    </h2>
                    <p>JS-ES6, PHP, HTML5, CSS3 (Tailwind)</p>

                    <div className='justify-end card-actions'></div>
                  </div>
                </div>
              </div>
            </MoveUp>

            <MoveUp delay={0.5}>
              <div className='flex w-full p-2'>
                <div className='bg-gray-200 rounded-none shadow-xl card w-[320px] h-auto sm:h-72 sm:w-96'>
                  <div className='card-body'>
                    <div className='pb-4'>
                      <FrameworksIcon />
                    </div>
                    <h2 className='pb-4 tracking-widest card-title'>
                      FRAMEWORKS
                    </h2>
                    <p>React/Next.js, Vue, Node.js, </p>
                    <div className='justify-end card-actions'></div>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp delay={1}>
              <div className='flex w-full p-2'>
                <div className='bg-gray-200 rounded-none shadow-xl card w-[320px] h-auto sm:h-72 sm:w-96'>
                  <div className='card-body'>
                    <div className='pb-4'>
                      <ContentCreationIcon />
                    </div>
                    <h2 className='pb-4 tracking-widest card-title'>
                      CONTENT CREATION
                    </h2>
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
        {/* Skills with BG-Img */}
        <div
        // className='relative w-full m-20 mx-auto overflow-hidden bg-fixed bg-cover h-96 '
        // style={{
        //   backgroundImage: `url('/img/hero_bg3.jpg')`,
        // }}
        >
          {/*ProgressBar 1 */}
          <div className='container flex flex-wrap pb-20 mx-auto mt-10'>
            <div className='w-full md:w-1/2'>
              <div className='px-2 py-4 md:px-4'>
                <MoveUp>
                  <ProgressBar
                    progresBarTitle={'WEB DEVELOPMENT'}
                    endProgresBarValue={90}
                  />
                </MoveUp>
              </div>
            </div>
            {/* ProgressBar 2 */}
            <div className='w-full md:w-1/2'>
              <div className='px-2 py-4 md:px-4'>
                <MoveUp>
                  <ProgressBar
                    progresBarTitle={'WEB DESIGN'}
                    endProgresBarValue={80}
                  />
                </MoveUp>
              </div>
            </div>
            {/* ProgressBar 3 */}
            <div className='w-full md:w-1/2'>
              <div className='px-2 py-4 md:px-4'>
                <MoveUp>
                  <ProgressBar
                    progresBarTitle={'MEDIA DESIGN'}
                    endProgresBarValue={90}
                  />
                </MoveUp>
              </div>
            </div>
            {/* ProgressBar 4 */}
            <div className='w-full md:w-1/2'>
              <div className='px-2 py-4 md:px-4'>
                <MoveUp>
                  <ProgressBar
                    progresBarTitle={'ESSPRESSO'}
                    endProgresBarValue={100}
                  />
                </MoveUp>
              </div>
            </div>
          </div>

          {/* add transparent color over the img div */}
          {/* <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-tl from-yellow-700 to-gray-900'></div> */}
        </div>
      </section>
    </>
  );
}
