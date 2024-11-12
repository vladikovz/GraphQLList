import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query ExampleQuery {
    countries {
      name
      emoji
      native
      currency
    }
  }
`;

type Country = {
  name: string;
  emoji: string;
  native: string;
  currency: string;
};

export type GetCountriesData = {
  countries: Country[];
};
