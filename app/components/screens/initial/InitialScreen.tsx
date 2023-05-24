import React, {useEffect, useRef} from 'react';
import {
  AppState,
  Image,
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {observer} from 'mobx-react';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {NavigatorConstants} from '../../../utils/navigator-constants';

const {StatusBarManager} = NativeModules;

export const InitialScreen = observer(() => {
  const navigation = useNavigation();
  const initializationStorage: InitializationStorage = useInjection(
    Types.InitializationStorage,
  );
  const initializationSuccessful =
    initializationStorage.getInitializationSuccessful();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    checkInitializationStatus();
  }, [initializationSuccessful]);

  const checkInitializationStatus = () => {
    if (initializationSuccessful !== null) {
      if (initializationSuccessful) {
        navigation.navigate(NavigatorConstants.BOTTOM_TAB_STACK as never);
      } else {
        navigation.navigate(NavigatorConstants.ERROR_STACK as never);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.loaderContainer}>
        <Text style={styles.loaderText}>InitScreen</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    paddingBottom: '14%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loaderText: {
    color: Colors.B3B3B3,
    fontSize: 16,
  },
});
