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

class AccountDept extends Component {
  static contextType = UserContext;

  state = {
    deptname: '',
    code: '',
    email: ''
  };

  componentDidMount() {
    this.setState({
      deptname: this.context.user.dept,
      code: this.context.user.code,
      email: this.context.user.email
    })
  }

  render() {
    const { classes, className, ...rest } = this.props;
    const { email, deptname, code } = this.state;

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
                label="Department Name"
                margin="dense"
                value={deptname}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Code"
                margin="dense"
                value={code}
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
          </form>
        </PortletContent>
      </Portlet>
    );
  }
}

AccountDept.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountDept);
