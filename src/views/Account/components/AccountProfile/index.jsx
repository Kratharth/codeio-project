import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Material helpers
import { withStyles } from '@material-ui/core';
// Shared components
import { Portlet, PortletContent, PortletFooter } from 'components';
// Component styles
import styles from './styles';
// Material Components
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  Typography
} from '@material-ui/core';
import { AddPhotoAlternate as AddIcon, Delete as DeleteIcon } from '@material-ui/icons';
// User Context
import { UserContext } from 'userContext';

class AccountProfile extends Component {

  static contextType = UserContext;
  state = {
    open: false
  };

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }


  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">{this.context.user.name}</Typography>
            </div>
            <Avatar
              className={classes.avatar}
              src="/images/avatars/avatar.png"
            />
          </div>
        </PortletContent>
        <PortletFooter>
          <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            <AddIcon />  Picture
          </Button>
          <Button variant="text" color="primary"><DeleteIcon /> Picture</Button>
          <Button onClick={this.handleClickOpen} color="primary" className={classes.uploadButton}>Change Password</Button>
        </PortletFooter>


        <div><Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Password</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <div className={classes.field}>
                  <TextField
                    className={classes.textField}
                    label="Old Password"
                    margin="dense"
                    type="password"
                    required
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textField}
                    label="New Password"
                    margin="dense"
                    type="password"
                    required
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textField}
                    label="Confirm New Password"
                    margin="dense"
                    type="password"
                    required
                    variant="outlined"
                  />
                </div>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
          </Button>
          </DialogActions>
        </Dialog>
        </div>
      </Portlet>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountProfile);
