import React, { useState, useEffect } from 'react';
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
    name: 'SERVICES',
    url: 'services',
  },
  {
    id: 3,
    name: 'PROJECTS',
    url: 'projects',
  },
  {
    id: 4,
    name: 'ABOUT',
    url: 'about',
  },
  {
    id: 5,
    name: 'CONTACT',
    url: 'contact',
  },
];
//
const Navbar = () => {
  // const router = useRouter();
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
            ? 'bg-bg_top_bottom text-gray-300 duration-7 00'
            : 'bg-transparent text-gray-600'
        } fixed top-0 left-0 right-0 z-20`}
      >
        <div className='px-2 mx-auto sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            {/* Mobile menu hamburger button */}
            <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
              {/* responsive md-hidden */}
              <button
                onClick={toggle}
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white'
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
                  <Link to='home' spy smooth offset={-63} duration={500}>
                    <img
                      className='block w-auto h-8 lg:hidden'
                      src='/img/logo.png'
                      alt='Logo Georgos Gakis Mobile'
                    />
                  </Link>

                  {/* Nav Logo Desktop */}
                  <Link to='home' spy smooth offset={-63} duration={500}>
                    <img
                      className='hidden lg:block h-[40px] w-auto'
                      src='/img/logo-large-dark.png'
                      alt='Logo Georgos Gakis'
                    />
                  </Link>
                </div>
                {/* Nav Links Desktop */}
                {/* Responsive md:block */}
                <div className='absolute right-0 hidden md:block sm:ml-6'>
                  <div className='flex pt-1 space-x-1 md:space-x-4 lg:space-x-6'>
                    {Links.map((link) => {
                      return (
                        <Link
                          key={link.id}
                          smooth
                          spy
                          duration={500}
                          offset={-63}
                          to={link.url}
                        >
                          <a className='px-3 hover:text-white text-[1em] font-openSansLight'>
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
                  offset={-63}
                  spy
                  to={link.url}
                  className='cursor-pointer'
                >
                  <a
                    // toggle if cursor is out of menu
                    onClick={toggle}
                    className='block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-0 font-openSansLight'
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
