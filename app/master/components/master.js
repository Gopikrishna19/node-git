import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import MainMenu from './main-menu';
import Progress from './progress';
import Title from './title';
import './master.scss';

const isOnDesktop = props => props.deviceWidth >= 650;
const getDrawerState = props => {
  const isDesktop = isOnDesktop(props);
  const isDrawerOpen = isDesktop || props.isDrawerOpen;

  return {
    isDesktop,
    isDrawerOpen
  };
};
const getStyles = props => {
  if(isOnDesktop(props)) {
    return {
      zIndex: 1301
    };
  }
};

const Master = props =>
  <div>
    <AppBar
      onLeftIconButtonTouchTap={() => props.toggleDrawer(true)}
      style={getStyles(props)}
      title={<Title/>}
    />

    <Progress isLoading={props.isLoading}/>

    <MainMenu
      {...getDrawerState(props)}
      toggleDrawer={props.toggleDrawer}
    />

    <main className={`content ${isOnDesktop(props) ? 'on-desktop' : ''}`}>
      {props.children}
    </main>
  </div>;

Master.displayName = 'Master';
Master.propTypes = {
  children: PropTypes.node.isRequired,
  deviceWidth: PropTypes.number.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Master;
