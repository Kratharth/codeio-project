import React, { Component } from 'react';
import clsx from 'clsx';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import AddAdmin from './components/AddAdmin';
// import AddStudent from '../../../components/AddStudent';
import {AddStudent} from 'components';
import {AddLecturer} from 'components';
import {AddDepartment} from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    paddingTop: '48px',
    paddingBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

class AddUser extends Component {
  state = { tabIndex: 0 };
  addUser =(userType)=> {
    switch(userType){
      case 'lecturer': return <AddLecturer />
      case 'student': return <AddStudent />
      case 'admin': return <AddAdmin />
      case 'department': return <AddDepartment />
      default : return null
    }
  };

  render() {
    // console.log(this.props);
    const { classes, type, userType} = this.props;
    return (
      <DashboardLayout title="AddUser" type={type}>
        <div className={classes.root}>
          <Grid
            container
            spacing={8} 
          >
            <Grid
              item 
              lg={6}
              md={6}
              xl={4}
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

export default withStyles(styles) (AddUser);