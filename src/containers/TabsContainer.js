import { connect } from 'react-redux'

import TabsPage from '../components/pages/TabsPage';
import { tabHome, tabPage2, tabPage3 } from '../actions/TabsActions';

const mapDispatchToProps = (dispatch) =>
{
  return {
    onTabHome: () => dispatch(tabHome()),
    onTabPage2: () => dispatch(tabPage2()),
    onTabPage3: () => dispatch(tabPage3())
  };
};

export default connect(null, mapDispatchToProps)(TabsPage);
