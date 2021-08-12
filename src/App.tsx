import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Config from 'react-native-config';
import FiniteCurveScreen from './views/FiniteCurve';
import StorybookScreen from './views/StorybookScreen';

// Initialize Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

const IS_STORYBOOK = Config.LOAD_STORYBOOK === 'true';
const Stack = createNativeStackNavigator();

const App: React.FC = () => (
	<ApolloProvider client={client}>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={IS_STORYBOOK ? StorybookScreen : FiniteCurveScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	</ApolloProvider>
);

export default App;
