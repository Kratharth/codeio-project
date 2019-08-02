import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Avatar, Typography, Button, LinearProgress } from '@material-ui/core';

// Shared components
import { Portlet, PortletContent, PortletFooter } from 'components';

// Component styles
import styles from './styles';

//
//import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Input,
  MenuItem,
  FormControl,
  Select, TextField
} from '@material-ui/core';
import { AddPhotoAlternate as AddIcon, Delete as DeleteIcon } from '@material-ui/icons';


class AccountProfile extends Component {

  state = {
    open: false,
    age: '',
  };

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: !this.state.open });
  }

  handleClose = () => {
    this.setState({ open: !this.state.open });
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
              <Typography variant="h2">John Doe</Typography>
              <Typography
                className={classes.locationText}
                variant="body1"
              >
                Rm. Valcea, Romania
              </Typography>
              {/* <Typography
                className={classes.dateText}
                variant="body1"
              >
                4:32PM (GMT-4)
              </Typography> */}
            </div>
            <Avatar
              className={classes.avatar}
              src="/images/avatars/avatar_11.png"
            />
          </div>
          {/* <div className={classes.progressWrapper}>
            <Typography variant="body1">Profile Completeness: 70%</Typography>
            <LinearProgress
              value={70}
              variant="determinate"
            />
          </div> */}
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
                {/* <InputLabel htmlFor="age-native-simple">Age</InputLabel>
              <Select
                native
                value={this.state.age}
                onChange={this.handleChange('age')}
                input={<Input id="age-native-simple" />}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange('age')}
                input={<Input id="age-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}
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
