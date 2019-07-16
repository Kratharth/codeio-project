export default theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  searchInput: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  selectInput: {
    backgroundColor: theme.palette.background.paper,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    minWidth: '72px'
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
});
