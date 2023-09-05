import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Links from '../lib/NavLinksData';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from 'next/router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [isScroll, setIsScroll] = useState(false);
  const [isNavProject, setIsNavProject] = useState(false);
  const router = useRouter(); // Use the useRouter hook to access the router

  const toggleNavMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        toggleNavMenu();
      }
    };

    const handleClickOutside = (e) => {
      if (
        e.target &&
        !e.target.closest('.nav-menu') &&
        !e.target.closest('.menu-button')
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  // if scroll position is below 100px or screensize is less than 768px set setIsOpen to true
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 || window.innerWidth < 768) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // check if the current page has in the slug the word 'projects'
  useEffect(() => {
    setIsNavProject(router.pathname.includes('projects')); // Use router.pathname to get the current pathname
  }, [router.pathname]); // Trigger the effect when the pathname changes

  const LinkComponent = isNavProject ? NextLink : ScrollLink;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`${
          isScroll
            ? 'bg-nav_header_footer text-gray-800 duration-700 shadow-lg'
            : 'bg-transparent text-gray-600'
        } fixed top-0 left-0 right-0 z-20`}
      >
        <div className='px-2 mx-auto sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            {/* Mobile menu hamburger button */}
            <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
              <button
                onClick={toggleNavMenu}
                type='button'
                className='menu-button inline-flex items-center justify-center p-2 text-gray-500 rounded-[3px] hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {isOpen ? (
                  <XIcon
                    className='block w-6 h-6 menu-button'
                    aria-hidden='true'
                  />
                ) : (
                  <MenuIcon
                    className='block w-6 h-6 menu-button'
                    aria-hidden='true'
                  />
                )}
              </button>
            </div>

            <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex items-center flex-shrink-1'>
                {/* Nav Logo Mobile */}
                <LinkComponent
                  href='/'
                  as={'/'}
                  to='home'
                  spy
                  smooth='true'
                  offset={isNavProject ? 0 : -63}
                  duration={500}
                  onClick={toggleMenu}
                >
                  <img
                    className='block w-auto h-8 lg:hidden'
                    src='/img/logo.png'
                    alt='Logo Mobile'
                  />
                </LinkComponent>

                {/* Nav Logo Desktop */}
                <LinkComponent
                  href='/'
                  to='home'
                  as={'/'}
                  spy
                  smooth='true'
                  offset={isNavProject ? 0 : -63}
                  duration={500}
                >
                  <img
                    className='hidden lg:block h-[40px] w-auto'
                    src='/img/logo-large-dark.png'
                    alt='Logo'
                  />
                </LinkComponent>
              </div>

              {/* Nav Links Desktop */}
              <div className='absolute right-0 hidden ml-4 md:block md:ml-6'>
                <div className='flex pt-3 space-x-1 md:space-x-4 lg:space-x-6'>
                  {/* Map over the Links array to render Nav Links */}
                  {Links.map((link) => (
                    <LinkComponent
                      key={link.id}
                      href={isNavProject ? `/${link.urlPrj}` : ''}
                      as={`/${link.urlPrj}`}
                      // as={`/${link.url}`}
                      to={link.url}
                      activeclass={isScroll ? 'activeGray' : 'active'}
                      spy
                      smooth='true'
                      duration={500}
                      offset={isNavProject ? 0 : -63}
                      className={
                        isNavProject
                          ? `${
                              link.urlPrj === '#projects'
                                ? 'activeGray'
                                : 'text-gray-800'
                            } px-1 md:px-2 lg:px-3 hover:text-black text-[1em] font-openSansLight`
                          : 'px-1 md:px-2 lg:px-3 text-[1em] font-openSansLight'
                      }
                    >
                      {link.name}
                    </LinkComponent>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isOpen ? '' : 'hidden'} nav-menu md:hidden pb-4`}>
            <div className='px-0 pt-1 pb-1 space-y-1'>
              {/* Map over the Links array to render mobile menu links */}
              {Links.map((link, index) => (
                <LinkComponent
                  key={index}
                  href={isNavProject ? `/${link.urlPrj}` : ''}
                  as={`/${link.urlPrj}`}
                  to={link.url}
                  activeclass={isScroll ? 'activeGray' : 'active'}
                  spy
                  smooth='true'
                  duration={600}
                  offset={isNavProject ? 0 : -63}
                  onClick={toggleMenu}
                  className={
                    isNavProject ? 'mobileNavPrj' : 'cursor-pointer mobileNav'
                  }
                >
                  <div className='mb-1 bg-gray-300'>
                    <div className='block px-3 py-2 text-sm text-gray-800 hover:bg-gray-700 hover:text-white rounded-0 font-openSansLight'>
                      {link.name}
                    </div>
                  </div>
                </LinkComponent>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
