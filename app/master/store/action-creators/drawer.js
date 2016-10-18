import actions from '../actions';

export const toggleDrawer = isOpen => ({
  isOpen,
  type: actions.TOGGLE_DRAWER
});
