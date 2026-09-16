import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    }),
  });
}
