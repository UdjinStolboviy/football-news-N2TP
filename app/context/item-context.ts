import React from 'react';
import { ScrollView } from 'react-native';

export interface IItemContext {
  scrollRef: ScrollView | null;
}

export const ItemContext = React.createContext({} as IItemContext);
