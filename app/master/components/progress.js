import React, {PropTypes} from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import Overlay from 'material-ui/internal/Overlay';
import './progress.scss';

const progressStyle = {
  borderRadius: 0
};
const overlayStyle = {
  top: '68px',
  zIndex: 1
};

const Progress = props =>
  <i className={`progress ${props.isLoading ? 'is-loading' : ''}`}>
    <LinearProgress
      mode='indeterminate'
      style={progressStyle}
    />
    {
      props.isLoading ?
        <Overlay
          show={true}
          style={overlayStyle}
        /> : null
    }
  </i>;

Progress.displayName = 'Progress';
Progress.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Progress;
