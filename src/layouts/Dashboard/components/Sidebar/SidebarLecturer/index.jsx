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
  Videocam as VideoIcon
} from '@material-ui/icons';
// Component styles
import styles from './styles';
//User Context
import { UserContext } from 'userContext';

const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SidebarLecturer extends Component {
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
        {/* Lecturer details */}
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account">
            <Avatar
              alt="Lecturer"
              className={classes.avatar}
              src="/images/bmslogo.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            {this.context.user.name} {/*name of lecturer */}
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            Lecturer
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List
          component="div"
          disablePadding
        >
          {/*Dashboard*/}
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
            //to="/lecturer/sem1"
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

          {/*Record Videos*/}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/record"
          >
            <ListItemIcon clsName={classes.listItemIcon}>
              <VideoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Record Videos"
            />
          </ListItem>

          {/*My Videos*/}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/myvideos"
          >
            <ListItemIcon clsName={classes.listItemIcon}>
              <VideoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="My Videos"
            />
          </ListItem>

          {/*Transfer Session*/}

          {/* <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/transfer"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DesktopIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Transfer Session"
            />
          </ListItem> */}
          {/*Videoedit*/}

        </List>
      </div>
    );
  }
}

SidebarLecturer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarLecturer);
