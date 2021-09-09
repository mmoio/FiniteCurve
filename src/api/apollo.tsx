import {ApolloClient, NormalizedCacheObject, InMemoryCache} from "@apollo/client";

// Initialize Apollo Client
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

