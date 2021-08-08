import { Button, Alert } from 'react-native';
import React from 'react';

export const CustomButton = () => {
	return <Button title='custom' onPress={() => Alert.alert('pressme')} />;
};
