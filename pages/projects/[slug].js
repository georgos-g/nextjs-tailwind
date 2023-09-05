import React from 'react';
import Image from 'next/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../../lib/queries';
import Slider from '../../components/Slider';
import Link from 'next/link';

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
  return (
    <>
      <Navbar />

      {/* White space top */}
      <div className='pt-[63px]'></div>

      {/* Project Wrapper */}
      <div className='sm:h-screen bg-slate-200'>
        {/* Project Headers */}
        <div className='container justify-center mx-auto py-14'>
          <div className='px-4 sm:px-8 min-h-72'>
            <div className=''>
              <h1 className='project_title'>{Title}</h1>
              <h2 className='pb-10 project_sub_title'>{Description}</h2>
            </div>

            {/* Image & Text */}
            <div className='flex flex-wrap justify-center h-full bg-slate-50'>
              {/* Image */}
              <div className='h-full max-w-full lg:w-1/2'>
                <div className=''>
                  {/* if post has no media entries show Cover img */}
                  {Media.data.length === 0 ? (
                    <Image
                      key={post.id}
                      className='object-cover'
                      width={700}
                      height={500}
                      src={Cover.data.attributes.url}
                      alt={Cover.data.attributes.alternativeText}
                    />
                  ) : (
                    <Slider {...post} />
                  )}
                </div>
              </div>
              {/* Text */}
              <div className='px-6 py-5 lg:py-8 sm:px-8 lg:w-1/2'>
                {/* show {postContent} in html format */}
                <div dangerouslySetInnerHTML={{ __html: postContent }} />
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
