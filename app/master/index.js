import Master from './components/master';
import {actionCreators} from './store';
import {connect} from 'react-redux';

export default connect(
  ({isDrawerOpen}) => ({isDrawerOpen}),
  actionCreators,
  (state, dispatch, props) => ({
    ...state,
    ...props,
    toggleDrawer: state.isDrawerOpen ? dispatch.closeDrawer : dispatch.openDrawer
  })
)(Master);
