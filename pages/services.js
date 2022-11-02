import React from 'react';

import {
  ContentCreationIcon,
  FrameworksIcon,
  ProgrammingIcon,
} from '../components/Icons';
import MoveUp from '../components/MoveUp';
import ProgressBar from '../components/ProgressBar';

export default function Services() {
  return (
    <>
      {/* section wrapper */}
      <section
        id='services'
        className='h-auto pt-0 bg-gray-300 [1552px]:h-screen '
      >
        {/* Wrapper  Header & Cards */}
        <div className='container mx-auto'>
          {/* ========= Text Header ========== */}
          <div className='flex flex-col items-center mx-auto text-center'>
            <h1 className='mt-16 mb-3 section_header'>WHAT I DO</h1>
            <h2 className='mb-12 section_sub_header'>SOME OF MY SKILLS</h2>
          </div>
          {/* ========= Cards ========== */}
          <div className='flex flex-wrap pb-6 justify-evenly '>
            <MoveUp delay={0}>
              <div className='flex p-2 xs:p-4'>
                <div className='bg-slate-100 rounded-none shadow-xl card  h-auto sm:h-72  w-[301px] sm:w-[480px]'>
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
              <div className='flex p-2 xs:p-4'>
                <div className='bg-slate-100 rounded-none shadow-xl card h-auto sm:h-72 w-[301px] sm:w-[480px]'>
                  <div className='card-body'>
                    <div className='pb-4'>
                      <FrameworksIcon />
                    </div>
                    <h2 className='pb-4 tracking-widest card-title'>
                      FRAMEWORKS
                    </h2>
                    <p>React/Next.js, Vue, Node.js</p>
                    <div className='justify-end card-actions'></div>
                  </div>
                </div>
              </div>
            </MoveUp>

            <MoveUp delay={1}>
              <div className='flex p-2 xs:p-4'>
                <div className='bg-slate-100 rounded-none shadow-xl card h-auto sm:h-72  w-[301px] sm:w-[480px]'>
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

        {/* ============ Second Part Services ===============*/}
        <div className='container flex flex-wrap p-1 pb-20 mx-auto '>
          {/* left text card */}
          <div className='px-2 py-4 lg:w-1/2 md:px-4 '>
            <div className='flex flex-col p-6 shadow-xl md:h-full sm:p-10 bg-slate-100'>
              {/* text */}
              <div>
                <h2 className='pb-0 sm:pb-6 project_title'>my goals</h2>
                {/* <p className='mb-4 text-base uppercase sm:text-xl font-openSansLight '> */}
                <p className='mb-0 uppercase sm:mb-4 section_sub_header sm:text-lg '>
                  <br /> I have a serious passion for creating intuitive,
                  dynamic user experiences. <br />
                  <br />
                  Interested in the entire frontend spectrum and working on
                  ambitious projects.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          {/* ========= PROGRESS BARS ========== */}
          <div className='w-full lg:w-1/2 '>
            {/*ProgressBar 1 */}
            <div className='w-full '>
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
            <div className='w-full '>
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
            <div className='w-full '>
              <div className='px-2 py-4 md:px-4'>
                <MoveUp>
                  <ProgressBar
                    progresBarTitle={'MEDIA DESIGN'}
                    endProgresBarValue={85}
                  />
                </MoveUp>
              </div>
            </div>
            {/* ProgressBar 4 */}
            <div className='w-full '>
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
        </div>
      </section>
    </>
  );
}
