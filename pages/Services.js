import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';

export default function Services() {
  return (
    <div id='services' className='h-screen pt-0 bg-gray-300 '>
      {/* <Image
        width={1000}
        height={1200}
        src='/img/gg_photo_no-bg.png'
        alt='image_of_me'
        className='hidden lg:block absolute left-0 h-full w-[800px] object-cover mix-blend-overlay'
      /> */}
      <div className='flex flex-col items-center mx-auto text-center'>
        <h1 className='mt-14 section_header'>WHAT I DO</h1>

        <h2 className='mb-2 section_sub_header'>SOME OF MY SKILLS</h2>
      </div>
      <div className='flex w-full'>
        <div className='w-1/2 '>
          <div className='flex flex-col p-1'>
            <progress
              className='w-56 progress progress-primary'
              value='0'
              max='100'
            ></progress>
            <progress
              className='w-56 progress progress-primary'
              value='10'
              max='100'
            ></progress>
            <progress
              className='w-56 progress progress-primary'
              value='40'
              max='100'
            ></progress>
            <progress
              className='w-56 progress progress-primary'
              value='70'
              max='100'
            ></progress>
            <progress
              className='w-56 progress progress-primary'
              value='100'
              max='100'
            ></progress>
          </div>
        </div>
        <div className='w-1/2 bg-green-900 '>HHsqssqsqsH</div>
      </div>
    </div>
  );
}
