import React from 'react';
import Image from 'next/future/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../../lib/queries';

import NavbarProject from '../../components/NavbarProject';

// const url = process.env;

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
      <div className='flex flex-col justify-center h-screen '>
        <h1>{post.attributes.Title}</h1>
        <Image
          className='object-cover'
          width={666}
          height={333}
          src={
            process.env.NEXT_PUBLIC_API_ENDPOINT +
            post.attributes.Cover.data.attributes.url
          }
          alt={post.attributes.Cover.data.attributes.alternativeText}
        />
        <p>{post.attributes.Description}</p>
        <p>{post.attributes.Content}</p>
      </div>
    </>
  );
}
