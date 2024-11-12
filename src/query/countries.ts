import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query ExampleQuery {
    countries {
      name
      code
      emoji
    }
  }
`;
