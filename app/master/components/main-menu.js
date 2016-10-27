import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationHome from 'material-ui/svg-icons/action/home';
import Title from './title';

const MainMenu = props =>
  <Drawer
    docked={props.isDesktop}
    open={props.isDrawerOpen}
    zDepth={0}
  >
    <AppBar
      iconElementLeft={
        <IconButton onClick={() => props.toggleDrawer(false)}>
          <NavigationClose/>
        </IconButton>
      }
      title={<Title/>}
      zDepth={0}
    />
    <Link to='/'>
      <MenuItem leftIcon={<NavigationHome/>}>
        Home
      </MenuItem>
    </Link>
    <Link to='/repository/create'>
      <MenuItem insetChildren={true}>
        Create Repository
      </MenuItem>
    </Link>
  </Drawer>;

MainMenu.displayName = 'MainMenu';
MainMenu.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default MainMenu;
