import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  AppState,
  Platform,
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
import {GameStorage} from '../../../mobx/storage/game-store';
import {Game} from '../../../mobx/dto/game';
import {GameCardView} from '../../common/GameCardView';

export const MainScreen = observer(() => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  const navigation = useNavigation();

  const newsStorage: NewsStorage = useInjection(Types.NewsStorage);
  const gameStorage: GameStorage = useInjection(Types.GameStorage);

  const renderNewsCard = (item: News, index: number) => {
    return <NewsCardView news={item} key={item.getTitle()} index={index} />;
  };

  const renderGameCard = (item: Game, index: number) => {
    return <GameCardView game={item} key={item.getId()} index={index} />;
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
      <View style={styles.wrapperNews}>
        <View style={styles.textWrapper}>
          <Text style={styles.bigText}>News</Text>
        </View>
        <FlatList
          style={{width: '100%'}}
          disableVirtualization
          data={newsStorage.getAllNews()}
          renderItem={({item, index}) => renderNewsCard(item, index)}
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={() =>
            setOnEndReachedCalledDuringMomentum(false)
          }
          onEndReachedThreshold={1}
          onEndReached={paginationScreen}
        />
      </View>

      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.bigText}>All Matches</Text>
        </View>
        <FlatList
          disableVirtualization
          data={gameStorage.getAllGame()}
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

  wrapperNews: {
    height: '50%',
    width: '100%',
  },
});
