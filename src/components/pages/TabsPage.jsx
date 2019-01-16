import React from 'react';
import { Page, View, Views, Tab, Tabs, Toolbar, Link } from 'framework7-react';

// TODO: Have number of notifications as state of icon.
export default ({onTabHome, onTabPage2, onTabPage3}) => {
  return (
    <Page>
      <Tabs routable className="ios-edges">
        <Tab id="tab-home" />
        <Tab id="tab-page2" />
        <Tab id="tab-page3" />
      </Tabs>

      <Toolbar tabbar bottomMd>
        <Link tabLink routeTabId="tab-home"  onClick={onTabHome}>Home</Link>
        <Link tabLink routeTabId="tab-page2" onClick={onTabPage2}>Tab 2</Link>
        <Link tabLink routeTabId="tab-page3" onClick={onTabPage3}>Tab 3</Link>
      </Toolbar>
    </Page>
  );
};
