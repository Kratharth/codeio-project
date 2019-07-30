import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { MenuItem, FormControl } from '@material-ui/core';
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


class TransferTo extends Component {
  state = {
    courses: '',
    lecturer: ''
  };

  handleChangeCourses = e => {
    this.setState({
      courses: e.target.value
    });
  };
  handleChangeLecturer = e => {
    this.setState({
      lecturer: e.target.value
    });
  };
  render() {
    const { classes, className, ...rest } = this.props;
    const { courses, lecturer } = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Transfer To"
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
                  id="outlined-select-lecturer"
                  select
                  label="Lecturer"
                  className={classes.textField}
                  value={lecturer}
                  onChange={this.handleChangeLecturer}
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
                  <MenuItem value={"L1"}>L1</MenuItem>
                  <MenuItem value={"L2"}>L2</MenuItem>
                  <MenuItem value={"L3"}>L3</MenuItem>
                </TextField>
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

TransferTo.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TransferTo);
