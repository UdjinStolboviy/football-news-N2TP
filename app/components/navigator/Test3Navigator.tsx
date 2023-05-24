import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorConstants} from '../../utils/navigator-constants';

import {Test3Screen} from '../screens/test-screen/Test3Screen';
import {Test1Screen} from '../screens/test-screen/Test1Screen';
import {Test2Screen} from '../screens/test-screen/Test2Screen';

const Stack = createStackNavigator();

export const Test3Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorConstants.TEST2_SCREEN}>
      <Stack.Screen
        component={Test2Screen}
        name={NavigatorConstants.TEST2_SCREEN}
      />
    </Stack.Navigator>
  );
};
