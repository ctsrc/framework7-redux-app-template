import TabsContainer from './containers/TabsContainer';
import HomeContainer from './containers/HomeContainer';
import Page2Container from './containers/Page2Container';
import Page3Container from './containers/Page3Container';
import HomeCatalogContainer from './containers/HomeCatalogContainer';
import Page2CatalogContainer from './containers/Page2CatalogContainer';
import ItemContainer from './containers/ItemContainer';

export default [
  {
    path: '/tabs/',
    component: TabsContainer,
    tabs:
    [
      /*
       * Tab main pages. For these we specify that transition should not animate.
       */
      {
        path: '/',
        id: 'tab-home',
        component: HomeContainer,
        options:
        {
          animate: false,
        },
      },
      {
        path: '/page2/',
        id: 'tab-page2',
        component: Page2Container,
        options:
        {
          animate: false,
        },
      },
      {
        path: '/page3/',
        id: 'tab-page3',
        component: Page3Container,
        options:
        {
          animate: false,
        },
      },

      /*
       * Everything else. These should (and do) have animated transition.
       */
      {
        path: '/home-catalog/',
        id: 'tab-home',
        component: HomeCatalogContainer,
      },
      {
        path: '/page2-catalog/',
        id: 'tab-page2',
        component: Page2CatalogContainer,
      },
    ]
  },

  {
    path: '/catalog/:itemId/',
    popup: {
      component: ItemContainer,
    }
  },
];
