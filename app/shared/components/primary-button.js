import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import theme from '../styles/theme';

const style = {
  color: theme.palette.alternateTextColor
};

const PrimaryButton = props =>
  <RaisedButton
    {...props}
    primary={true}
    style={style}
  >
    {props.children}
  </RaisedButton>;

PrimaryButton.displayName = 'PrimaryButton';
PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrimaryButton;
