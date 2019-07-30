import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { TextField } from '@material-ui/core';
// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent
} from 'components';
// user context
import { UserContext } from 'userContext';
// Component styles
import styles from './styles';

class AccountStudent extends Component {
  static contextType = UserContext;

  state = {
    name: '',
    email: '',
    semester: '',
    usn: '',
    branch: ''
  };

  componentDidMount() {
    this.setState({
      name: this.context.user.name,
      email: this.context.user.email,
      semester: this.context.user.sem,
      usn: this.context.user.usn,
      branch: this.context.user.dept
    })
  }

  render() {
    const { classes, className, ...rest } = this.props;
    const { name, semester, usn, branch, email } = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            title="DETAILS"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Name"
                margin="dense"
                value={name}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Email Address"
                margin="dense"
                value={email}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Semester"
                margin="dense"
                value={semester}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="USN"
                margin="dense"
                value={usn}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Branch"
                margin="dense"
                value={branch}
                variant="outlined"
              />
            </div>
          </form>
        </PortletContent>
      </Portlet>
    );
  }
}

AccountStudent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountStudent);
