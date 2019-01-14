import { connect } from 'react-redux'

import ItemPopup from '../components/modals/ItemPopup';
import { goBackFromItem } from '../actions/ItemActions';
import { getRouteInfo } from '../selectors/ItemSelectors';

const mapStateToProps = (state) => {
  return {
    ...getRouteInfo(state)
  }
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    onGoBackFromItem: () => dispatch(goBackFromItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopup);
