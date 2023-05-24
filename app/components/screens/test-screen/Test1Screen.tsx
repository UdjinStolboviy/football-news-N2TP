import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {Texts} from '../../../utils/texts';
import {useNavigation} from '@react-navigation/native';
import {InitializationService} from '../../../service/initializer/initialization-service';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';

export const Test1Screen = () => {
  const navigation = useNavigation();
  const initService: InitializationService = useInjection(
    Types.InitializationService,
  );
  const initStorage: InitializationStorage = useInjection(
    Types.InitializationStorage,
  );

  const click = () => {
    initStorage.setInitializationSuccessful(null);
    navigation.goBack();
    initService.initialize();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.bigText}>{'Test1Screen'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.FFFFFF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainWrapper: {
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.B3B3B3,
  },
});
