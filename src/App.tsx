import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Config from 'react-native-config';
import {client} from './api/apollo';
import {navigationRef} from './navigation/NavigationService';
import FiniteCurveScreen from './views/FiniteCurveScreen';
import ProfileScreen from './views/ProfileScreen';
import StorybookScreen from './views/StorybookScreen';

// Load storybook modr if the environment has a LOAD_STORYBOOK=true variable
// https://storybook.js.org/
const LOAD_STORYBOOK = Config.LOAD_STORYBOOK === 'true';
const Stack = createNativeStackNavigator();

const App: React.FC = () => (
	<ApolloProvider client={client}>
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={LOAD_STORYBOOK ? StorybookScreen : FiniteCurveScreen} />
				<Stack.Screen name='Profile' component={ProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	</ApolloProvider>
);

export default App;
