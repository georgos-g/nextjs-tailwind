import React from 'react';
import { Services } from './services';
import About from './about';
import Contact from './contact';
import HomeSection from './home';
import Projects from './projects';
import Navbar from '../components/Navbar';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS_AND_CATEGORIES } from '../lib/queries';

export default function Home({ posts, allCategories }) {
  return (
    <>
      {/* add a responsive fullscreen bg-img to section */}

      <Navbar />
      <HomeSection />
      <Services />
      <About />
      {/* Projects Page with posts & allCategories props  */}
      <Projects posts={posts} allCategories={allCategories} />
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

  //* map thru posts and save the results in a list sorted by date */
  const posts = data.posts.data.map((post) => {
    return {
      id: post.id,
      date: post.attributes.Date,
      title: post.attributes.Title,
      description: post.attributes.Description,
      content: post.attributes.Content,
      slug: post.attributes.Slug,
      cover:
        process.env.NEXT_PUBLIC_API_ENDPOINT +
        post?.attributes.Cover.data.attributes.url,

      // show all Media img in the post
      media: post?.attributes.Media.data.map((media) => {
        return {
          id: media.id,
          url: process.env.NEXT_PUBLIC_API_ENDPOINT + media.attributes.url,
          alt: media.attributes.alternativeText,
        };
      }),

      alt: post?.attributes.Cover.data.attributes.alternativeText,

      // Seo
      seo: {
        title: post.attributes.PostSeo.SeoTitle,
        description: post.attributes.PostSeo.SeoDescription,
        id: post.attributes.PostSeo.id,
      },

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

  return {
    props: {
      posts,
      allCategories,
    },
  };
}
