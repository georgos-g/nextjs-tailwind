import React from 'react';
import Image from 'next/future/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../../lib/queries';

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
      <div className='pt-[63px]'></div>
      <div className='px-8 py-4 bg-gray-600 min-h-72'>
        <div className=' max-w-7xl'>
          <h1 className='project_title'>{post.attributes.Title}</h1>
          <h2 className='project_sub_title'>{post.attributes.Description}</h2>
        </div>
        {/* Image */}
        <div className='flex flex-col justify-center '>
          <Image
            className='object-cover py-4'
            width={666}
            height={333}
            src={
              process.env.NEXT_PUBLIC_API_ENDPOINT +
              post.attributes.Cover.data.attributes.url
            }
            alt={post.attributes.Cover.data.attributes.alternativeText}
          />
          {/* Text */}

          <p>{post.attributes.Content}</p>
        </div>
      </div>
    </>
  );
}
