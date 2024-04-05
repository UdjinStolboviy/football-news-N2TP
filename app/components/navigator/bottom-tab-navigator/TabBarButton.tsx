import React from 'react';
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

  return (
    <>
      <ButtonText
        text={props.routeName}
        onPress={onPress}
        style={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <ButtonText
        text={props.routeName}
        onPress={onPress}
        style={{
          width: 20,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </>
  );
});
