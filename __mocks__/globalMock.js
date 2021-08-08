jest.mock('@storybook/react-native', () => ({
	getStorybookUI: jest.fn(),
	addDecorator: jest.fn(),
	configure: jest.fn(),
}));
