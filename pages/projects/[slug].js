import React from 'react';
import Image from 'next/future/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../../lib/queries';
import Slider from '../../components/Slider';

import NavbarProject from '../../components/NavbarProject';

// get static paths for each post
export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS_AND_CATEGORIES,
  });

  const paths = data.posts.data.map((post) => {
    return {
      params: {
        slug: post.attributes.Slug,
        id: post.id,
      },
    };
  });

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

  const post = await data.posts.data.find((post) => {
    return post.attributes.Slug === params.slug;
  });

  return {
    props: {
      post,
    },
  };
}

export default function Project({ post }) {
  return (
    <>
      <NavbarProject />
      {/* White space top */}
      <div className='pt-[63px]'></div>

      {/* Project Wrapper */}
      <div className='h-screen bg-slate-200'>
        {/* Project Headers */}
        {/* <div className='container flex justify-center mx-auto py-14'> */}
        <div className='container justify-center mx-auto py-14'>
          <div className='px-4 sm:px-8 min-h-72'>
            <div className=''>
              <h1 className='project_title'>{post.attributes.Title}</h1>
              <h2 className='pb-10 project_sub_title'>
                {post.attributes.Description}
              </h2>
            </div>

            {/* Image & Text */}
            <div className='flex flex-wrap justify-center bg-slate-50'>
              {/* Image */}

              <div className='max-w-full lg:w-1/2'>
                <div className=''>
                  {/* if post has no media entries show Cover img */}
                  {post.attributes.Media.data.length === 0 ? (
                    <Image
                      key={post.id}
                      className='object-cover '
                      width={700}
                      height={500}
                      src={
                        process.env.NEXT_PUBLIC_API_ENDPOINT +
                        post.attributes.Cover.data.attributes.url
                      }
                      alt={
                        post.attributes.Cover.data.attributes.alternativeText
                      }
                    />
                  ) : (
                    <Slider {...post} />
                  )}
                </div>
              </div>
              {/* Text */}
              <div className='px-4 py-6 sm:px-8 lg:w-1/2'>
                {/* <div className='px-4 py-6 sm:px-8'> */}
                <p>{post.attributes.Content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
