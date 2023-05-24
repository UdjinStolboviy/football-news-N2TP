import { inject, injectable } from 'inversify';
import { InitializationStorage } from '../../mobx/storage/initialization-storage';
import { Types } from '../../ioc/types';
import { TableInitializationService } from './table-initialization-service';
import { BackHandler } from 'react-native';
import { Navigator } from '../navigator/navigator';

@injectable()
export class InitializationService {
  @inject(Types.InitializationStorage) private initializationStorage: InitializationStorage;
  @inject(Types.Navigator) private navigator: Navigator;



  public async initialize() {
    try {
      this.initializationStorage.setStarted(true);
      this.initializationStorage.setProgress(0);

      this.initializationStorage.setProgress(100);
      this.initializationStorage.setInitializationSuccessful(true);

      // BackHandler.addEventListener('hardwareBackPress', () => {
      //   return true;
      // });
    } catch (e) {
      const error = e as any;
      console.error('Initialization error', e);
      this.initializationStorage.setInitializationSuccessful(false);
    }

  }
}
