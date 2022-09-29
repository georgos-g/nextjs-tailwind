import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';

export default function Services() {
  return (
    <div id='services' className=' pt-0 bg-gray-300 h-screen'>
      {/* <Image
        width={1000}
        height={1200}
        src='/img/gg_photo_no-bg.png'
        alt='image_of_me'
        className='hidden lg:block absolute left-0 h-full w-[800px] object-cover mix-blend-overlay'
      /> */}
      <div className='flex flex-col items-center  text-center mx-auto'>
        <h1 className='mt-14 section_header'>WHAT I DO</h1>

        <h2 className='section_sub_header mb-2'>SOME OF MY SKILLS</h2>
      </div>
      <div className='flex w-full'>
        <div className=' w-1/2  '>
          <div className='flex p-1 flex-col'>
            <progress
              className='progress progress-primary w-56'
              value='0'
              max='100'
            ></progress>
            <progress
              className='progress progress-primary w-56'
              value='10'
              max='100'
            ></progress>
            <progress
              className='progress progress-primary w-56'
              value='40'
              max='100'
            ></progress>
            <progress
              className='progress progress-primary w-56'
              value='70'
              max='100'
            ></progress>
            <progress
              className='progress progress-primary w-56'
              value='100'
              max='100'
            ></progress>
          </div>
        </div>
        <div className=' w-1/2  bg-green-900'>HHsqssqsqsH</div>
      </div>
    </div>
  );
}
