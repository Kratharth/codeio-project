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
import { SidebarAdmin,SidebarDepartment,SidebarStudent,SidebarLecturer, Topbar, Footer } from './components';

// Component styles
import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm', 'md'].includes(props.width);

    this.state = {
      isOpen: !isMobile
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  selectSideBar = () => {
    if (this.props.type === 'student') return <SidebarStudent className={this.props.classes.sidebar} />;
    else if (this.props.type === 'admin') return <SidebarAdmin className={this.props.classes.sidebar} />;
    else if (this.props.type === 'department') return <SidebarDepartment className={this.props.classes.sidebar} />;
    else if (this.props.type === 'lecturer') return <SidebarLecturer className={this.props.classes.sidebar} />;
  };


  render() {
    const { classes, width, title, children ,type } = this.props;
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
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? 'temporary' : 'persistent'}
        >
          {/* <Sidebar className={classes.sidebar} /> */}
          {this.selectSideBar()}
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
