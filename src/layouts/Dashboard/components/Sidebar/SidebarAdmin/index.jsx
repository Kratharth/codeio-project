import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse
} from '@material-ui/core';
// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  CameraAlt as cameraAlt,
  ExpandLess,
  ExpandMore,
  CalendarToday,
  Videocam as VideoIcon,
  Delete
} from '@material-ui/icons';
// Component styles
import styles from './styles';
// User Context
import { UserContext } from 'userContext';

const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
let newOpen = [false, false];

class SidebarAdmin extends Component {
  static contextType = UserContext;

  state = {
    open: newOpen
  }

  handleClick = e => {
    newOpen = this.state.open.map((ele, index) => (index === e.currentTarget.dataset.open_id) ? !ele : false);
    this.setState({ open: newOpen });
  }

  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.logoWrapper}>
          <img
            alt="BMSCE Logo"
            className={classes.logoImage}
            src="/images/bmslogo.png"
          />
          &nbsp;&nbsp;<Typography className={classes.Text}><strong>BMSCE LRS</strong></Typography>
        </div>

        {/* admin details */}
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account">
            <Avatar
              alt="Admin"
              className={classes.avatar}
              src="/images/avatars/avatar.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            {this.context.user.name} {/* admin name */}
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            Admin
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        {/*Start of the list */}
        <List
          component="div"
          disablePadding
        >
          {/*dashboard*/}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          {/* Time Table*/}
          <ListItem
            component={newLink}
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            to="/create-time-table"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <CalendarToday />
            </ListItemIcon >
            <ListItemText classes={{ primary: classes.listItemText }}
              primary="Time Table" />
          </ListItem>

          {/* Videos */}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/courses"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <VideoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Videos"
            />
          </ListItem>

          {/* Users*/}
          <ListItem button data-open_id={0} onClick={this.handleClick}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon >
            <ListItemText classes={{ primary: classes.listItemText }}
              primary="Users" />
            {!this.state.open[0] ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={this.state.open[0]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/addUser/Admin">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Admin" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/addUser/Department">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Department" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/addUser/Student">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Student" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/addUser/Lecturer">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Lecturer" />
              </ListItem>
            </List>
          </Collapse>

          {/*Devices */}
          <ListItem button data-open_id={1} onClick={this.handleClick}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <cameraAlt />
            </ListItemIcon >
            <ListItemText classes={{ primary: classes.listItemText }}
              primary="Devices" />
            {!this.state.open[1] ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={this.state.open[1]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/camera">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <cameraAlt />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Camera" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/mapping">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <cameraAlt />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Mapping" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/processor">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <cameraAlt />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Processors" />
              </ListItem>
            </List>
          </Collapse>

          {/* Delete Videos*/}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/deletevideos"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Delete />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Delete Videos"
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

SidebarAdmin.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarAdmin);
