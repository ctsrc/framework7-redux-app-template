import { connect } from 'react-redux'

import Page2 from '../components/tabs/Page2';
import { goToCatalog } from '../actions/Page2CatalogActions';
import { goToItem23 } from '../actions/ItemActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoToCatalog: () => dispatch(goToCatalog()),
    onGoToItem23: () => dispatch(goToItem23())
  };
};

export default connect(null, mapDispatchToProps)(Page2);
