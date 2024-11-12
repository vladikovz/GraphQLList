import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const API_ENDPOINT = 'https://countries.trevorblades.com/graphql';

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloProviderWrapper;
