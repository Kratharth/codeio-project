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
import { CourseeditDetails } from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Coursecontrol extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes,type } = this.props;

    return (
      
      <DashboardLayout title="Course Edit" type={type}  >
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
              <CourseeditDetails />
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
