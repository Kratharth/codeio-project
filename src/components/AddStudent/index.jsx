import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';

class AddStudent extends Component {
  state = {
    name: '',
    department: '',
    email: '',
    sem: '',
    usn: ''
  };
  
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
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Student Details"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  value={name}
                  onChange={this.handleChangeName}
                  type="text"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
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
                  variant="outlined"
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"ISE"}>Information Science and Engineering</MenuItem>
                    <MenuItem value={"CSE"}>Computer Science and Engineering</MenuItem>
                    <MenuItem value={"CE"}>Chemical Engineering</MenuItem>
                </TextField>
              </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-email"
                  label="Email"
                  type="email"
                  value={this.email}
                  onChange={this.handleChangeEmail}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
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
                  variant="outlined"
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
                </TextField>
              </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-usn"
                  label="usn"
                  type="text"
                  value={usn}
                  onChange={this.handleChangeUsn}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                </FormControl>
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

AddStudent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddStudent);
