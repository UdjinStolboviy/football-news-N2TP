import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigatorConstants} from '../../../utils/navigator-constants';
import {TabBar} from './TabBar';
import {Test3Navigator} from '../Test3Navigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={TabBar}
      initialRouteName={NavigatorConstants.TEST2_TAB}>
      <Tab.Screen
        name={NavigatorConstants.TEST2_TAB}
        component={Test3Navigator}
      />
    </Tab.Navigator>
  );
};
