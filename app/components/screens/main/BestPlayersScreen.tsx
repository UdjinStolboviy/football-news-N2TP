import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  AppState,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../../../utils/colors';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {observer} from 'mobx-react';
import {HeaderView} from '../../common/HeaderView';
import {useNavigation} from '@react-navigation/native';
import {NewsStorage} from '../../../mobx/storage/news-store';
import {NewsCardView} from '../../common/NewsCardView';
import {News} from '../../../mobx/dto/news';
import {BestPlayersStorage} from '../../../mobx/storage/best-players-store';
import {BestPlayers} from '../../../mobx/dto/best-players';
import {BestPlayerCardView} from '../../common/BestPlayerCardView';

export const BestPlayersScreen = observer(() => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  const navigation = useNavigation();

  const bestPlayersStorage: BestPlayersStorage = useInjection(
    Types.BestPlayersStorage,
  );

  const data = bestPlayersStorage
    .getAllBestPlayers()
    .slice()
    .sort((a, b) => Number(b.getRating()) - Number(a.getRating()));

  const renderBestPlayerCar = (item: BestPlayers, index: number) => {
    return (
      <BestPlayerCardView
        bestPlayer={item}
        key={item.getPhoto()}
        index={index}
      />
    );
  };
  const paginationScreen = () => {
    if (onEndReachedCalledDuringMomentum) {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <HeaderView />
      <View style={styles.wrapperBestPlayer}>
        <View style={styles.textWrapper}>
          <Text style={styles.bigText}>Best Players</Text>
        </View>
        <FlatList
          style={{width: '100%'}}
          disableVirtualization
          data={data}
          renderItem={({item, index}) => renderBestPlayerCar(item, index)}
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={() =>
            setOnEndReachedCalledDuringMomentum(false)
          }
          onEndReachedThreshold={1}
          onEndReached={paginationScreen}
        />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.C343443,
  },

  bigText: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.FFFFFF,
    fontWeight: '600',
  },
  textWrapper: {
    width: '100%',
    padding: 5,
    paddingLeft: 10,
    backgroundColor: Colors.C343443,
  },

  wrapperBestPlayer: {
    marginTop: 10,
    height: '100%',
    width: '100%',
  },
});
