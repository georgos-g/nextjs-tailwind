import { gql } from '@apollo/client';

export const GET_ALL_POSTS_AND_CATEGORIES = gql`
  query Posts {
    posts {
      data {
        id
        attributes {
          Title
          Slug
          Date
          categories {
            data {
              id
              attributes {
                Category
              }
            }
          }
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
                ext
                alternativeText
              }
            }
          }
        }
      }
    }
    categories {
      data {
        id
        attributes {
          Category
        }
      }
    }
  }
`;
