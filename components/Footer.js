import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MoveOnHover from './MoveOnHover';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className='py-3 text-sm text-center bg-nav_header_footer font-montserratLight'>
      {/* div fixed to bottom of page */}
      <div className='flex justify-center '>
        <SocialIcons />
      </div>
      <p className='mt-1 mb-3'>
        &copy; {new Date().getFullYear()} GEORGOS GAKIS | MADE BY MYSELF
      </p>
    </footer>
  );
}
