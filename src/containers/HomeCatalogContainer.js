import { connect } from 'react-redux'

import Catalog from '../components/tabs/Catalog';
import { goBackFromCatalog } from '../actions/HomeCatalogActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoBackFromCatalog: () => dispatch(goBackFromCatalog())
  };
};

export default connect(null, mapDispatchToProps)(Catalog);
