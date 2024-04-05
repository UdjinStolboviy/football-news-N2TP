import {TransparentOverlayContext} from './transparent-overlay-context';
import {IItemContext} from './item-context';

export interface TransitionGestureSharedValue {
  value: number;
}

export const initItemsContext = (): IItemContext => {
  return {
    scrollRef: null,
  };
};

export const initTransparentOverlayContext = (): TransparentOverlayContext => {
  return {
    isOverlayVisible: false,
  };
};
