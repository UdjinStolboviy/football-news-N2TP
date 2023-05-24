import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const tabBarWidth = ScreenWidth - 40;
const tabBarMiddleButtonWidth = tabBarWidth * 22 / 100;
const tabBarEdgeButtonWidth = tabBarWidth * 24.8 / 100;
const toolButtonWidth = tabBarWidth * 26.5 / 100;

export const ComponentSize = {
  TAB_BAR_HEIGHT: 64,
  TAB_BAR_WIDTH: tabBarWidth,
  TAB_BAR_MIDDLE_BUTTON_WIDTH: tabBarMiddleButtonWidth,
  TAB_BAR_EDGE_BUTTON_WIDTH: tabBarEdgeButtonWidth,
  TAB_BAR_TOOL_BUTTON_WIDTH: toolButtonWidth,
  CONTACT_ANIMATED_PADDING: 6,

  SINGLE_INOCULANT_IMAGE_HEADER_HEIGHT: Dimensions.get('window').height / 1.95
};

