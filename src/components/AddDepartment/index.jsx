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

class AddDepartment extends Component {
  state = {
    name: '',
    code: '',
    email: '',
  };
  
  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleChangeCode = e => {
    this.setState({
      code: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { name, code, email} = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Department Details"
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
                  type="text"
                  value={name}
                  onChange={this.handleChangeName}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-code"
                  label="Code"
                  type="text"
                  value={code}
                  onChange={this.handleChangeCode}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                </FormControl>
            </div>
            <div className={classes.field}>
              <FormControl className={classes.margin}>
                <TextField
                  id="outlined-email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={this.handleChangeEmail}
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

AddDepartment.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddDepartment);
