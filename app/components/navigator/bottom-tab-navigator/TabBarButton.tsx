import React from 'react';
import {NavigatorConstants} from '../../../utils/navigator-constants';
import {NavigationStorage} from '../../../mobx/storage/navigation-storage';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {observer} from 'mobx-react';
import {ButtonText} from '../../common/button/ButtonText';

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
      <ButtonText
        text={props.routeName}
        onPress={onPress}
        style={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  }
  if (props.routeName === NavigatorConstants.TEST3_TAB) {
    return (
      <ButtonText
        text={props.routeName}
        onPress={onPress}
        style={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  } else {
    return (
      <ButtonText
        text={props.routeName}
        onPress={onPress}
        style={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  }
});
