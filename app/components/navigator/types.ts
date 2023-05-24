
import { NavigatorConstants } from '../../utils/navigator-constants';
import { PeopleScreenParams } from '../screens/peopleScreen';


export type RootStackParamList = {
  [NavigatorConstants.INITIAL_STACK]: undefined;
  [NavigatorConstants.PEOPLE_SCREEN]: PeopleScreenParams;
  [NavigatorConstants.ERROR_STACK]: undefined;
  [NavigatorConstants.BOTTOM_TAB_STACK]: undefined;
  [NavigatorConstants.TEST1_SCREEN]: undefined;
  [NavigatorConstants.TEST2_SCREEN]: undefined;
  [NavigatorConstants.TEST3_SCREEN]: undefined;
};
