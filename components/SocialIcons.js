import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MoveOnHover from './MoveOnHover';

export default function SocialIcons() {
  return (
    <div className='flex justify-between w-32 text-sm font-montserratThin'>
      <MoveOnHover>
        <div>
          <SocialIcon
            url='https://www.facebook.com/georgos.gakis'
            fgColor='#fff'
            bgColor='transparent'
            style={{ height: 40, width: 40 }}
            target={'_blank'}
            className='social_icons'
          />
        </div>
      </MoveOnHover>
      <MoveOnHover>
        <div>
          <SocialIcon
            url='https://www.linkedin.com/in/georgos-gakis/'
            fgColor='#fff'
            bgColor='transparent'
            style={{ height: 40, width: 40 }}
            target={'_blank'}
            className='social_icons'
          />
        </div>
      </MoveOnHover>
      <MoveOnHover>
        <div>
          <SocialIcon
            url='https://github.com/georgos-g'
            fgColor='#fff'
            bgColor='transparent'
            style={{ height: 40, width: 40 }}
            target={'_blank'}
            className='social_icons'
          />
        </div>
      </MoveOnHover>
    </div>
  );
}
