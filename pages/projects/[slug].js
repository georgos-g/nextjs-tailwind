import { ApolloClient, InMemoryCache } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from '../../components/Slider';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../../lib/queries';

// import AudioPlayer from '../../components/AudioPlayer';
import Navbar from '../../components/Navbar';
import markdownToHtml from '../../lib/markdownToHtml';

// get static paths for each post
export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS_AND_CATEGORIES,
  });

  const paths = data.posts.data.map((post) => ({
    params: {
      slug: post.attributes.Slug,
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// get static props for each post
export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS_AND_CATEGORIES,
  });

  const post = data.posts.data.find(
    (post) => post.attributes.Slug === params.slug
  );

  // convert markdown from post content to html
  const postContent = await markdownToHtml(post.attributes.Content);
  return {
    props: {
      post,
      postContent,
    },
  };
}

export default function Project({ post, postContent }) {
  const { Title, Description, Cover, Media } = post.attributes;

  const imgStyles = {
    position: 'relative',
    overflow: 'hidden',
    height: '400px',
  };
  return (
    <>
      <Navbar />

      {/* White space top */}
      <div className='pt-[63px]'></div>

      {/* Project Wrapper */}
      <div className='bg-slate-200'>
        {/* Project Headers */}
        <div className='container justify-center mx-auto py-14'>
          <div className='px-4 sm:px-8 min-h-72'>
            <div className=''>
              <h1 className='project_title'>{Title}</h1>
              <h2 className='pb-10 project_sub_title'>{Description}</h2>
            </div>

            {/* Image & Text -----*/}
            <div className='flex flex-wrap justify-center h-full bg-slate-50'>
              {/* Image */}
              <div className='w-full xl:w-1/2'>
                <div className=''>
                  {/* if post has no media entries show Cover img */}
                  {Media.data.length === 0 ? (
                    <Image
                      key={post.id}
                      src={
                        Cover.data.attributes.url
                        //   .replace(
                        //   'upload/',
                        //   'upload/f_auto/q_auto:best/'
                        // )
                      }
                      alt={Cover.data.attributes.alternativeText}
                      width={600}
                      height={400}
                      className='object-cover w-full h-full'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  ) : (
                    <Slider {...post} />
                  )}
                </div>
              </div>
              {/* Text */}
              <div className='flex flex-col justify-between px-4 py-4 lg:py-2 lg:pt-5 sm:px-6 xl:w-1/2'>
                {/* show {postContent} in html format */}
                <div
                  dangerouslySetInnerHTML={{ __html: postContent }}
                  className='pb-2'
                />
              </div>
            </div>
            <div className='flex justify-center lg:justify-end '>
              <Link href='/#projects'>
                <div className='flex items-center justify-center w-48 px-3 py-2 mt-6 font-bold text-white uppercase rounded-none text-md bg-slate-500 hover:bg-slate-700'>
                  Back to Projects
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
