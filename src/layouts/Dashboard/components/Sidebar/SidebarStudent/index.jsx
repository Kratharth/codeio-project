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
  Book as BookIcon,
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';

import VideoIcon from'@material-ui/icons/Videocam';
// Component styles
import styles from './styles';
// import { SidebarStudent } from '../..';
let courses=false;
const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SidebarStudent extends Component {

  //opening and closing of course-catalog

  // state ={
  //    open1:false,
  //   //anchorEl:null
  // }
  // componentWillMount(){
  //   courses?(this.state.open1=true):(this.state.open1=false);
  // }
  // handleClick1= ()=>{
  //   courses=true;
  //   this.setState({
  //     open1:!this.state.open1
  //   })
  // }
  // handleClick1=(event)=>{
  //   this.setState({
  //     anchorEl: event.currentTarget
  //   })
  // };
  
  // handleClose=(event)=>{
  //   this.setState({
  //     anchorEl: null
  //   })
  // }
  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);
    return (
      <div className={rootClassName}>
        <div className={classes.logoWrapper}>
        {/* Bmsce logo */}
          <Link
            className={classes.logoLink}
            to="/"
          >
          <img
              alt="BMSCE Logo"
              className={classes.logoImage}
              src="/images/bmslogo.png"
            />
          </Link>
          &nbsp;&nbsp;<Typography className = {classes.Text}><strong>BMSCE LRS</strong></Typography>
        </div>
        {/* student details */}
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/student/account">
            <Avatar
              alt="Kratharth Hegde"
              className={classes.avatar}
              src="/images/bmslogo.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            Kratharth {/* student name */}
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
            component={newLink}
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

{/* 
          <ListItem button onClick={this.handleClick1}
          className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <BookIcon/>
            </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Course Catalog"/>
            {!this.state.open ? <ExpandMore />: <ExpandLess />}
        </ListItem>
       <Collapse in={this.state.open1} timeout="auto" unmountOnExit> */}
          {/* <Popover 
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            > */}
            {/* <List component="div" disablePadding>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem1">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-1"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem2">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-2"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem3">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-3"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem4">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-4"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem5">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-5"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem6">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-6"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem7">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-7"/>
              </ListItem>
              <ListItem activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={newLink}
                to="/student/sem8">
                <ListItemIcon className={classes.sublistItemIcon}>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText  classes={{ primary: classes.listItemText }}
                  primary="SEM-8"/>
              </ListItem>
            </List> */}
            {/* </Popover> */}
          {/* </Collapse> */}


          {/*Videos*/}

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/student/sem1"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <VideoIcon/>
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Videos"
            />
          </ListItem> 
        </List>
      </div>
    );
  }
}

SidebarStudent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarStudent);
