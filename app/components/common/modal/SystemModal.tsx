import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {SystemModalsStorage} from '../../../mobx/storage/system-modals-storage';
import {ErrorModal} from './ErrorModal';
import {LoaderModal} from './LoaderModal';

export const SystemModal = observer(() => {
  const systemModalsStorage: SystemModalsStorage = useInjection(
    Types.SystemModalsStorage,
  );
  const errorVisible = systemModalsStorage.getErrorVisible();
  const loaderVisible = systemModalsStorage.getLoaderVisible();
  const isInit = systemModalsStorage.getIsInit();

  useEffect(() => {}, [errorVisible, loaderVisible, isInit]);

  if (errorVisible && !isInit) {
    return <ErrorModal visible={errorVisible} />;
  } else if (loaderVisible && !isInit) {
    return <LoaderModal visible={loaderVisible} />;
  } else {
    return null;
  }
});
