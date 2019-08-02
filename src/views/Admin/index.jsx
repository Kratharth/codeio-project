import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Grid } from '@material-ui/core';
// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Custom components
import { AddAdmin, AddDepartment, AddLecturer, AddStudent } from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: '48px',
    paddingBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    //position: 'relative',
    marginTop: '24px',
    alignItems: 'center',
    minHeight:'100vh'
  }
});

class AddUser extends Component {
  addUser = (userType) => {
    switch (userType) {
      case 'Lecturer': return <AddLecturer />
      case 'Student': return <AddStudent />
      case 'Admin': return <AddAdmin />
      case 'Department': return <AddDepartment />
      default: return null
    }
  };

  render() {
    const { classes, userType } = this.props;
    return (
      <DashboardLayout title={`Add ${userType}`}>
        <div className={classes.root}>
          <Grid
            container
            spacing={10}
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              {this.addUser(userType)}

            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

AddUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddUser);
