/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'reflect-metadata';
import React, {useEffect, useState} from 'react';

import {Container} from 'inversify';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'inversify-react';

import {Button, Icon} from '@rneui/themed';

import container from './app/ioc/container';
import {Types} from './app/ioc/types';
import {InitializationService} from './app/service/initializer/initialization-service';
import {initItemsContext} from './app/context/context-initializer';
import {NavigatorConstants} from './app/utils/navigator-constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigationContainer} from './app/components/navigator/RootNavigationContainer';
import {SystemModal} from './app/components/common/modal/SystemModal';

const App = () => {
  const [dependencies, setDependencies] = useState<Container | null>(null);
  const [initialRouteName, setInitialRouteName] = useState<string | null>(null);

  useEffect(() => {
    createClientDate().then((dbClientCreated: boolean) => {
      if (dbClientCreated) {
        initialize();
      }
    });
  }, []);

  const createClientDate = async (): Promise<boolean> => {
    try {
      setDependencies(container);
      setInitialRouteName(NavigatorConstants.INITIAL_STACK);
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
      return true;
    } catch (e) {
      setInitialRouteName(NavigatorConstants.ERROR_STACK);
      setDependencies(container);
      SplashScreen.hide();
      return false;
    }
  };

  const initialize = async () => {
    const initializationService: InitializationService = container.get(
      Types.InitializationService,
    );
    initItemsContext();
    await initializationService.initialize();
  };

  if (dependencies && initialRouteName) {
    return (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <Provider container={dependencies}>
            <RootNavigationContainer
              initialRouteName={initialRouteName as any}
            />
            <SystemModal />
          </Provider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
};

export default App;
