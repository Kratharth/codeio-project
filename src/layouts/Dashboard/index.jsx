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
import { Topbar, Footer, 
SidebarAdmin, 
SidebarDept, 
SidebarLecturer, 
SidebarStudent}
 from './components';

// Component styles
import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm', 'md'].includes(props.width); // isMobile contains a boolean value
    // includes() here checks if the array contains props.width 
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

  sidebarType = (type,classes) => {
     switch(type){
      case 'admin': return <SidebarAdmin className={classes.sidebar}/>
      case 'department': return <SidebarDept className={classes.sidebar}/>
      case 'lecturer': return <SidebarLecturer className={classes.sidebar}/>
      case 'student': return <SidebarStudent className={classes.sidebar}/>
      default : return null
     }
  };

  render() {
    const { classes, width, title, children,type } = this.props;
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
          {this.sidebarType(type,classes)}
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
  width: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['admin','department','lecturer','student'])
};

export default compose(
  withStyles(styles),
  withWidth()
)(Dashboard);
