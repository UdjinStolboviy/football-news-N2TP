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

export const MainScreen = observer(() => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  const navigation = useNavigation();

  const newsStorage: NewsStorage = useInjection(Types.NewsStorage);

  const renderNewsCard = (item: News, index: number) => {
    return <NewsCardView news={item} key={item.getTitle()} index={index} />;
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

      <View></View>
      {/* {false ? (
        <View style={styles.wrapperLoad}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          disableVirtualization
          data={[]}
          renderItem={({item, index}) => renderCard(item, index)}
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={() =>
            setOnEndReachedCalledDuringMomentum(false)
          }
          onEndReachedThreshold={1}
          onEndReached={paginationScreen}
        />
      )} */}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.C4E4E4E,
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
    marginTop: 10,
    height: '50%',
    width: '100%',
  },
});
