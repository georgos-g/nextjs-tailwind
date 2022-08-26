// responsive header navigation bar using tailwindcss
// if screen size is below 768px hide navigation bar show hamburger menu svg icon and hide navigation bar
// if screen size is above 768px show navigation bar hide hamburger menu svg icon and show navigation bar#

// import globall.css

import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

// list to map the links

const Links = [
  {
    id: 1,
    name: 'Home',
    url: 'home',
  },
  {
    id: 2,
    name: 'About',
    url: 'about',
  },
  {
    id: 3,
    name: 'Services',
    url: 'services',
  },
  {
    id: 4,
    name: 'Contact',
    url: 'contact',
  },
];
//
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
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

  console.log('isScroll: ', isScroll);

  return (
    <nav className={`${isScroll ? 'bg-gray-500' : 'bg-fuchsia-500'}`}>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <button
              onClick={toggle}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
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
          <div className='fixed'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='/img/logo.png'
                  alt='Logo Georgo Gakis'
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='/img/logo-large-dark.png'
                  alt='Logo Georgos Gakis'
                />
              </div>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  {Links.map((link) => {
                    return (
                      <Link
                        key={link.id}
                        activeClass='bg-gray-900 py-1 rounded-md '
                        smooth
                        spy
                        to={link.url}
                      >
                        <a
                          className='text-gray-300 hover:bg-gray-700 hover:text-white
                           px-3 py-2 rounded-md text-sm font-medium'
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

        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`${isOpen ? '' : 'hidden'} sm:hidden`}>
          <div className='px-2 pt-2 pb-3 space-y-1'></div>
          {Links.map((link) => {
            return (
              <Link
                key={link.id}
                activeClass='bg-gray-900 py-1 rounded-md '
                smooth
                spy
                to={link.url}
              >
                <a
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
  );
};
export default Navbar;
