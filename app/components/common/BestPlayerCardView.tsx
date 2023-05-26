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

import {Colors} from '../../utils/colors';
import {BestPlayers} from '../../mobx/dto/best-players';

export interface BestPlayerCardViewProps {
  bestPlayer: BestPlayers;
  index: number;
}

export const BestPlayerCardView = ({
  bestPlayer,
  index,
}: BestPlayerCardViewProps) => {
  const firstName = bestPlayer.getFirstname().toUpperCase();
  const lastName = bestPlayer.getLastname().toUpperCase();
  const nationality = bestPlayer.getNationality().toUpperCase();
  const rating = Number(bestPlayer.getRating()) * 10;

  return (
    <View style={[styles.container]}>
      <View style={styles.mainWrapper}>
        <Text
          numberOfLines={1}
          style={[
            styles.textTitle,
          ]}>{`${firstName} ${lastName}, ${nationality}`}</Text>
        <Text style={[styles.textPosit]}>{bestPlayer.getPosition()}</Text>
      </View>
      <Text style={[styles.textTitle]}>{rating.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    padding: 14,
    marginBottom: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.ACACACA,
  },
  mainWrapper: {},
  textTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  textPosit: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.C474747,
  },
});
