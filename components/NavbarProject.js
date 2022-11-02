import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import { Link } from 'react-scroll';
import Link from 'next/link';

// list to map the links

const Links = [
  {
    id: 1,
    name: 'HOME',
    url: '',
  },
  {
    id: 2,
    name: 'SERVICES',
    url: '#services',
  },
  {
    id: 3,
    name: 'PROJECTS',
    url: '#projects',
  },
  {
    id: 4,
    name: 'ABOUT',
    url: '#about',
  },
  {
    id: 5,
    name: 'CONTACT',
    url: '#contact',
  },
];
//
const NavbarProject = () => {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle_nav = () => setIsOpen(!isOpen);

  // if clicking and scrolling outside of the div with className .mobileNavPrj toggle visibility
  useEffect(() => {
    const handleScrollOutside = (e) => {
      if (
        isOpen &&
        e.target.className !== 'mobileNavPrj' &&
        e.path[1].tagName !== 'BUTTON'
      ) {
        setIsOpen(!isOpen);
      }
    };
    const handleClickOutside = (e) => {
      console.log('EVENT PRJ', e);
      if (
        isOpen &&
        e.target.className !== 'mobileNavPrj' &&
        e.path[0].tagName !== 'BUTTON' &&
        e.path[1].tagName !== 'BUTTON'
      ) {
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScrollOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScrollOutside);
    };
  }, [isOpen]);
  return (
    <>
      <nav
        // Navbar with fixed position and background color
        className='fixed top-0 left-0 right-0 z-20 text-gray-800 bg-nav_header_footer'
      >
        <div className='px-2 mx-auto sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            {/* Mobile menu hamburger button */}
            <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
              {/* responsive md-hidden */}
              <button
                onClick={toggle_nav}
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-500 rounded-[3px] hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {isOpen ? (
                  <XIcon className='block w-6 h-6' aria-hidden='true' />
                ) : (
                  <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                )}
              </button>
            </div>

            {/* Desktop Nav items */}
            <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex'>
                <div className='flex items-center flex-shrink-1'>
                  {/* Nav Logo Mobile */}

                  <Link href='/'>
                    <img
                      className='block w-auto h-8 lg:hidden'
                      src='/img/logo.png'
                      alt='Logo Georgos Gakis Mobile'
                    />
                  </Link>

                  {/* Nav Logo Desktop */}

                  <Link href='/'>
                    <img
                      className='hidden lg:block h-[40px] w-auto'
                      src='/img/logo-large-dark.png'
                      alt='Logo Georgos Gakis'
                    />
                  </Link>
                </div>
                {/* Nav Links Desktop */}
                {/* Responsive md:block */}
                <div className='absolute right-0 hidden ml-3 md:block md:ml-6'>
                  <div className='flex pt-2 space-x-1 md:space-x-3 lg:space-x-6'>
                    {Links.map((link) => {
                      return (
                        <Link key={link.id} href={`/${link.url}`}>
                          <a
                            // set  class to active for link.url: projects
                            className={`
                            ${
                              link.url === '#projects'
                                ? 'activeGray'
                                : 'text-gray-800'
                            } 
                            px-1 md:px-2 lg:px-3 hover:text-black text-[1em] font-openSansLight`}
                          >
                            {link.name}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state  */}
          <div className={`${isOpen ? '' : 'hidden'} md:hidden pb-4`}>
            <div className='px-3 pt-1 pb-1 space-y-1 '></div>
            {Links.map((link, index) => {
              return (
                <Link
                  href={`/${link.url}`}
                  key={index}
                  className='mobileNavPrj'
                >
                  <div className='mb-1 bg-gray-300'>
                    <a
                      // toggle_nav if cursor is out of menu
                      onClick={toggle_nav}
                      className='block px-3 py-2 text-sm text-gray-800 hover:bg-gray-700 hover:text-white rounded-0 font-openSansLight '
                    >
                      {link.name}
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarProject;
