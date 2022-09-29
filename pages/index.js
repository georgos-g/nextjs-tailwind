import React from 'react';
import Head from 'next/head';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import HomeSection from './Home';
import Projects from './Projects';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../lib/queries';

export default function Home({ posts, allCategories }) {
  return (
    <>
      {/* add a responsive fullscreen bg-img to section */}
      <Head>
        <title>Georgos Gakis | Fronend Developer & Media Designer </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeSection />
      <Services />
      {/* Projects Page with posts & allCategories props  */}
      <Projects posts={posts} allCategories={allCategories} />
      <About />
      <Contact />
    </>
  );
}
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS_AND_CATEGORIES,
  });

  const posts = data.posts.data.map((post) => {
    return {
      id: post.id,
      title: post.attributes.Title,
      content: post.attributes.Content,
      cover:
        process.env.STRAPI_ENDPOINT + post.attributes.Cover.data.attributes.url,
      alt: post.attributes.Cover.data.attributes.alternativeText,

      // get all categories from each post
      categories: post.attributes.categories.data.map((category) => {
        return category.attributes.Category;
      }),
    };
  });

  // fetch all categories
  const allCategories = data.categories.data.map((category) => {
    return {
      id: category.id,

      category: category.attributes.Category,
    };
  });
  // console.log('allCategories: ', allCategories);

  return {
    props: {
      posts,
      allCategories,
    },
  };
}
