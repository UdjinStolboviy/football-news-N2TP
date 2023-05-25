import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigatorConstants} from '../../../utils/navigator-constants';
import {TabBar} from './TabBar';
import {TabNavigator} from '../TabNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={TabBar}
      initialRouteName={NavigatorConstants.TAB_SCREEN_TAB}>
      <Tab.Screen
        name={NavigatorConstants.TAB_SCREEN_TAB}
        component={TabNavigator}
      />
    </Tab.Navigator>
  );
};
