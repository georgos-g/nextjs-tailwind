// create footer component fixed to bottom of page with links to social media with font-awesome icons and tailwindcss
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='bg-bg_top_bottom text-gray-300 font-montserratThin text-sm text-center py-3'>
      {/* create a div fixed to bottom of page */}
      <div className='flex justify-center '>
        <a
          className='pr-2'
          href='https://www.facebook.com/georgos.gakis'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          className='pr-2'
          href='https://www.linkedin.com/in/georgos-gakis-5b1b3b1b3/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className='pr-2' href='#' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className='mt-3'>
        &copy; {new Date().getFullYear()} GEORGOS GAKIS | MADE BY MYSELF
      </p>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <div className='relative'>
//       <footer className='fixed bottom-0 w-max bg-red-400 h-14'>
//         <h1 className=''>Footer</h1>
//       </footer>
//     </div>
//   );
// }
