import { createContext } from 'react';

export interface TabsContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);
