import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import {
  Topbar, Footer,
  SidebarAdmin,
  SidebarDepartment,
  SidebarLecturer,
  SidebarStudent
}
  from './components';

// Component styles
import styles from './styles';
// user-context
import { UserContext } from 'userContext';

class Dashboard extends Component {
  static contextType = UserContext;
  state = {
    isOpen: !['xs', 'sm', 'md'].includes(this.props.width)
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  selectSideBar = type => {
    switch (type) {
      case 'admin': return <SidebarAdmin className={this.props.classes.sidebar} />;
      case 'department': return <SidebarDepartment className={this.props.classes.sidebar} />;
      case 'lecturer': return <SidebarLecturer className={this.props.classes.sidebar} />;
      case 'student': return <SidebarStudent className={this.props.classes.sidebar} />;
      default: return null
    }
  };


  render() {
    const { classes, width, title, children } = this.props;
    const { isOpen } = this.state;
    const isMobile = ['xs', 'sm', 'md'].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
          type={type}
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? 'temporary' : 'persistent'}
        >
          {this.selectSideBar(this.context.user.type)}
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Dashboard);
