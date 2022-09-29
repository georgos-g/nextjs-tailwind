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
      <div id='projects' className=' pt-0 bg-gray-600 h-screen'>
        <div>
          <div className='flex flex-col items-center  text-center mx-auto'>
            <h1 className='mt-12 section_header'>FEATURED PROJECTS</h1>

            <h2 className='section_sub_header bg-fuchsia-500 mb-8'>
              SOME EXAMPLES OF MY WORK
            </h2>
          </div>

          {/* Categories Nav Wrapper */}
          <div className='cursor-pointer flex bg-slate-400'>
            {/* activate filtering  */}
            <div className='filtering'>
              <span data-filter='*' className='active'>
                All
              </span>
              {/* map thru allCategories and place the results in a list    */}
              {allCategories.map((navCategory, index) => {
                return (
                  <div key={index}>
                    <div className='filter bg-slate-400'>
                      <span data-filter={`.${navCategory.category}`}>
                        {navCategory.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='gallery full-width flex content-center justify-center'>
            {/*  single project post*/}
            {posts.map((post) => (
              <div key={post.id}>
                <div
                  //  Replace from ${post.categories} all commas with ' '
                  className={`items ${post.categories
                    .toString()
                    .replace(/,/g, ' ')} `}
                >
                  <div className='flex flex-col p-[2px] mx-auto'>
                    <span
                      data-filter={post.categories
                        .toString()
                        .replace(/,/g, ' ')}
                    >
                      {post.categories.toString().replace(/,/g, ' ')}
                    </span>
                    {/* {console.log('post.category: ', post.categories)} */}
                    <Image
                      className='w-[600] h-[350px] object-cover'
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
      </div>
    </>
  );
}
