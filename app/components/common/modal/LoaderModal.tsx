import React, {useEffect} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

export interface LoaderModalProps {
  visible: boolean;
}

export const LoaderModal = (props: LoaderModalProps) => {
  useEffect(() => {}, [props.visible]);

  return (
    <Modal animationType="none" transparent={true} visible={props.visible}>
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
