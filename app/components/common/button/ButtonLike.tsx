import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {Icon} from '@rneui/themed';

export interface ButtonLikeProps extends TouchableOpacityProps {
  favorie: boolean;
}

export const ButtonLike = (props: ButtonLikeProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[props.style, styles.container]}>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color={props.favorie ? '#f50' : '#a3968f'}
        //onPress={() => console.log('hello')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 56,
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
