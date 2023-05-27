import {
  FlatList,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {InitializationService} from '../../../service/initializer/initialization-service';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';
import {Game} from '../../../mobx/dto/game';
import {HeaderView} from '../../common/HeaderView';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigator/types';
import {NavigatorConstants} from '../../../utils/navigator-constants';
import {observer} from 'mobx-react';
import {IconFavorites} from '../../common/icon/IconFavorites';
import {IconAddFavorites} from '../../common/icon/IconAddFavorites';
import {IconSterFavorites} from '../../common/icon/IconStreFavor';

export interface MatchScreenParams {
  game: Game;
}

export const MatchScreen = observer(
  ({
    route,
  }: StackScreenProps<RootStackParamList, NavigatorConstants.MATCH_SCREEN>) => {
    const navigation = useNavigation();
    const game = route.params?.game;
    const favorite = game.getFavorite();
    const year = game.getDate().slice(0, 4);
    const month = game.getDate().slice(5, 7);
    const day = game.getDate().slice(8, 10);
    const time = game.getDate().slice(11, 16);

    const checkFavorite = () => {
      if (favorite) {
        return (
          <View style={styles.wrappersIcon}>
            <IconSterFavorites />
            <Text style={styles.textIcon}>FAVORITE</Text>
          </View>
        );
      } else {
        return (
          <View style={styles.wrappersIcon}>
            <IconAddFavorites />
            <Text style={styles.textIcon}>ADD TO FAVORITES</Text>
          </View>
        );
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

        <View style={styles.textWrapper}>
          <Text
            style={
              styles.textDesc
            }>{`${game.getTeamsHomeName()} VS ${game.getTeamsAwayName()}`}</Text>
          <Text
            style={[
              styles.textTime,
            ]}>{`${day}.${month}.${year}    ${time}`}</Text>
        </View>
        <View style={styles.mainInfoWrapper}>
          <ImageBackground
            style={styles.imageBack}
            source={require('../../../../assets/img/imgback.png')}>
            <Text
              style={[
                styles.bigText,
              ]}>{`${game.getTeamsHomeGoals()} : ${game.getTeamsAwayGoals()}`}</Text>
          </ImageBackground>
          <Text style={styles.textStan}>FINISHED</Text>
          <TouchableOpacity
            onPress={() => game.setFavorite(!favorite)}
            style={styles.button}>
            {checkFavorite()}
          </TouchableOpacity>
          <Text style={styles.textStan}>Team Composition</Text>
        </View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.OFOFOFO,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrappersIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -27,
  },
  mainInfoWrapper: {
    height: '100%',
    backgroundColor: Colors.C343443,
  },
  imageBack: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 128,
  },
  textIcon: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.FFFFFF,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10,
  },
  textStan: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.FFFFFF,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
  bigText: {
    fontSize: 60,
    lineHeight: 70,
    color: Colors.ECC22F,
    fontWeight: '600',
  },
  textDesc: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.FFFFFF,
    fontWeight: '600',
  },
  textWrapper: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    backgroundColor: Colors.C343443,
  },
  textTime: {
    paddingTop: 2,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.FFFFFF,
  },
});
