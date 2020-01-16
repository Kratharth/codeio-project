import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import AdminTable from './Table';

// Component styles
import styles from './styles';

class AddAdmin extends Component {
  state = {
    name: '',
    id: '',
    email: '',
    department: '',
    displayTable: false,
  };

  renderTable() {
    if (this.state.displayTable) {
      return (
        <div>
          <center>Admins Record</center>
          <br />
          <AdminTable />
        </div>
      );
    }
  };

  clicked = (e) => {
    this.setState({
      displayTable: true,
    });
  }

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleChangeDepartment = e => {
    this.setState({
      department: e.target.value
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
    const { classes, className } = this.props;
    const { id } = this.state;

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
          <Divider variant='fullWidth' />
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
