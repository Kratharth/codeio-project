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

class AccountLecturer extends Component {
  static contextType = UserContext;

  state = {
    name: '',
    email: '',
    department: '',
    id: ''
  };

  componentDidMount() {
    this.setState({
      name: this.context.user.name,
      email: this.context.user.email,
      department: this.context.user.dept,
      id: this.context.user.id
    })
  }

  render() {
    const { classes, className, ...rest } = this.props;
    const { name, department, id, email } = this.state;

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
                label="Department"
                margin="dense"
                value={department}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="ID"
                margin="dense"
                value={id}
                variant="outlined"
              />
            </div>
          </form>
        </PortletContent>
      </Portlet>
    );
  }
}

AccountLecturer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountLecturer);
