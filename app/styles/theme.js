import {amber500, grey400, grey900, indigo100, indigo500, indigo700, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    accent1Color: amber500,
    alternateTextColor: white,
    borderColor: grey400,
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: indigo100,
    textColor: grey900
  }
});
