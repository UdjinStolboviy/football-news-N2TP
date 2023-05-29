import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
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
import {LineupsStorage} from '../../../mobx/storage/lineups-store';
import {Player} from '../../../mobx/dto/player';
import {UIActivityIndicator} from 'react-native-indicators';

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
    const lineupsStorage: LineupsStorage = useInjection(Types.LineupsStorage);
    const finish = true;
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
            {finish ? (
              <Text
                style={[
                  styles.bigText,
                ]}>{`${game.getTeamsHomeGoals()} : ${game.getTeamsAwayGoals()}`}</Text>
            ) : (
              <Text style={[styles.bigText]}>{`- : -`}</Text>
            )}
          </ImageBackground>
          {finish ? (
            <Text style={styles.textStan}>FINISHED</Text>
          ) : (
            <Text style={styles.textStan}>PENDING</Text>
          )}
          <TouchableOpacity
            onPress={() => game.setFavorite(!favorite)}
            style={styles.button}>
            {checkFavorite()}
          </TouchableOpacity>
          <View style={styles.teamCompositionWrapper}>
            <Text style={styles.textStan}>Team Composition</Text>
            <View style={styles.imgTeamWrapper}>
              <Image
                source={{uri: game.getTeamsHomeLogo()}}
                style={styles.imgLogo}
              />
              <Image
                source={{uri: game.getTeamsAwayLogo()}}
                style={styles.imgLogo}
              />
            </View>
          </View>
          {lineupsStorage.getSubstitutesAway().length ? (
            <ScrollView>
              <View style={styles.textWrapper}>
                <Text style={styles.titleText}>Coach</Text>
              </View>
              <View style={styles.infoWrapper}>
                <View style={styles.teamHome}>
                  <Text style={styles.textTeam}>
                    {lineupsStorage.getCouchHome()}
                  </Text>
                </View>
                <View style={styles.teamAway}>
                  <Text style={[styles.textTeam, {textAlign: 'right'}]}>
                    {lineupsStorage.getCouchAway()}
                  </Text>
                </View>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.titleText}>Starting XI</Text>
              </View>
              <View style={styles.infoWrapper}>
                <View style={{width: '50%'}}>
                  {lineupsStorage.getTeamHome().map((item: Player, index) => {
                    return (
                      <View key={index} style={styles.teamHome}>
                        <Text style={styles.textTeam}>
                          {`${item.getNumberPlayer()}  ${item.getName()}`}
                        </Text>
                      </View>
                    );
                  })}
                </View>
                <View style={{width: '50%', alignItems: 'flex-end'}}>
                  {lineupsStorage.getTeamAway().map((item: Player, index) => {
                    return (
                      <View key={index} style={styles.teamAway}>
                        <Text style={[styles.textTeam, {textAlign: 'right'}]}>
                          {`${item.getName()}  ${item.getNumberPlayer()}`}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.titleText}>Substitutes</Text>
              </View>
              <View style={styles.infoWrapper}>
                <View style={{width: '50%'}}>
                  {lineupsStorage
                    .getSubstitutesHome()
                    .map((item: Player, index) => {
                      return (
                        <View key={index} style={styles.teamHome}>
                          <Text style={styles.textTeam}>
                            {`${item.getNumberPlayer()}  ${item.getName()}`}
                          </Text>
                        </View>
                      );
                    })}
                </View>
                <View style={{width: '50%', alignItems: 'flex-end'}}>
                  {lineupsStorage
                    .getSubstitutesAway()
                    .map((item: Player, index) => {
                      return (
                        <View key={index} style={styles.teamAway}>
                          <Text style={[styles.textTeam, {textAlign: 'right'}]}>
                            {`${item.getName()}  ${item.getNumberPlayer()}`}
                          </Text>
                        </View>
                      );
                    })}
                </View>
              </View>
              <View style={{height: 70}} />
            </ScrollView>
          ) : (
            <View style={styles.loaderContainer}>
              <UIActivityIndicator color="white" />
            </View>
          )}
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTeam: {
    width: 150,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.OFOFOFO,
    fontWeight: '400',
  },
  teamHome: {
    width: '50%',
    height: 25,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  teamAway: {
    width: '50%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  infoWrapper: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.ACACACA,
  },
  button: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.FFFFFF,
    fontWeight: '600',
  },
  imgLogo: {
    width: 61,
    height: 61,
  },
  imgTeamWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  teamCompositionWrapper: {
    marginTop: 10,
    width: '100%',
    height: 110,
    backgroundColor: Colors.C232323,
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
