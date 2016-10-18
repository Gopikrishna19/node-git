import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import MainMenu from './main-menu';
import Progress from './progress';
import Title from './title';
import './master.scss';

const Master = props =>
  <div>
    <AppBar
      onLeftIconButtonTouchTap={props.toggleDrawer}
      title={<Title/>}
    />

    <Progress isLoading={props.isLoading}/>

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
  isLoading: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Master;
