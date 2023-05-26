
import { NavigatorConstants } from '../../utils/navigator-constants';
import { MatchScreenParams } from '../screens/main/MatchScreen';
import { NewsScreenParams } from '../screens/main/NewsScreen';
import { PeopleScreenParams } from '../screens/peopleScreen';


export type RootStackParamList = {
  [NavigatorConstants.INITIAL_STACK]: undefined;
  [NavigatorConstants.ERROR_STACK]: undefined;
  [NavigatorConstants.BOTTOM_TAB_STACK]: undefined;
  [NavigatorConstants.MODALS_STACK]: undefined;
  [NavigatorConstants.MAIN_SCREEN]: undefined;
  [NavigatorConstants.BEST_PLAYERS_SCREEN]: undefined;
  [NavigatorConstants.NEWS_SCREEN]: NewsScreenParams;
  [NavigatorConstants.FAVORITE_SCREEN]: undefined;
  [NavigatorConstants.MATCH_SCREEN]: MatchScreenParams;
  [NavigatorConstants.ERROR_SCREEN]: undefined;
  [NavigatorConstants.TEST1_SCREEN]: undefined;
  [NavigatorConstants.TEST2_SCREEN]: undefined;
  [NavigatorConstants.TEST3_SCREEN]: undefined;
};
