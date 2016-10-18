import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import MainMenu from './main-menu';
import Title from './title';
import './master.scss';

const Master = props =>
  <div>
    <AppBar
      onLeftIconButtonTouchTap={props.toggleDrawer}
      title={<Title/>}
    />

    <MainMenu
      isDrawerOpen={props.isDrawerOpen}
      toggleDrawer={props.toggleDrawer}
    />

    <main className='content'>
      {props.children}
    </main>
  </div>;

Master.displayName = 'Master';
Master.propTypes = {
  children: PropTypes.node.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Master;
