import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';
import React from 'react';
import FiniteCurveScreen from './views/FiniteCurve';
import StorybookScreen from './views/StorybookScreen';
import Config from 'react-native-config';

// Initialize Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

const IS_STORYBOOK = Config.LOAD_STORYBOOK === 'true';

const App: React.FC = () => (
	<ApolloProvider client={client}>
		{ IS_STORYBOOK? <StorybookScreen/> : <FiniteCurveScreen/> }
	</ApolloProvider>
);

export default App;

