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
    <footer className='bg-gray-900 text-white text-center py-3'>
      {/* create a div fixed to bottom of page */}
      <div className='flex justify-center'>
        <a
          href='https://www.facebook.com/georgos.gakis'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a
          href='https://www.linkedin.com/in/georgos-gakis-5b1b3b1b3/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className='mt-3'>
        &copy; {new Date().getFullYear()} Georgos Gakis. All rights reserved.
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
