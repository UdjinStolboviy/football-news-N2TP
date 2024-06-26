import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/colors';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {observer} from 'mobx-react';
import {HeaderView} from '../../common/HeaderView';
import {useNavigation} from '@react-navigation/native';
import {BestPlayersStorage} from '../../../mobx/storage/best-players-store';
import {BestPlayers} from '../../../mobx/dto/best-players';
import {BestPlayerCardView} from '../../common/BestPlayerCardView';

export const BestPlayersScreen = observer(() => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

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
    backgroundColor: Colors.OFOFOFO,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    height: '100%',
    width: '100%',
  },
});
