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
  CameraAlt as CameraAlt,
  ExpandLess,
  ExpandMore,
  CalendarToday,
  Videocam as VideoIcon,
  Delete
} from '@material-ui/icons';
// Component styles
import styles from './styles';

// let time_table = false;
// let users = false;
// let devices = false;
// let academics = false;

const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SidebarAdmin extends Component {
  // state = {
  //   open1: false,
  //   open2: false,
  //   open3: false,
  //   // open4:false
  // }
  // // opening and closing of drop downs in side-navs
  // componentWillMount() {
  //   (time_table) ? (this.state.open1 = true) : (this.state.open1 = false);
  //   (users) ? (this.state.open2 = true) : (this.state.open2 = false);
  //   (devices) ? (this.state.open3 = true) : (this.state.open3 = false);
  //   // (academics)?(this.state.open4=true):(this.state.open4=false);
  // }
  // // for Time Table
  // handleClick1 = () => {
  //   time_table = true;
  //   users = false;
  //   devices = false;
  //   // academics=false;
  //   this.setState({
  //     open1: !this.state.open1
  //   })
  // }

  // // for Users
  // handleClick2 = () => {
  //   users = true;
  //   devices = false;
  //   // academics=false;
  //   time_table = false;
  //   this.setState({
  //     open2: !this.state.open2
  //   })
  // }

  // // for devices
  // handleClick3 = () => {
  //   devices = true;
  //   // academics=false;
  //   time_table = false;
  //   users = false;
  //   this.setState({
  //     open3: !this.state.open3
  //   })
  // }

  //for academics
  // handleClick4=()=>{
  //   academics=true;
  //   time_table=false;
  //   users=false;
  //   devices=false;
  //   this.setState({
  //     open4:!this.state.open4
  //   })
  // }

  state = {
    open: [
      false,
      false
    ]
  }

  handleClick = e => {
    const newOpen = this.state.open;
    newOpen[e.currentTarget.dataset.open_id] = !newOpen[e.currentTarget.dataset.open_id];
    this.setState({ newOpen });
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
              src="/images/bmslogo.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            Anil {/* admin name */}
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
            to="/admindashboard"
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
            <ListItemIcon clsName={classes.listItemIcon}>
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
              <CameraAlt />
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
                  <CameraAlt />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Camera" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/mapping">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <CameraAlt />
                </ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText }}
                  primary="Mapping" />
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/processor">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <CameraAlt />
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