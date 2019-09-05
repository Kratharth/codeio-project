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
import { CourseEditDetails } from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    minHeight: '100vh'
  }
});

class Coursecontrol extends Component {

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Course Edit" >
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
              <CourseEditDetails />
            </Grid>

          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Coursecontrol.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Coursecontrol);
