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
  ListSubheader,
  Typography
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  CameraAlt as CameraAlt,
  Help,

} from '@material-ui/icons';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CalenderToday from '@material-ui/icons/CalendarToday';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Delete from '@material-ui/icons/Delete';

// Component styles
import styles from './styles';
import { thisExpression } from '@babel/types';

class SidebarAdmin extends Component {
  state ={
    open1:true,
    open2:true,
    open3:true,
    open4:true
  }
  // opening and closing of drop downs in side-navs
     
     // for Time Table
  handleClick1(){
    this.setState({
      open1:!this.state.open1
    })
  }
   
   // for Users
  handleClick2(){
    this.setState({
      open2:!this.state.open2
    })
  }

   // for devices
  handleClick3(){
    this.setState({
      open3:!this.state.open3
    })
  }

  //for academics
  handleClick4(){
    this.setState({
      open4:!this.state.open4
    })
  }
  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>

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
            Anil
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
            component={NavLink}
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

          <ListItem button onClick={this.handleClick1.bind(this)}
          className={classes.listItem}
          activeClassName={classes.activeListItem}
          component={NavLink}>
           <ListItemIcon className={classes.listItemIcon}>
          <CalenderToday/>
         </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Time Table"/>
          {!this.state.open1 ? <ExpandMore />: <ExpandLess />}
        </ListItem>
       <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/create-time-table">
        <ListItemIcon className={classes.sublistItemIcon}>
          <CalenderToday/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Create Time Table"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/view-time-table">
        <ListItemIcon className={classes.sublistItemIcon}>
          <CalenderToday/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Time Table Details"/>
          </ListItem>
          </List>
          </Collapse>
         

           {/* Users*/}
            <ListItem button onClick={this.handleClick2.bind(this)}
          className={classes.listItem}
          activeClassName={classes.activeListItem}
          component={NavLink}>
           <ListItemIcon className={classes.listItemIcon}>
          <PeopleIcon/>
         </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Users"/>
        {!this.state.open2 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/admin">
        <ListItemIcon className={classes.sublistItemIcon}>
          <PeopleIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Admin"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/student">
        <ListItemIcon className={classes.sublistItemIcon}>
          <PeopleIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Student"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/Lecturer">
        <ListItemIcon className={classes.sublistItemIcon}>
          <PeopleIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Lecturer"/>
          </ListItem>
          </List>
          </Collapse>
           

           {/*Devices */}
          <ListItem button onClick={this.handleClick3.bind(this)}
          className={classes.listItem}
          activeClassName={classes.activeListItem}
          component={NavLink}>
           <ListItemIcon className={classes.listItemIcon}>
          <CameraAlt/>
         </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Devices"/>
            {!this.state.open3 ? <ExpandMore />: <ExpandLess />}
            </ListItem>
            <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/camera">
          <ListItemIcon className={classes.sublistItemIcon}>
            <CameraAlt/>
          </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Camera"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/mapping">
          <ListItemIcon className={classes.sublistItemIcon}>
          <CameraAlt/>
          </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Mapping"/>
          </ListItem>
          </List>
          </Collapse>
        
         {/* Academics*/ }

     <ListItem button onClick={this.handleClick4.bind(this)}
          className={classes.listItem}
          activeClassName={classes.activeListItem}
          component={NavLink}>
           <ListItemIcon className={classes.listItemIcon}>
          <AccountBalance/>
         </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Academics"/>
        {!this.state.open4 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/department">
        <ListItemIcon className={classes.sublistItemIcon}>
          <AccountBalance/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Departments"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/subjects">
        <ListItemIcon className={classes.sublistItemIcon}>
          <AccountBalance/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Subjects"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
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
            component={NavLink}
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

        <Divider className={classes.listDivider} />

        {/*help and support*/}

        <List
          component="div"
          disablePadding
          subheader={
            <ListSubheader className={classes.listSubheader}>
              Support
            </ListSubheader>
          }
        >
          <ListItem
            className={classes.listItem}
            className={classes.listItem}
            component={NavLink}
            to="/admin/help"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Help />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Help and support"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

SidebarAdmin.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarAdmin);

