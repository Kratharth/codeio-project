import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Custom components
import {
  AdminDashboard,
  DeptDashboard,
  LecturerDashboard,
  StudentDashboard
} from './components';
// UserContext
import { UserContext } from 'userContext';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Dashboard extends Component {
  static contextType = UserContext;
  selectDashboard = (type) => {
    switch (type) {
      case 'Admin': return <AdminDashboard />;
      case 'Department': return <DeptDashboard />;
      case 'Lecturer': return <LecturerDashboard />;
      case 'Student': return <StudentDashboard />;
      default: return <AdminDashboard />;
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <DashboardLayout title="Dashboard" >
        <div className={classes.root}>
          {this.selectDashboard(this.context.user.type)}
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
