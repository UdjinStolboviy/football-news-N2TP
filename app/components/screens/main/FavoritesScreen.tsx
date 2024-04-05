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
import {GameStorage} from '../../../mobx/storage/game-store';
import {Game} from '../../../mobx/dto/game';
import {FavoritesGameCardView} from '../../common/FavoritesGameCardView';

export const FavoritesScreen = observer(() => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  const gameStorage: GameStorage = useInjection(Types.GameStorage);

  const renderGameCard = (item: Game, index: number) => {
    return (
      <FavoritesGameCardView game={item} key={item.getId()} index={index} />
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
      <View style={styles.wrapperFavorites}>
        <View style={styles.textWrapper}>
          <Text style={styles.bigText}>My Favorites</Text>
        </View>
        <FlatList
          style={{width: '100%'}}
          disableVirtualization
          data={gameStorage.getFavoriteGames()}
          renderItem={({item, index}) => renderGameCard(item, index)}
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

  wrapperFavorites: {
    backgroundColor: Colors.C343443,
    height: '100%',
    width: '100%',
  },
});
