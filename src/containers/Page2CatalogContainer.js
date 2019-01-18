import { connect } from 'react-redux'

import Catalog from '../components/tabs/Catalog';
import { goBackFromCatalog } from '../actions/Page2CatalogActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoBackFromCatalog: () => dispatch(goBackFromCatalog())
  };
};

export default connect(null, mapDispatchToProps)(Catalog);
