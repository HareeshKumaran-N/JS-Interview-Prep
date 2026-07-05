import type { ReactNode } from 'react';
import './styles.css';

interface TabsProps {
  children: ReactNode;
  defaultIndex?: number;
}

function Tabs({ children }: TabsProps) {
  // TODO: activeIndex state, provide via <TabsContext.Provider value={...}> (see ./context.ts)
  return <div className="tabs">{children}</div>;
}

function TabsList({ children }: { children: ReactNode }) {
  return (
    <div className="tabs__list" role="tablist">
      {children}
    </div>
  );
}

interface TabProps {
  index: number;
  children: ReactNode;
}

function Tab({ children }: TabProps) {
  // TODO: read activeIndex from TabsContext, apply "tabs__tab--active",
  // call setActiveIndex(index) on click
  return (
    <button className="tabs__tab" type="button" role="tab">
      {children}
    </button>
  );
}

function Panel({ children }: TabProps) {
  // TODO: only render children when this panel's index === activeIndex from TabsContext
  return <div className="tabs__panel">{children}</div>;
}

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

export default Tabs;
