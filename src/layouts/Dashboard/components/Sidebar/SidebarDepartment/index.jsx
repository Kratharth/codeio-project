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
  //Collapse
} from '@material-ui/core';
// Material icons
import {
  DashboardOutlined as DashboardIcon,
  Create as EditIcon,
  ExpandLess,
  ExpandMore,
  Videocam as VideoIcon,
  Book as BookIcon,
  DesktopWindows as DesktopIcon,
  Schedule as ScheduleIcon
} from '@material-ui/icons';
// import BookIcon from '@material-ui/icons/Book';
// import DesktopIcon from '@material-ui/icons/DesktopWindows';
// import ScheduleIcon from '@material-ui/icons/Schedule';

// Component styles
import styles from './styles';

const newLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
// let courses=false;
class SidebarDepartment extends Component {

  //opening and closing of course-catalog
  // state ={
  //   open1:false
  // }
  // handleClick1=()=>{
  //   courses=true;
  //   this.setState({
  //     open1:!this.state.open1
  //   })
  // }
  // componentWillMount(){
  //   courses?(this.state.open1=true):(this.state.open1=false);
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
          &nbsp;&nbsp;<Typography className={classes.Text}><strong>BMSCE LRS</strong></Typography>
        </div>
        {/* department details */}
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/department/account">
            <Avatar
              alt="CSE"
              className={classes.avatar}
              src="/images/bmslogo.png"
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            CSE
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
            to="/department/deptdashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>

          {/*course catalog*/}
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
        {/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem1">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-1"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem2">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-2"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem3">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-3"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem4">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-4"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem5">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-5"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem6">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-6"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem7">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-7"/>
          </ListItem>
          <ListItem activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem8">
        <ListItemIcon className={classes.sublistItemIcon}>
          <BookIcon/>
         </ListItemIcon>
          <ListItemText  classes={{ primary: classes.listItemText }}
              primary="SEM-8"/>
          </ListItem>
          </List>
          </Collapse>


          {/*Videos*/}

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/sem1"
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

          {/*Transfer Session */}
          <ListItem
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
          </ListItem>

          {/*guest lecuture*/}

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/videorecordguest"
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
            to="/department/courseedit"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Course edit"
            />
          </ListItem>
          {/*Add a Schedule */}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={newLink}
            to="/department/addschedule"
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
