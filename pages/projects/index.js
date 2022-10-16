import React, { useEffect } from 'react';
import Image from 'next/future/image';
import initIsotope from '../../common/initIsotope';
import Link from 'next/link';

export default function Projects({ posts, allCategories }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <div id='projects' className='h-full pt-0 mx-auto bg-gray-400'>
        {/* ========= Text Header ========== */}
        <div className='flex flex-col items-center mx-auto text-center'>
          <h1 className='mt-12 section_header'>FEATURED PROJECTS</h1>

          <h2 className='mb-8 section_sub_header'>SOME EXAMPLES OF MY WORK</h2>
        </div>

        {/* ====== Nav-Categories  ======= */}
        <div className='flex justify-center w-full mx-auto cursor-pointer'>
          {/* set 'filtering' to css activate filtering  */}
          <div className='filtering'>
            <div className='flex filter'>
              <span
                data-filter='*'
                className='p-2 uppercase active hover:text-gray-50'
              >
                All
              </span>
              {/* map thru allCategories and place the results in a list    */}
              {allCategories.map((navCategory, index) => {
                return (
                  <div className='px-1 py-2 md:px2 filter ' key={index}>
                    <span
                      className='uppercase hover:text-gray-50'
                      data-filter={`.${navCategory.category}`}
                    >
                      {navCategory.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*  ========== Posts Content Wrapper =========*/}
        <div className='max-w-[1920px] pt-4 flex flex-col md:flex-row flex-wrap justify-center w-full mx-auto gallery'>
          {/* map thru posts and save the results in a list sorted by date */}
          {posts.map((post, index) => (
            <div className='' key={index}>
              {/* {console.log('post.slug: ', post.slug)} */}
              {/* {console.log('post.slug: ', `/projects/${post.slug}`)} */}
              <Link href={`projects/${post.slug}`} key={post.id}>
                {/* ======= Item ======== */}
                <div
                  // set 'items' and category in css class to activate filtering
                  className={`lg:w-1/3 md:w-1/2  pb-1 md:pb-0 items ${post.categories
                    .toString()
                    // replace comma with space
                    .replace(/,/g, ' ')} `}
                >
                  {/* Img and Text */}
                  <div className='z-1'>
                    <div
                      className={`flex w-full h-full flex-col justify-center `}
                    >
                      <Image
                        className='object-cover'
                        width={999}
                        height={444}
                        src={post.cover}
                        alt={post.alt}
                      />
                      {/* Hover  */}
                      <div className='absolute z-10 w-full h-full opacity-100 cursor-pointer md:opacity-0 bg-black/70 md:hover:opacity-100 hover:transition hover:ease-in-out hover:duration-700'>
                        {/* Hover Content */}
                        <div className='flex flex-col justify-center w-full h-full px-8'>
                          {/* Category */}
                          <span
                            data-filter={post.categories
                              .toString()
                              .replace(/,/g, ' ')}
                          >
                            {post.categories.toString().replace(/,/g, ' ')}
                          </span>
                          {/* Title */}
                          <h1 className='mb-2 text-[1.25em] text-white uppercase'>
                            {post.title}
                          </h1>
                          {/* Description */}
                          <p className='text-gray-400 text-[1em] pb-6 uppercase'>
                            {post.description}
                            {/* {console.log('post.slug: ', post.slug)} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
