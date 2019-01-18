import { connect } from 'react-redux'

import Home from '../components/tabs/Home';
import { goToCatalog } from '../actions/HomeCatalogActions';
import { goToItem23 } from '../actions/ItemActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoToCatalog: () => dispatch(goToCatalog()),
    onGoToItem23: () => dispatch(goToItem23())
  };
};

export default connect(null, mapDispatchToProps)(Home);
