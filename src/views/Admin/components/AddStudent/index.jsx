import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField, Typography, MenuItem } from '@material-ui/core';
import StudentTable from './Table';
import { getDepartment } from 'services/departmentDetails';

// Component styles
import styles from './styles';

class AddStudent extends Component {
  signal = true;

  state = {
    name: '',
    department: [],
    departmentselected: '',
    email: '',
    sem: '',
    usn: '',
    displaySearchResults: false,
    displayTable: false,
  };

  async getDepartment() {
    try {
      this.setState({ isLoading: true });

      const { department } = await (getDepartment())

      if (this.signal) {
        this.setState({
          isLoading: false,
          department
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getDepartment();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  renderTable() {
    if (this.state.displayTable) {
      return (
        <div>
          <center>Students Record</center>
          <br />
          <StudentTable />
        </div>
      );
    }
  };

  renderSearchResults() {
    if (this.state.displaySearchResults) {
      return (
        <div>
          <center>Search Results</center>
          <br />
          <StudentTable />
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
      displaySearchResults: true
    });
  }

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeDepartment = e => {
    this.setState({
      departmentselected: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleChangeSem = e => {
    this.setState({
      sem: e.target.value
    });
  };
  handleChangeUsn = e => {
    this.setState({
      usn: e.target.value
    });
  };

  render() {
    const { classes, className } = this.props;
    const { department, sem, usn, departmentselected } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <div
        className={rootClassName}
      >
        <form
          autoComplete="off"
          noValidate
        >
          <TextField
            id="outlined-select-department"
            select
            label="Department"
            className={classes.textField}
            value={departmentselected}
            onChange={this.handleChangeDepartment}
            margin="normal"
            helperText="Please select the department"

          >
            {department.map((dept) =>
              <MenuItem key={dept.name} value={dept.name}>{dept.name}</MenuItem>
            )}
          </TextField>


          <TextField
            id="outlined-select-sem"
            select
            label="Sem"
            className={classes.textField}
            value={sem}
            onChange={this.handleChangeSem}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select the sem"
            margin="normal"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
            <MenuItem value={"6"}>6</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
            <MenuItem value={"8"}>8</MenuItem>
          </TextField>

          <TextField
            id="outlined-usn"
            label="USN"
            type="text"
            value={usn}
            onChange={this.handleChangeUsn}
            className={classes.textField}
            margin="normal"
            helperText="Please enter the usn"
          />
          <div>
            <Divider variant='fullWidth' />
            <Button
              onClick={this.clicked2}
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Search
            </Button>
            <Typography variant="h4" component="h5" className={classes.or}>OR</Typography>
            <Button
              onClick={this.clicked1}
              color="primary"
              variant="contained"
              className={classes.button}
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

AddStudent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddStudent);
