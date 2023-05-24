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
  ImageBackground,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {observer} from 'mobx-react';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {UIActivityIndicator} from 'react-native-indicators';
import {NavigatorConstants} from '../../../utils/navigator-constants';
import {Environment} from '../../../config/Environment';

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
    // if (initializationSuccessful !== null) {
    //   if (initializationSuccessful) {
    //     navigation.navigate(NavigatorConstants.BOTTOM_TAB_STACK as never);
    //   } else {
    //     navigation.navigate(NavigatorConstants.ERROR_STACK as never);
    //   }
    // }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('./../../../../assets/img/splash_1_1.png')}
        style={styles.img}
      />
      <View style={styles.wrapperText}>
        <Text style={styles.loaderText}>{Environment.getName()}</Text>
      </View>
      <View style={styles.loaderContainer}>
        <UIActivityIndicator color="white" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    paddingBottom: '14%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapperText: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '40%',
    paddingBottom: '14%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loaderText: {
    color: Colors.C00509A,
    fontSize: 16,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
