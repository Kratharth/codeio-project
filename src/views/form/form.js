import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
    container: {
      display: '',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));
  

export default function TextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
     
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  return (
      <form className={classes.container} noValidate autoComplete="off">
          <h1>Details</h1>
           <br></br>
  <TextField
          id="filled-read-only-input"
          label="Full Name"
          defaultValue="Peter"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />

<TextField
          id="filled-read-only-input"
          label="Semester"
          defaultValue="3"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
  </form>
  );
  }