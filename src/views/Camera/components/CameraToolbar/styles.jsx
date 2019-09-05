export default theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit
  },
  spacer: {
    flexGrow: 1
  },
  deleteButton: {
    color: theme.palette.danger.main,
    marginRight: theme.spacing.unit
  },
  editButton : {
    color:theme.palette.primary.main
  },
  importButton: {
    marginRight: theme.spacing.unit
  },
  importIcon: {
    marginRight: theme.spacing.unit
  },
  exportButton: {
    marginRight: theme.spacing.unit
  },
  exportIcon: {
    marginRight: theme.spacing.unit
  },
  searchInput: {
    marginRight: theme.spacing.unit
  },
  field: {
    margin: theme.spacing.unit * 3
  },
  textField: {
    width: '420px',
    maxWidth: '100%',
    marginRight: theme.spacing.unit * 3
  },
  portletFooter: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
