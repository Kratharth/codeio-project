import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MaterialTableDemo from './Table';

// Component styles
import styles from './styles';

class AddStudent extends Component {
  state = {
    name: '',
    department: '',
    email: '',
    sem: '',
    usn: '',
    displaySearchResults: false,
    displayTable: false,
  };
  
  renderTable() {
    if (this.state.displayTable) {
      return (
          <div>
            <center>Students Record</center>
            <Divider />
            <MaterialTableDemo />
          </div>
      );
    } 
  };

  renderSearchResults() {
    if (this.state.displaySearchResults) {
      return (
        <div>
          <center>Search Results</center>
          <Divider />
          <MaterialTableDemo />
        </div>
     );
    }
  }
  
  clicked1 = (e) => {
    this.setState({
      displayTable: !this.state.displayTable,
      displaySearchResults: false,
    });
  }

  clicked2 = (e) => {
    this.setState({
      displayTable: false,
      displaySearchResults: !this.state.displaySearchResults
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
    const { classes, className, ...rest } = this.props;
    const { name,department, sem, email,usn} = this.state;

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
            value={department}
            onChange={this.handleChangeDepartment}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            helperText="Please select the department"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"ISE"}>Information Science and Engineering</MenuItem>
              <MenuItem value={"CSE"}>Computer Science and Engineering</MenuItem>
              <MenuItem value={"CE"}>Chemical Engineering</MenuItem>
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
                  //helperText="Please select the sem"
                  margin="normal"
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
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
                <Divider variant = 'fullWidth'/>  
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
