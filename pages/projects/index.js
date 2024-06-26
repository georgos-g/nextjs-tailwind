import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import initIsotope from '../../common/initIsotope';
import { MoreDetailsIcon } from '../../components/Icons';

export default function Projects({ posts, allCategories }) {
  useEffect(() => {
    initIsotope();
  }, []);
  return (
    <>
      <section id='projects' className='pt-0 mx-auto bg-gray-200 2xl:h-screen'>
        {/* ========= Text Header ========== */}
        <div className='flex flex-col items-center mx-auto text-center'>
          <h1 className='mt-16 mb-10 section_header'>FEATURED PROJECTS</h1>

          <h2 className='mb-10 section_sub_header'>SOME EXAMPLES OF MY WORK</h2>
        </div>

        {/* ====== Nav-Categories  ======= */}
        <div className='flex justify-center w-full mx-auto cursor-pointer'>
          {/* set 'filtering' to css activate filtering  */}
          <div className='filtering'>
            <div className='flex filter'>
              <span
                className='px-1 py-1 text-sm text-gray-800 md:text-base md:px-3 active_category hover:text-gray-400'
                data-filter='*'
              >
                ALL
              </span>
              {/* check if allCategories exist, map thru them and place the results in a list    */}
              {allCategories &&
                allCategories.map((navCategory, index) => (
                  <span
                    key={index}
                    className='px-1 py-1 text-sm text-gray-800 md:text-base md:px-3 hover:text-gray-400'
                    data-filter={`.${navCategory.category}`}
                  >
                    {navCategory.category.toUpperCase()}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/*  ========== Posts Content Wrapper =========*/}
        <div className='max-w-[1920px] pb-2 pt-4 flex flex-col md:flex-row flex-wrap justify-center w-full mx-auto gallery '>
          {/* check if posts exist map thru them and save the results in a list sorted by date */}
          {posts &&
            posts
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((post, index) => (
                <div className='' key={index}>
                  <Link href={`projects/${post.slug}`} key={post.id}>
                    {/* ======= Item ======== */}
                    <div
                      // set 'items' and category in css class to activate filtering
                      className={`lg:w-1/3 md:w-1/2  items ${post.categories
                        .toString()
                        // replace comma with space
                        .replace(/,/g, ' ')} `}
                    >
                      {/* Img and Text */}
                      <div className='flex flex-col justify-center w-full h-full divide-y md:divide-y-0 z-1 '>
                        {/* create a div with a white line only on the bottom 1px */}
                        <Image
                          className='object-cover'
                          width={700}
                          height={400}
                          src={post.cover}
                          alt={post.alt}
                        />
                        {/* Hover  */}

                        <div className='absolute z-10 w-full h-full opacity-100 cursor-pointer md:opacity-0 bg-black/70 md:hover:opacity-100 hover:transition hover:ease-in-out hover:duration-1000'>
                          {/* Hover Content */}
                          {/* move div on Hover 20px to right  */}
                          <div className='flex flex-col justify-center w-full h-full px-8 hover:duration-1000 sm:hover:translate-x-4'>
                            {/* Category */}
                            {/* <span
                              data-filter={post.categories
                                .toString()
                                .replace(/,/g, ' ')}
                            >
                              {post.categories.toString().replace(/,/g, ' ')}
                            </span> */}

                            {/* Title */}
                            <h1 className='mb-1 text-[1em] xs:text-[1.25em] text-white uppercase'>
                              {post.title}
                            </h1>
                            {/* Description */}
                            <p className='text-gray-400 text-[0.8em] xs:text-[1em] pb-6 uppercase '>
                              {post.description}
                            </p>
                            <div className='flex justify-start w-[140px] content-center  hover:justify-between  hover:text-white hover:transition-transform '>
                              <div className='text-[13px] pr-1 pt-1 text-gray-500 hover:text-white uppercase drop-shadow-sm '>
                                more details
                              </div>
                              <div className='pl-2'>
                                <MoreDetailsIcon />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </section>
    </>
  );
}
