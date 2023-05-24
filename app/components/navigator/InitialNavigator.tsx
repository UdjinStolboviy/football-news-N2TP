import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorConstants } from '../../utils/navigator-constants';
import { InitialScreen } from '../screens/initial/InitialScreen';

const Stack = createStackNavigator();

export const InitialNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigatorConstants.INITIAL_SCREEN}
    >
      <Stack.Screen
        component={InitialScreen}
        name={NavigatorConstants.INITIAL_SCREEN}
      />
    </Stack.Navigator>
  );
};
