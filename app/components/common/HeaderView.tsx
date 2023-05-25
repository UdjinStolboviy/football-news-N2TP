import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Environment} from '../../config/Environment';
import {Colors} from '../../utils/colors';

export interface HeaderViewProps {
  title?: string;
  containerStyle?: object;
}

export const HeaderView = (props: HeaderViewProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.text}>{props.title || Environment.getName()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.FFFFFF,
  },
});
