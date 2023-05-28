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
import {LineupsStorage} from '../../mobx/storage/lineups-store';
import {useInjection} from 'inversify-react';
import {Types} from '../../ioc/types';

export interface FavoritesGameCardViewProps {
  game: Game;
  index: number;
}

export const FavoritesGameCardView = ({
  game,
  index,
}: FavoritesGameCardViewProps) => {
  const navigation = useNavigation();
  const year = game.getDate().slice(0, 4);
  const month = game.getDate().slice(5, 7);
  const day = game.getDate().slice(8, 10);
  const time = game.getDate().slice(11, 16);
  const lineupsStorage: LineupsStorage = useInjection(Types.LineupsStorage);

  return (
    <View style={[styles.container]}>
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
          <View style={styles.wrapperInfo}>
            <Image
              style={{width: 24, height: 24}}
              source={{uri: game.getTeamsHomeLogo()}}
              loadingIndicatorSource={{uri: game.getTeamsHomeLogo()}}
            />
            <Text
              style={[styles.textPlyer]}>{`${game.getTeamsHomeName()}`}</Text>
          </View>
          <Text
            style={[styles.textPlyer]}>{`${game.getTeamsHomeGoals()}`}</Text>
        </View>
        <View style={{height: 1}} />
        <View style={styles.mainInfoWrapper}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              lineupsStorage.clearData();
              lineupsStorage.getLineupsTeams(game.getId());
              // @ts-ignore
              navigation.navigate(NavigatorConstants.MATCH_SCREEN, {
                game: game,
              });
            }}>
            <View style={styles.wrapperInfo}>
              <Image
                style={{width: 24, height: 24}}
                source={{uri: game.getTeamsAwayLogo()}}
                loadingIndicatorSource={{uri: game.getTeamsAwayLogo()}}
              />
              <Text
                style={[styles.textPlyer]}>{`${game.getTeamsAwayName()}`}</Text>
            </View>
          </TouchableOpacity>

          <Text
            style={[styles.textPlyer]}>{`${game.getTeamsAwayGoals()}`}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => game.setFavorite(false)}
        style={styles.button}>
        <Text style={styles.textButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 88,
    marginBottom: 39,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wrapperInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mainInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 36,
    width: '100%',
    paddingLeft: 12,
    paddingRight: 10,
    backgroundColor: Colors.ACACACA,
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
    zIndex: 1,
    bottom: -23,
    width: 118,
    height: 20,
    backgroundColor: Colors.C4E4E4E,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.FFFFFF,
  },
});
