import React, { lazy, Suspense } from 'react';
import { Text } from 'react-native';

// Lazy loading for treeshaking stories and avoid storybook prototype issue
// see https://github.com/storybookjs/react-native/issues/20
const StorybookUI = lazy(() => import('../../storybook'));

const StorybookScreen: React.FC = () => {
	return (
		<Suspense fallback={<Text> loading </Text>}>
			<StorybookUI />
		</Suspense>
	);
};

export default StorybookScreen;
