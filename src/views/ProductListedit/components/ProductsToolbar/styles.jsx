import SelectInput from "@material-ui/core/Select/SelectInput";

export default theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6)
  },
  spacer: {
    flexGrow: 1
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  selectInput: {
    backgroundColor: theme.palette.background.paper,
    //marginRight: theme.spacing(1)
  }
});
