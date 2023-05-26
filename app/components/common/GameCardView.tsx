import React, {useEffect, useState} from 'react';
import {People} from '../../mobx/dto/people';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigatorConstants} from '../../utils/navigator-constants';

import {Colors} from '../../utils/colors';
import {Game} from '../../mobx/dto/game';

export interface GameCardViewProps {
  game: Game;
  index: number;
}

export const GameCardView = ({game, index}: GameCardViewProps) => {
  const navigation = useNavigation();
  const year = game.getDate().slice(0, 4);
  const month = game.getDate().slice(5, 7);
  const day = game.getDate().slice(8, 10);
  const time = game.getDate().slice(11, 16);

  return (
    <View style={[styles.container]}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 18,
            alignContent: 'center',
            paddingLeft: 12,
            width: '100%',
          }}>
          <Text
            style={[
              styles.textTime,
            ]}>{`${day}.${month}.${year}    ${time}`}</Text>
        </View>

        <View style={styles.mainInfoWrapper}>
          <Image
            style={{width: 24, height: 24}}
            source={{uri: game.getTeamsHomeLogo()}}
            loadingIndicatorSource={{uri: game.getTeamsHomeLogo()}}
          />
          <Text style={[styles.textPlyer]}>{`${game.getTeamsHomeName()}`}</Text>
        </View>
        <View style={{height: 1}} />
        <View style={styles.mainInfoWrapper}>
          <Image
            style={{width: 24, height: 24}}
            source={{uri: game.getTeamsAwayLogo()}}
            loadingIndicatorSource={{uri: game.getTeamsAwayLogo()}}
          />
          <Text style={[styles.textPlyer]}>{`${game.getTeamsAwayName()}`}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          // @ts-ignore
          navigation.navigate(NavigatorConstants.MATCH_SCREEN, {
            game: game,
          })
        }
        style={styles.button}>
        <Text style={styles.textButton}>Match Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 88,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  mainInfoWrapper: {
    flexDirection: 'row',
    height: 36,
    width: '400%',
    paddingLeft: 12,
    backgroundColor: Colors.ACACACA,
    alignItems: 'center',
  },
  textTime: {
    paddingTop: 2,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.FFFFFF,
  },
  textPlyer: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.OFOFOFO,
    paddingLeft: 5,
  },
  button: {
    width: 29,
    height: 90,
    paddingTop: 20,
    backgroundColor: Colors.C343443,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    width: 90,

    fontSize: 14,
    transform: [{rotate: '90deg'}],
    fontWeight: '400',
    color: Colors.FFFFFF,
  },
});
