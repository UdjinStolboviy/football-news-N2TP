import React from 'react';

export interface TransparentOverlayContext {
  isOverlayVisible: boolean;
  changeOverlayVisibility?: (isVisible: boolean) => void;
}

export const TransparentOverlayContext = React.createContext({} as TransparentOverlayContext);
