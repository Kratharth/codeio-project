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
  Help as Help
} from '@material-ui/icons';
import BookIcon from '@material-ui/icons/Book';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// Component styles
import styles from './styles';
// import { SidebarStudent } from '../..';

class SidebarStudent extends Component {
  
  //opening and closing of course-catalog
  
  state ={
    open1:true
  }
  handleClick1(){
    this.setState({
      open1:!this.state.open1
    })
  }
  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
      <div className={classes.logoWrapper}>

      {/* Bmsce logo */}
        <Link
          className={classes.logoLink}
          to="/"
        >
          <img
            alt="BMSCE Logo"
            className={classes.logoImage}
            src="/images/bmscce.png"
          />
        </Link>
      </div>

     {/* student details */}
      <Divider className={classes.logoDivider} />
      <div className={classes.profile}>
        <Link to="/student/account">
          <Avatar
            alt="Kratharth Hegde"
            className={classes.avatar}
            src="/images/avatars/avatar_1.png"
          />
        </Link>
        <Typography
          className={classes.nameText}
          variant="h6"
        >
          Kratharth
        </Typography>
        <Typography
          className={classes.bioText}
          variant="caption"
        >
          Student
        </Typography>
      </div>


      <Divider className={classes.profileDivider} />
        
        {/*start of the list */}

        <List
          component="div"
          disablePadding
        >
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>

          {/* Course Catalog */}


          <ListItem button onClick={this.handleClick1.bind(this)}
          className={classes.listItem}
          activeClassName={classes.activeListItem}
          component={NavLink}>
           <ListItemIcon className={classes.listItemIcon}>
          <BookIcon/>
         </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Course Catalog"/>
          {!this.state.open1 ? <ExpandMore />: <ExpandLess />}
        </ListItem>
       <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem1">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-1"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem2">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-2"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem3">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-3"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem4">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-4"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem5">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-5"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem6">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-6"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem7">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-7"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/student/sem8">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-8"/>
          </ListItem>
          </List>
          </Collapse>
         
        </List>


        <Divider className={classes.listDivider} />

       
        {/* Help and support */}

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
            to="/student/help"
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

SidebarStudent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarStudent);
