import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {Icon} from '@rneui/themed';
import {Colors} from '../../utils/colors';

export interface FansViewProps {
  textCanter: number;
  textCategory: string;
}

export const FansView = (props: FansViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.textCategory}</Text>
      <Text style={styles.text}>{props.textCanter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 6,
    color: Colors.B3B3B3,
    fontSize: 16,
  },
});
