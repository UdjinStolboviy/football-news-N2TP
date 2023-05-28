import { Container } from 'inversify';
import { Types } from './types';
import { IApiService } from '../service/api/apiType';
import { ApiService } from '../service/api/api';
import { Navigator } from '../service/navigator/navigator';
import { NavigationStorage } from '../mobx/storage/navigation-storage';
import { InitializationStorage } from '../mobx/storage/initialization-storage';
import { InitializationService } from '../service/initializer/initialization-service';
import { SystemModalsStorage } from '../mobx/storage/system-modals-storage';
import { NewsStorage } from '../mobx/storage/news-store';
import { BestPlayersStorage } from '../mobx/storage/best-players-store';
import { GameStorage } from '../mobx/storage/game-store';
import { LineupsStorage } from '../mobx/storage/lineups-store';



const container = new Container();

container.bind<ApiService>(Types.ApiService)
    .to(ApiService)
    .inSingletonScope();
container.bind<InitializationService>(Types.InitializationService).to(InitializationService);
container.bind<InitializationStorage>(Types.InitializationStorage).to(InitializationStorage).inSingletonScope();
container.bind<NavigationStorage>(Types.NavigationStorage).to(NavigationStorage).inSingletonScope();
container.bind<SystemModalsStorage>(Types.SystemModalsStorage).to(SystemModalsStorage).inSingletonScope();
container.bind<Navigator>(Types.Navigator).to(Navigator).inSingletonScope();
container.bind<NewsStorage>(Types.NewsStorage).to(NewsStorage).inSingletonScope();
container.bind<BestPlayersStorage>(Types.BestPlayersStorage).to(BestPlayersStorage).inSingletonScope();
container.bind<GameStorage>(Types.GameStorage).to(GameStorage).inSingletonScope();
container.bind<LineupsStorage>(Types.LineupsStorage).to(LineupsStorage).inSingletonScope();



export default container;
