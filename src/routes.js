import HomeContainer from './containers/HomeContainer';
import Page2Container from './containers/Page2Container';
import Page3Container from './containers/Page3Container';
import CatalogContainer from './containers/CatalogContainer';
import ItemContainer from './containers/ItemContainer';

export default [
  /*
   * Main containers. For these we specify that transition should not animate.
   */
  {
    path: '/',
    component: HomeContainer,
    options:
    {
      animate: false,
    },
  },
  {
    path: '/page2/',
    component: Page2Container,
    options:
    {
      animate: false,
    },
  },
  {
    path: '/page3/',
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
    path: '/catalog/:itemId/',
    popup: {
      component: ItemContainer,
    }
  },
  {
    path: '/catalog/',
    component: CatalogContainer,
  },
];
