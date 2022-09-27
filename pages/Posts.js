import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries';
import Image from 'next/future/image';

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>

          <Image width={600} height={400} src={post.cover} alt={post.alt} />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
  // ===== fetch POSTS =====
  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  const posts = data.posts.data.map((post) => {
    return {
      id: post.id,
      title: post.attributes.Title,
      content: post.attributes.Content,
      cover:
        process.env.STRAPI_ENDPOINT + post.attributes.Cover.data.attributes.url,
      alt: post.attributes.Cover.data.attributes.alternativeText,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
export default Posts;
