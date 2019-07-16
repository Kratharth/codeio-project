import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MaterialTableDemo  from './Table';

// Component styles
import styles from './styles';

class AddAdmin extends Component {
  state = {
    name: '',
    id: '',
    email: '',
    displayTable: false,
  };
  
  renderTable() {
    if (this.state.displayTable) {
      return (
          <div>
            <center>Admins Record</center>
            <MaterialTableDemo />
          </div>
      );
    } 
  };

  clicked = (e) => {
    this.setState({
      displayTable: !this.state.displayTable,
    });
  }

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleChangeId = e => {
    this.setState({
      id: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { name, id, email} = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <form
            autoComplete="off"
            noValidate
          >
                 <TextField
                  id="outlined-id"
                  label="Id"
                  type="text"
                  value={id}
                  onChange={this.handleChangeId}
                  className={classes.textField}
                  margin="normal"
                  helperText="Please enter the Id"
                />
                <Divider variant = 'fullWidth'/>
             <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={this.clicked}
          >
            Search
          </Button>
          </form>
          {this.renderTable()}
      </div>
    );
  }
}

AddAdmin.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddAdmin);
