import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
import VideoIcon from '@material-ui/icons/Videocam';
import DesktopIcon from '@material-ui/icons/DesktopWindows';

// Component styles
import styles from './styles';
let courses=false;
let myvideos=false;
const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SidebarLecturer extends Component {

  state ={
    open1:true,
    open2:true
  }
  componentWillMount(){
    courses?(this.state.open1=true):(this.state.open1=false);
    myvideos?(this.state.open2=true):(this.state.open2=false);
  }
   //opening and closing of course-catalog
  handleClick1=()=>{
    courses=true;
    myvideos=false;
    this.setState({
      open1:!this.state.open1
    })
  }
  // opening and closing of my videos
  handleClick2=()=>{
    myvideos=true;
    courses=false;
    this.setState({
      open2:!this.state.open2
    })
  }
  render() {
    const { classes, className } = this.props;
    console.log(this.props)
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
          src="/images/bmscce.png"
        />
    </Link>
    &nbsp;&nbsp;<Typography className = {classes.Text}><strong>BMSCE LRS</strong></Typography>
        </div>
       {/* Lecturer details */}

        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/lecturer/account">
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
           Dr.Umadevi
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
            to="/lecturer/dashboard"
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
          >
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
            component={newLink}
            to="/lecturer/sem1">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-1"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem2">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-2"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem3">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-3"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem4">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-4"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem5">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-5"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem6">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-6"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem7">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-7"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/sem8">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-8"/>
          </ListItem>
          </List>
          </Collapse>

          {/*Record Videos*/}

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/record"
          >
            <ListItemIcon clsName={classes.listItemIcon}>
              <VideoIcon/>
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Record Videos"
            />
          </ListItem>

      {/*My Videos*/}

          <ListItem button onClick={this.handleClick2}
          className={classes.listItem}
          >
           <ListItemIcon className={classes.listItemIcon}>
          <VideoIcon/>
          </ListItemIcon >
            <ListItemText  classes={{ primary: classes.listItemText }}
              primary="My Videos"/>
          {!this.state.open2 ? <ExpandMore />: <ExpandLess />}
          </ListItem>
          <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/ds">
          <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
          </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Data Structures"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/cn">
          <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
          </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="Computer Networks"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/lecturer/iot">
          <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
          </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="IOT"/>
            </ListItem>
          </List>
          </Collapse>

        {/*Transfer Session*/}

        <ListItem
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
          </ListItem>

          {/*Videoedit*/}

          <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to="/lecturer/videoedit"
            >
              <ListItemIcon className={classes.listItemIcon}>
              <VideoIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Video edit"
              />
            </ListItem>
        </List>


      {/* <Divider className={classes.listDivider} />

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
            to="/lecturer/help"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Help />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Help and support"
            />
          </ListItem>
        </List> */}
      </div>
    );
  }
}

SidebarLecturer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarLecturer);

