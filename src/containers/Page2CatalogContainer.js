import { connect } from 'react-redux'

import CatalogPage from '../components/pages/CatalogPage';
import { goBackFromCatalog } from '../actions/Page2CatalogActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoBackFromCatalog: () => dispatch(goBackFromCatalog())
  };
};

export default connect(null, mapDispatchToProps)(CatalogPage);
