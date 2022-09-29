import React, { useEffect } from 'react';
import Image from 'next/future/image';
import initIsotope from '../components/common/initIsotope';

export default function Projects({ posts, allCategories }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <div id='projects' className='h-screen pt-0 bg-gray-400'>
        {/* Text */}
        <div className='flex flex-col items-center mx-auto text-center'>
          <h1 className='mt-12 section_header'>FEATURED PROJECTS</h1>

          <h2 className='mb-8 section_sub_header'>SOME EXAMPLES OF MY WORK</h2>
        </div>

        {/* ====== Nav-Categories Wrapper ====== */}
        <div className='flex justify-center w-full mx-auto cursor-pointer'>
          {/* set 'filtering' to css activate filtering  */}
          <div className='flex filtering'>
            <span
              data-filter='*'
              className='p-1 uppercase active hover:text-gray-50'
            >
              All
            </span>
            {/* map thru allCategories and place the results in a list    */}
            {allCategories.map((navCategory, index) => {
              return (
                <div key={index}>
                  <div className='p-1 filter'>
                    <span
                      className='uppercase hover:text-gray-50'
                      data-filter={`.${navCategory.category}`}
                    >
                      {navCategory.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*  ========== Posts Wrapper =========*/}
        <div className='flex justify-center text-center gallery bg-fuchsia-400'>
          {/* <div className='grid text-center gallery place-items-stretch bg-fuchsia-400 '> */}
          {posts.map((post) => (
            <div className='' key={post.id}>
              <div
                // set 'items' in css class to activate filtering
                className={`items ${post.categories
                  //  Replace from ${post.categories} all commas with ' '
                  .toString()
                  .replace(/,/g, ' ')} `}
              >
                <div className='flex  flex-col w-[450px] h-[300px]  bg-orange-500  p-[3px]'>
                  <span
                    data-filter={post.categories.toString().replace(/,/g, ' ')}
                  >
                    {post.categories.toString().replace(/,/g, ' ')}
                  </span>
                  {/* {console.log('post.category: ', post.categories)} */}
                  <Image
                    className='object-cover'
                    width={700}
                    height={300}
                    src={post.cover}
                    alt={post.alt}
                  />
                  <p className='section_body'>{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
