import { connect } from 'react-redux'

import CatalogPage from '../components/pages/CatalogPage';
import { goBackFromCatalog } from '../actions/HomeCatalogActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoBackFromCatalog: () => dispatch(goBackFromCatalog())
  };
};

export default connect(null, mapDispatchToProps)(CatalogPage);
