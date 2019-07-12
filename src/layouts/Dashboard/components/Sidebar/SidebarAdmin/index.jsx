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
  AccountBalance,
  Delete
} from '@material-ui/icons';
// Component styles
import styles from './styles';
import { thisExpression } from '@babel/types';

const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SidebarAdmin extends Component {
  state= {
    open:[
      false,
      false,
      false
    ]
  }
  handleClick=(e)=>{
    let o = this.state.open;
    o[e.currentTarget.dataset.open_id] =!o[e.currentTarget.dataset.open_id];
    console.log(o);
    this.setState({
      open: o
    })
  }
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
          &nbsp;&nbsp;<Typography className = {classes.Text}><strong>BMSCE LRS</strong></Typography>
        </div>
       {/* admin details */}
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/admin/account">
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
            to="/admin/dashboard"
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
          <ListItem activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={newLink}
              to="/admin/create-time-table">
              <ListItemIcon className={classes.listItemIcon}>
                <CalendarToday/>
              </ListItemIcon>
              <ListItemText  classes={{ primary: classes.listItemText }}
                primary="Time Table"/>
          </ListItem>
           {/* Users*/}
            <ListItem button data-open_id={0} onClick={this.handleClick}
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <PeopleIcon/>
              </ListItemIcon >
              <ListItemText  classes={{ primary: classes.listItemText }}
                primary="Users"/>
              {!this.state.open[0] ? <ExpandMore />: <ExpandLess />}
            </ListItem>
            <Collapse in={this.state.open[0]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/addUser/admin">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                    primary="Admin"/>
                </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/addUser/department">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Department"/>
                </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/addUser/lecturer">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <PeopleIcon/>
                  </ListItemIcon>
                    <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Lecturer"/>
                </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/addUser/student">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <PeopleIcon/>
                  </ListItemIcon>
                    <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Student"/>
                </ListItem>
              </List>
            </Collapse>
            {/*Devices */}
            <ListItem button data-open_id={1} onClick={this.handleClick}
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <CameraAlt/>
              </ListItemIcon >
              <ListItemText  classes={{ primary: classes.listItemText }}
                primary="Devices"/>
              {!this.state.open[1] ? <ExpandMore />: <ExpandLess />}
            </ListItem>
            <Collapse in={this.state.open[1]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/admin/camera">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <CameraAlt/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Camera"/>
                </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/admin/mapping">
                  <ListItemIcon className={classes.sublistItemIcon}>
                  <CameraAlt/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Mapping"/>
                </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/admin/processor">
                  <ListItemIcon className={classes.sublistItemIcon}>
                  <CameraAlt/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Processors"/>
                </ListItem>
              </List>
            </Collapse>
            {/* Academics*/ }
            <ListItem button data-open_id={2} onClick={this.handleClick}
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <AccountBalance/>
              </ListItemIcon >
              <ListItemText  classes={{ primary: classes.listItemText }}
                primary="Academics"/>
              {!this.state.open[2] ? <ExpandMore />: <ExpandLess />}
            </ListItem>
            <Collapse in={this.state.open[2]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem activeClassName={classes.activeListItem}
                    className={classes.listItem}
                    component={newLink}
                    to="/admin/department">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <AccountBalance/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                    primary="Departments"/>
                  </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/admin/subjects">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <AccountBalance/>
                  </ListItemIcon>
                  <ListItemText  classes={{ primary: classes.listItemText }}
                    primary="Subjects"/>
                </ListItem>
                <ListItem activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={newLink}
                  to="/admin/classrooms">
                  <ListItemIcon className={classes.sublistItemIcon}>
                    <AccountBalance/>
                  </ListItemIcon>
                    <ListItemText  classes={{ primary: classes.listItemText }}
                      primary="Classrooms"/>
                </ListItem>
              </List>
            </Collapse>
            {/* Delete Videos*/}
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={newLink}
              to="/admin/deletevideos"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <Delete/>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Delete Videos"
              />
          </ListItem>
        </List>
        {/* end of list */}
      </div>
    );
  }
}

SidebarAdmin.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarAdmin);
