import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

// list to map the links

const Links = [
  {
    id: 1,
    name: 'HOME',
    url: 'home',
  },
  {
    id: 2,
    name: 'ABOUT',
    url: 'about',
  },
  {
    id: 3,
    name: 'SERVICES',
    url: 'services',
  },
  {
    id: 4,
    name: 'CONTACT',
    url: 'contact',
  },
];
//
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isScroll, setIsScroll] = useState(false);

  // if scroll position is below 100px set state for isScroll to false
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        // Navbar with fixed position and background color
        className={`${
          isScroll
            ? 'bg-gray-800 text-gray-400 '
            : 'bg-transparent text-gray-400'
        } fixed top-0 left-0 right-0`}
      >
        <div className=' mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between container h-16'>
            <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
              {/* Mobile menu hamburger button*/}
              <button
                onClick={toggle}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {isOpen ? (
                  <XIcon className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                )}
              </button>
            </div>
            {/* Desktop Nav items */}
            <div className=''>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  {/* Nav Logo Mobile */}
                  <a href='#'>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='/img/logo.png'
                      alt='Logo Georgos Gakis'
                    />
                  </a>

                  {/* Nav Logo Desktop */}
                  <a href='#'>
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='/img/logo-large-dark.png'
                      alt='Logo Georgos Gakis'
                    />
                  </a>
                </div>
                {/* Nav Links Desktop */}
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-3'>
                    {Links.map((link) => {
                      return (
                        <Link
                          key={link.id}
                          smooth
                          spy
                          duration={600}
                          offset={-63}
                          to={link.url}
                        >
                          <a className='px-3 py-2 rounded-md text-sm font-openSansLight'>
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
          <div className={`${isOpen ? '' : 'hidden'} sm:hidden pb-4`}>
            <div className='px-3 pt-1 pb-1 space-y-1 '></div>
            {Links.map((link) => {
              return (
                <Link
                  key={link.id}
                  activeClass='active'
                  smooth
                  duration={600}
                  spy
                  to={link.url}
                  className='cursor-pointer'
                >
                  <a
                    // toggle if cursor is out of menu
                    onClick={toggle}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white
                   block px-3 py-2 rounded-md text-base font-medium'
                  >
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
