import { Container } from 'inversify';
import { Types } from './types';
import { IApiService } from '../service/api/apiType';
import { ApiService } from '../service/api/api';
import { Navigator } from '../service/navigator/navigator';
import { NavigationStorage } from '../mobx/storage/navigation-storage';
import { InitializationStorage } from '../mobx/storage/initialization-storage';
import { InitializationService } from '../service/initializer/initialization-service';
import { SystemModalsStorage } from '../mobx/storage/system-modals-storage';
import { PeopleStorage } from '../mobx/storage/sw-people-store';



const container = new Container();

container.bind<ApiService>(Types.ApiService)
    .to(ApiService)
    .inSingletonScope();
container.bind<InitializationService>(Types.InitializationService).to(InitializationService);
container.bind<InitializationStorage>(Types.InitializationStorage).to(InitializationStorage).inSingletonScope();
container.bind<NavigationStorage>(Types.NavigationStorage).to(NavigationStorage).inSingletonScope();
container.bind<SystemModalsStorage>(Types.SystemModalsStorage).to(SystemModalsStorage).inSingletonScope();
container.bind<PeopleStorage>(Types.PeopleStorage).to(PeopleStorage).inSingletonScope();
container.bind<Navigator>(Types.Navigator).to(Navigator).inSingletonScope();

export default container;
