import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const MainMenu = props =>
  <Drawer open={props.isDrawerOpen}>
    <AppBar
      iconElementLeft={
        <IconButton onClick={props.toggleDrawer}>
          <NavigationClose/>
        </IconButton>
      }
      zDepth={0}
    />
    <MenuItem>
      <Link to='/repository/create'>
        Create Repository
      </Link>
    </MenuItem>
  </Drawer>;

MainMenu.displayName = 'MainMenu';
MainMenu.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default MainMenu;
