import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {IconDashboard} from '../icon/IconDashboard';
import {IconBestPlayers} from '../icon/IconBestPlayers';
import {IconFavorites} from '../icon/IconFavorites';

export interface ButtonNawTabProps extends TouchableOpacityProps {
  buttonNumber: number;
  activeNumber: number;
}

export const ButtonNawTab = (props: ButtonNawTabProps) => {
  const activeColor = () => {
    if (props.activeNumber === props.buttonNumber) {
      return Colors.FFFFFF;
    } else {
      return Colors.ACACACA;
    }
  };
  const text = () => {
    if (props.buttonNumber === 0) {
      return 'Dashboard';
    } else if (props.buttonNumber === 1) {
      return 'Best Players';
    } else if (props.buttonNumber === 2) {
      return 'Favorites';
    }
  };
  const choseButton = () => {
    switch (props.buttonNumber) {
      case 0:
        return (
          <View style={styles.wrapperButton}>
            <IconDashboard color={activeColor()} />
            <Text style={[styles.text, {color: activeColor()}]}>{text()}</Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.wrapperButton}>
            <IconBestPlayers color={activeColor()} />
            <Text style={[styles.text, {color: activeColor()}]}>{text()}</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.wrapperButton}>
            <IconFavorites color={activeColor()} />
            <Text style={[styles.text, {color: activeColor()}]}>{text()}</Text>
          </View>
        );
      default:
        break;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[props.style, styles.container]}>
      {choseButton()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '34%',
    height: 53,
    flexDirection: 'row',
    backgroundColor: Colors.OFOFOFO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
  },
});
