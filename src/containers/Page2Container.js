import { connect } from 'react-redux'

import Page2Page from '../components/pages/Page2Page';
import { goToCatalog } from '../actions/Page2CatalogActions';
import { goToItem23 } from '../actions/ItemActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoToCatalog: () => dispatch(goToCatalog()),
    onGoToItem23: () => dispatch(goToItem23())
  };
};

export default connect(null, mapDispatchToProps)(Page2Page);
