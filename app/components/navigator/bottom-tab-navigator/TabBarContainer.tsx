import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {ComponentSize} from '../../../utils/component-size';
import {Colors} from '../../../utils/colors';
import {observer} from 'mobx-react';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import Animated from 'react-native-reanimated';
import {Navigator} from '../../../service/navigator/navigator';
import {NavigatorConstants} from '../../../utils/navigator-constants';

import {useNavigation} from '@react-navigation/native';
import {PeopleStorage} from '../../../mobx/storage/sw-people-store';
import {ButtonText} from '../../common/button/ButtonText';
import {ButtonNawTab} from '../../common/button/ButtonNawTab';

export interface TabBarContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

export const TabBarContainer = observer((props: TabBarContainerProps) => {
  const navigator: Navigator = useInjection(Types.Navigator);
  const [activeNumber, setActiveNumber] = React.useState(0);
  const navigation = useNavigation();
  const peopleStorege: PeopleStorage = useInjection(Types.PeopleStorage);

  const routeName = navigator.getNavigator()?.getCurrentRoute()?.name;

  return (
    <View style={styles.container}>
      <ButtonNawTab
        buttonNumber={0}
        onPress={() => {
          setActiveNumber(0);
          navigation.navigate(NavigatorConstants.MAIN_SCREEN as never);
        }}
        activeNumber={activeNumber}
      />
      <ButtonNawTab
        buttonNumber={1}
        onPress={() => {
          setActiveNumber(1);
          navigation.navigate(NavigatorConstants.BEST_PLAYERS_SCREEN as never);
        }}
        activeNumber={activeNumber}
      />
      <ButtonNawTab
        buttonNumber={2}
        onPress={() => {
          setActiveNumber(2);
          navigation.navigate(NavigatorConstants.FAVORITE_SCREEN as never);
        }}
        activeNumber={activeNumber}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.OFOFOFO,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
});
