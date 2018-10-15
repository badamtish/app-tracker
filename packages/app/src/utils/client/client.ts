import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

export const link = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});