import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MoveOnHover from './MoveOnHover';

export default function Footer() {
  return (
    <footer className='py-3 text-sm text-center bg-nav_header_footer font-montserratLight'>
      {/* create a div fixed to bottom of page */}
      <div className='flex justify-center '>
        <MoveOnHover>
          <SocialIcon
            url='https://www.facebook.com/georgos.gakis'
            fgColor='#fff'
            bgColor='transparent'
            style={{ height: 40, width: 40 }}
            target={'_blank'}
            className='social_icons'
          />
        </MoveOnHover>
        <MoveOnHover>
          <SocialIcon
            url='https://www.linkedin.com/in/georgos-gakis/'
            fgColor='#fff'
            bgColor='transparent'
            style={{ height: 40, width: 40 }}
            target={'_blank'}
            className='social_icons'
          />
        </MoveOnHover>
        <MoveOnHover>
          <SocialIcon
            url='https://github.com/georgos-g'
            fgColor='#fff'
            bgColor='transparent'
            style={{ height: 40, width: 40 }}
            target={'_blank'}
            className='social_icons'
          />
        </MoveOnHover>
      </div>
      <p className='mt-1 mb-3'>
        &copy; {new Date().getFullYear()} GEORGOS GAKIS | MADE BY MYSELF
      </p>
    </footer>
  );
}
