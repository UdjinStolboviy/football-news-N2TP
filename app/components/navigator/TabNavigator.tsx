import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorConstants} from '../../utils/navigator-constants';

import {Test3Screen} from '../screens/test-screen/Test3Screen';
import {Test1Screen} from '../screens/test-screen/Test1Screen';
import {Test2Screen} from '../screens/test-screen/Test2Screen';
import {MainScreen} from '../screens/main/MainScreen';
import {BestPlayersScreen} from '../screens/main/BestPlayersScreen';
import {FavoritesScreen} from '../screens/main/FavoritesScreen';
import {MatchScreen} from '../screens/main/MatchScreen';

const Stack = createStackNavigator();

export const TabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerTitleAlign: 'center'}}
      initialRouteName={NavigatorConstants.MAIN_SCREEN}>
      <Stack.Screen
        component={MainScreen}
        name={NavigatorConstants.MAIN_SCREEN}
      />
      <Stack.Screen
        component={BestPlayersScreen}
        name={NavigatorConstants.BEST_PLAYERS_SCREEN}
      />
      <Stack.Screen
        component={FavoritesScreen}
        name={NavigatorConstants.FAVORITE_SCREEN}
      />
      <Stack.Screen
        name={NavigatorConstants.MATCH_SCREEN}
        component={MatchScreen}
      />
    </Stack.Navigator>
  );
};
