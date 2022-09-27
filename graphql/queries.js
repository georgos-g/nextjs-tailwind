import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query Posts {
    posts {
      data {
        id
        attributes {
          Title
          Slug
          Date
          Content
          PostSeo {
            id
            SeoTitle
            SeoDescription
          }
          Cover {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_POSTS };
