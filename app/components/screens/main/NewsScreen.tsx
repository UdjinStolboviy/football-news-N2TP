import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../../../utils/colors';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigator/types';
import {NavigatorConstants} from '../../../utils/navigator-constants';
import WebView from 'react-native-webview';
import {NoInternetConnectionView} from '../error/NoInternetConnectionView';
import {useNavigation} from '@react-navigation/native';
import {IconClose} from '../../common/icon/IconClose';
import {IconArrowLeft} from '../../common/icon/IconArrowLeft';
import {IconArrowRight} from '../../common/icon/IconArrowRight';
import {IconRefresh} from '../../common/icon/IconRefresh';

export interface NewsScreenParams {
  url: string;
}

export const NewsScreen = ({
  route,
}: StackScreenProps<RootStackParamList, NavigatorConstants.NEWS_SCREEN>) => {
  const url = route.params?.url;
  const navigation = useNavigation();
  const [errorShown, setErrorShown] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const counter = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      counter.current = counter.current + 1;
      if (counter.current >= 30) {
        if (loading) {
          setErrorShown(true);
        }
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}>
          <IconClose style={{margin: 10}} />

          <Text style={styles.textHead}>Close</Text>
        </TouchableOpacity>

        <View style={styles.mainWrapper}>
          {errorShown ? null : (
            <View style={[styles.webView]}>
              <WebView
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
                source={{uri: url}}
                onError={() => setErrorShown(true)}
              />
            </View>
          )}
          {errorShown ? (
            <View style={styles.error}>
              <NoInternetConnectionView />
            </View>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.batton}
          onPress={() => navigation.goBack()}>
          <View style={styles.wrapperArron}>
            <IconArrowLeft />
            <IconArrowRight style={{margin: 51}} />
          </View>
          <IconRefresh />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.OFOFOFO,
  },
  mainWrapper: {
    flex: 1,
  },
  textHead: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: Colors.FFFFFF,
  },
  wrapperArron: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 60,
    height: 60,
  },
  batton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    height: 60,
    backgroundColor: Colors.C343443,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 30,
    backgroundColor: Colors.C343443,
  },
  loader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.FFFFFF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  listWrapper: {
    flex: 1,
    marginTop: 16,
  },
  error: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
  },
});
