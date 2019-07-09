import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

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

class AddAdmin extends Component {
  state = {
    name: 'John',
    email: 'contact@devias.io',
  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };
  render() {
    const { classes, className, ...rest } = this.props;
    // const { name, email } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Profile"
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
                helperText="Please specify the name"
                label="Name"
                margin="dense"
                required
                value={this.name}
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                helperText="Please specify the email"
                label="Email Address"
                margin="dense"
                required
                value={this.email}
                variant="outlined"
                onChange={this.handleChange}
              />
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

AddAdmin.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddAdmin);
