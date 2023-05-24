import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentSize} from '../../../utils/component-size';
import {Colors} from '../../../utils/colors';
import {observer} from 'mobx-react';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import Animated from 'react-native-reanimated';
import {Navigator} from '../../../service/navigator/navigator';
import {NavigatorConstants} from '../../../utils/navigator-constants';

import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {PeopleStorage} from '../../../mobx/storage/sw-people-store';

export interface TabBarContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

export const TabBarContainer = observer((props: TabBarContainerProps) => {
  const navigator: Navigator = useInjection(Types.Navigator);
  const navigation = useNavigation();
  const peopleStorege: PeopleStorage = useInjection(Types.PeopleStorage);

  const routeName = navigator.getNavigator()?.getCurrentRoute()?.name;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mainWrapper]}>
        <Button
          title={'CLEAR FANS'}
          onPress={() => peopleStorege.clear()}
          containerStyle={{
            width: 200,
          }}
        />
      </Animated.View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: ComponentSize.TAB_BAR_WIDTH,
    height: ComponentSize.TAB_BAR_HEIGHT,
    bottom: 34,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  mainWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10,
    shadowRadius: 13,
    shadowColor: 'rgb(45, 47, 49)',
    shadowOpacity: 0.24,
    flexDirection: 'row',
    paddingVertical: 4,
    borderRadius: 70,
    backgroundColor: Colors.FFFFFF,
    opacity: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
