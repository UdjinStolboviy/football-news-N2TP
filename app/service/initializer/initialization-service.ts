import {inject, injectable} from 'inversify';
import {InitializationStorage} from '../../mobx/storage/initialization-storage';
import {Types} from '../../ioc/types';
import {NewsStorage} from '../../mobx/storage/news-store';
import {BestPlayersStorage} from '../../mobx/storage/best-players-store';
import {GameStorage} from '../../mobx/storage/game-store';

@injectable()
export class InitializationService {
  @inject(Types.InitializationStorage)
  private initializationStorage: InitializationStorage;
  @inject(Types.NewsStorage) private NewsStorage: NewsStorage;
  @inject(Types.BestPlayersStorage)
  private BestPlayersStorage: BestPlayersStorage;
  @inject(Types.GameStorage) private GameStorage: GameStorage;

  public async initialize() {
    try {
      this.initializationStorage.setStarted(true);
      this.initializationStorage.setProgress(0);
      await this.NewsStorage.getDataNews();
      await this.BestPlayersStorage.getDataBestPlayers();
      await this.GameStorage.getDataGame();

      this.initializationStorage.setProgress(100);
      this.initializationStorage.setInitializationSuccessful(true);
    } catch (e) {
      const error = e as any;
      console.error('Initialization error', e);
      this.initializationStorage.setInitializationSuccessful(false);
    }
  }
}
