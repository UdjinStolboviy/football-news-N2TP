import React, {useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {Texts} from '../../../utils/texts';
import {SystemModalsStorage} from '../../../mobx/storage/system-modals-storage';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';

export interface ErrorModalProps {
  visible: boolean;
}

export const ErrorModal = (props: ErrorModalProps) => {
  const systemModalsStorage: SystemModalsStorage = useInjection(
    Types.SystemModalsStorage,
  );
  const closeTimeout: number = 1000;

  useEffect(() => {
    setTimeout(() => {
      systemModalsStorage.setErrorVisible(false);
    }, closeTimeout);
  }, [props.visible]);

  const onPress = () => {
    systemModalsStorage.setErrorVisible(false);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.mainWrapper}>
          <Text style={styles.text}>{Texts.ERROR}</Text>
          <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            activeOpacity={1}>
            <Text style={styles.text}>{Texts.ERROR}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    paddingHorizontal: 20,
  },
  mainWrapper: {
    height: 44,
    width: '100%',
    backgroundColor: Colors.B3B3B3,
    borderRadius: 12,
    flexDirection: 'row',
    paddingLeft: 12,
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    color: Colors.B3B3B3,
  },
  button: {
    position: 'absolute',
    height: '100%',
    right: 0,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
