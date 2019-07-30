export default theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    maxWidth: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: 50,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(50),
    width: 300,
  }
});
