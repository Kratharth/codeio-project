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
  Typography
} from '@material-ui/core';
// Material icons
import {
  DashboardOutlined as DashboardIcon,
  Create as EditIcon,
  Videocam as VideoIcon,
  DesktopWindows as DesktopIcon,
  Schedule as ScheduleIcon
} from '@material-ui/icons';
// Component styles
import styles from './styles';
// UserContext
import { UserContext } from 'userContext';

const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SidebarDepartment extends Component {
  static contextType = UserContext;

  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);
    return (
      <div className={rootClassName}>
        <div className={classes.logoWrapper}>
          {/* Bmsce logo */}
          <img
            alt="BMSCE Logo"
            className={classes.logoImage}
            src="/images/bmslogo.png"
          />
          &nbsp;&nbsp;<Typography className={classes.Text}><strong>BMSCE LRS</strong></Typography>
        </div>
        {/* department details */}
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/department/account">
            <Avatar
              alt="Dept"
              className={classes.avatar}
              src="/images/avatars/avatar.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            {this.context.user.name} {/*name of dept */}
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            Department
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        {/*list starts */}
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

          {/*Videos*/}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            //to="/department/sem1"
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

          {/*Transfer Session */}
          {/* <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/transfer"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DesktopIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Transfer Session"
            />
          </ListItem> */}

          {/*guest lecuture*/}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/videorecordguest"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DesktopIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Record"
            />
          </ListItem>

          {/*Courseedit */}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/courseedit"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Course Details"
            />
          </ListItem>

          {/*Add a Schedule */}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/addschedule"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Add Schedule"
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

SidebarDepartment.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarDepartment);
