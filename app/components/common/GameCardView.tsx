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
import {useInjection} from 'inversify-react';
import {LineupsStorage} from '../../mobx/storage/lineups-store';
import {Types} from '../../ioc/types';

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
  const lineupsStorage: LineupsStorage = useInjection(Types.LineupsStorage);

  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.9}
      onPress={() => {
        lineupsStorage.clearData();
        lineupsStorage.getLineupsTeams(game.getId());
        // @ts-ignore
        navigation.navigate(NavigatorConstants.MATCH_SCREEN, {
          game: game,
        });
      }}>
      <View style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 18,
            alignContent: 'center',
            paddingLeft: 12,
            width: '100%',
            backgroundColor: Colors.C4E4E4E,
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
      <View style={styles.button}>
        <Text style={styles.textButton}>Match Info</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 88,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 4,
  },
  mainInfoWrapper: {
    flexDirection: 'row',
    height: 36,
    width: '100%',
    paddingLeft: 12,
    backgroundColor: Colors.ACACACA,
    alignItems: 'center',
  },
  textTime: {
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
    position: 'absolute',
    right: 0,
    width: 29,
    height: 92,
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
