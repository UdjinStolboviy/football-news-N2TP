import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

export interface ButtonTextProps extends TouchableOpacityProps {
  text: string;
}

export const ButtonText = (props: ButtonTextProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[props.style, styles.container]}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    borderRadius: 54,
    backgroundColor: Colors.B3B3B3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 6,
    color: Colors.FFFFFF,
    fontSize: 16,
  },
});
