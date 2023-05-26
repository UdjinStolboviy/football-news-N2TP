import { inject, injectable } from 'inversify';
import { InitializationStorage } from '../../mobx/storage/initialization-storage';
import { Types } from '../../ioc/types';
import { Navigator } from '../navigator/navigator';
import { NewsStorage } from '../../mobx/storage/news-store';
import { BestPlayersStorage } from '../../mobx/storage/best-players-store';

@injectable()
export class InitializationService {
  @inject(Types.InitializationStorage) private initializationStorage: InitializationStorage;
  @inject(Types.Navigator) private navigator: Navigator;
  @inject(Types.NewsStorage) private NewsStorage: NewsStorage;
  @inject(Types.BestPlayersStorage) private BestPlayersStorage: BestPlayersStorage;



  public async initialize() {
    try {
      this.initializationStorage.setStarted(true);
      this.initializationStorage.setProgress(0);
      await this.NewsStorage.getDataNews();
      await this.BestPlayersStorage.getDataBestPlayers();

      this.initializationStorage.setProgress(100);
      this.initializationStorage.setInitializationSuccessful(true);

    } catch (e) {
      const error = e as any;
      console.error('Initialization error', e);
      this.initializationStorage.setInitializationSuccessful(false);
    }

  }
}
