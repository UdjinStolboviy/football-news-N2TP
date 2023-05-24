import React from 'react';
import {NavigatorConstants} from '../../../utils/navigator-constants';
import {NavigationStorage} from '../../../mobx/storage/navigation-storage';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {observer} from 'mobx-react';

import {Button} from '@rneui/themed';

interface TabButtonProps {
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
}

export const TabButton = observer((props: TabButtonProps) => {
  const navigationStorage: NavigationStorage = useInjection(
    Types.NavigationStorage,
  );

  const onPress = () => {
    props.onPress();
    navigationStorage.setCurrentTabRouteName(props.routeName);
  };

  if (props.routeName === NavigatorConstants.TEST2_TAB) {
    return (
      <Button
        title={props.routeName}
        onPress={onPress}
        containerStyle={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  }
  if (props.routeName === NavigatorConstants.TEST3_TAB) {
    return (
      <Button
        title={props.routeName}
        onPress={onPress}
        containerStyle={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  } else {
    return (
      <Button
        title={props.routeName}
        onPress={onPress}
        containerStyle={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  }
});
