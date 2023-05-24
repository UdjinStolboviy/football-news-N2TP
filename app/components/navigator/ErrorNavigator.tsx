import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorConstants } from '../../utils/navigator-constants';
import { ErrorScreen } from '../screens/error/ErrorScreen';

const Stack = createStackNavigator();

export const ErrorNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigatorConstants.ERROR_SCREEN}
    >
      <Stack.Screen
        component={ErrorScreen}
        name={NavigatorConstants.ERROR_SCREEN}
      />
    </Stack.Navigator>
  );
};
