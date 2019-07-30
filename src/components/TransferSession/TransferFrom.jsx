import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { TextField, MenuItem, FormControl } from '@material-ui/core';
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
import DatePicker from './DatePicker';

class TransferFrom extends Component {
  state = {
    classroom: '',
    courses: '',
    time: ''
  };

  handleChangeClassroom = e => {
    this.setState({
      classroom: e.target.value
    });
  };
  handleChangeCourses = e => {
    this.setState({
      courses: e.target.value
    });
  };
  handleChangeTime = e => {
    this.setState({
      time: e.target.value
    });
  };
  render() {
    const { classes, className, ...rest } = this.props;
    const { classroom, courses } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Transfer From"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <DatePicker />
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-select-classroom"
                  select
                  label="Classroom"
                  className={classes.textField}
                  value={classroom}
                  onChange={this.handleChangeClassroom}
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
                  <MenuItem value={"405"}>405</MenuItem>
                  <MenuItem value={"505"}>505</MenuItem>
                  <MenuItem value={"605"}>605</MenuItem>
                </TextField>
              </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-select-courses"
                  select
                  label="Courses"
                  className={classes.textField}
                  value={courses}
                  onChange={this.handleChangeCourses}
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
                  <MenuItem value={"ISE"}>ISE</MenuItem>
                  <MenuItem value={"CSE"}>CSE</MenuItem>
                  <MenuItem value={"CE"}>CE</MenuItem>
                </TextField>
              </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  label="Time"
                  type="time"
                  defaultValue="09:00"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </FormControl>
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
        </PortletFooter>
      </Portlet>
    );
  }
}

TransferFrom.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TransferFrom);
