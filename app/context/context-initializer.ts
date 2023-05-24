import { SharedValue, useSharedValue } from 'react-native-reanimated';
import { TransparentOverlayContext } from './transparent-overlay-context';
import { IItemContext, ItemContext } from './item-context';




export interface TransitionGestureSharedValue {
  value: number;
}


export const initItemsContext = (): IItemContext => {
  return {
    scrollRef: null
  };
};

export const initTransparentOverlayContext = (): TransparentOverlayContext => {
  return {
    isOverlayVisible: false
  };
};
