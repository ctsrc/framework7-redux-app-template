import React from 'react';
import { Provider } from 'react-redux'
import { App, Statusbar, View, Views, Toolbar, Link } from 'framework7-react';

import routes from '../routes';
import { store, stateKernel } from '../store';

// Framework7 parameters here
const f7params = {
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes,
  // App Framework7 Redux state kernel
  stateKernel,
  // Disable F7 automated routing for Links
  clicks: {
    externalLinks: 'a[href="#"]'
  },
  // Disable F7 automated routing for backdrops
  panel: {
    closeByBackdropClick: false
  },
  popup: {
    closeByBackdropClick: false
  }
};

// TODO: Have number of notifications as state of icon.
export default () => {
  return (
    <Provider store={store}>
      <App params={f7params}>
        <Statusbar />

        <Views tabs className="ios-edges">
          <View main tab tabActive id="home-view" url="/" />
          <View tab id="page2-view" url="/page2/" />
          <View tab id="page3-view" url="/page3/" />

          <Toolbar tabbar bottomMd>
            <Link tabLink="#home-view" tabLinkActive href="/">Home</Link>
            <Link tabLink="#page2-view" href="/page2/">Tab 2</Link>
            <Link tabLink="#page3-view" href="/page3/">Tab 3</Link>
          </Toolbar>
        </Views>
      </App>
    </Provider>
  );
};
