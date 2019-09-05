
import { green } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

export default theme => ({
  formControl: {},
  group: {
    margin: theme.spacing(1, 0),
  },

  field: {
    margin: theme.spacing(3)
  },
  textField: {
    width: '420px',
    maxWidth: '100%',
    marginRight: theme.spacing(3)
  },
  portletFooter: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  palette: {
    primary: green,
  },
  margin: {
    margin: theme.spacing(1),
  },

  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    //backgroundColor: '#007bff',
    //borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      //  backgroundColor: '#0069d9',
      //borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      //  backgroundColor: '#0062cc',
      //  borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },

});
