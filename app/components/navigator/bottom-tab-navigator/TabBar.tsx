import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {TabButton} from './TabBarButton';
import {ComponentSize} from '../../../utils/component-size';
import {Colors} from '../../../utils/colors';
import {TabBarContainer} from './TabBarContainer';

export const TabBar = (props: BottomTabBarProps) => {
  const {state, descriptors, navigation} = props;

  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // @ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TabButton
            key={route.name}
            routeName={route.name}
            onPress={onPress}
            isFocused={isFocused}
          />
        );
      })}
    </TabBarContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
    height: ComponentSize.TAB_BAR_HEIGHT,
    bottom: 34,
    position: 'absolute',
  },
});
