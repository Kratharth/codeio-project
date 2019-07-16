import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import LecturerTable from './Table';

import styles from './styles';

class AddLecturer extends Component {
  state = {
    name: '',
    id: '',
    email: '',
    department: '',
    displaySearchResults: false,
    displayTable: false,
  };


  renderTable() {
    if (this.state.displayTable) {
      return (
        <div>
          <center>Students Record</center>
          <LecturerTable />
        </div>
      );
    }
  };

  renderSearchResults() {
    if (this.state.displaySearchResults) {
      return (
        <div>
          <center>Search Results</center>
          <LecturerTable />
        </div>
      );
    }
  }

  clicked1 = (e) => {
    this.setState({
      displayTable: true,
      displaySearchResults: false,
    });
  }

  clicked2 = (e) => {
    this.setState({
      displayTable: false,
      displaySearchResults: true,
    });
  }


  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeDepartment = (e) => {
    this.setState({
      department: e.target.value
    });
  };

  handleChangeId = (e) => {
    this.setState({
      id: e.target.value
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { name, id, email, department } = this.state;
    const rootClassName = classNames(classes.root, className);
    return (
      <div className={rootClassName}>
        <form
          className={classes.container}
          autoComplete="off"
          noValidate
        >
          <div>
            <TextField
              id="outlined-select-department"
              select
              label="Department"
              className={classes.textField}
              value={department}
              onChange={this.handleChangeDepartment}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select the department"
              margin="normal"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"ISE"}>Information Science and Engineering</MenuItem>
              <MenuItem value={"CSE"}>Computer Science and Engineering</MenuItem>
              <MenuItem value={"CE"}>Chemical Engineering</MenuItem>
            </TextField>
            <TextField
              id="outlined-id"
              label="Id"
              value={id}
              onChange={this.handleChangeId}
              className={classes.textField}
              margin="normal"
              helperText="Please enter the lecturer Id"
            />
          </div>
          <div>
            <Divider variant='fullWidth' />
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.clicked2}
            >
              Search
            </Button>
            <Typography variant="h4" component="h5" className={classes.or}>OR</Typography>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.clicked1}
            >
              View All
            </Button>
          </div>
        </form>
        {this.renderTable()}
        {this.renderSearchResults()}
      </div>
    );
  }
}

AddLecturer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddLecturer);
