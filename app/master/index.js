import Master from './components/master';
import {actionCreators} from './store';
import {connect} from 'react-redux';

export default connect(
  state => ({
    isDrawerOpen: state.isDrawerOpen,
    isLoading: state.loadingCounter > 0
  }),
  actionCreators,
  (state, dispatch, props) => ({
    ...state,
    ...props,
    toggleDrawer: dispatch.toggleDrawer
  })
)(Master);
