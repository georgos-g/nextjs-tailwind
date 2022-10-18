import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className='py-3 text-sm text-center text-gray-300 bg-nav_header_footer font-montserratThin'>
      {/* create a div fixed to bottom of page */}
      <div className='flex justify-center '>
        <SocialIcon
          url='https://www.facebook.com/georgos.gakis'
          fgColor='#fff'
          bgColor='transparent'
          style={{ height: 40, width: 40 }}
          target={'_blank'}
          className='pr-2'
        />

        <SocialIcon
          url='https://www.linkedin.com/in/georgos-gakis/'
          fgColor='#fff'
          bgColor='transparent'
          style={{ height: 40, width: 40 }}
          target={'_blank'}
          className='pr-2'
        />

        <SocialIcon
          url='https://github.com/georgos-g'
          fgColor='#fff'
          bgColor='transparent'
          style={{ height: 40, width: 40 }}
          target={'_blank'}
          className='pr-2'
        />
      </div>
      <p className='mt-1 mb-3'>
        &copy; {new Date().getFullYear()} GEORGOS GAKIS | MADE BY MYSELF
      </p>
    </footer>
  );
}
