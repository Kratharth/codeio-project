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
//import { AccountProfile, AccountDetails } from './components';
import MaterialTableDemo from './timetable';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Timetable extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes,type } = this.props;

    return (
      <DashboardLayout title="Timetable" type={type}>
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
            {/* <Grid
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
              <AccountProfile />
            </Grid>  */}
            <Grid
              item
              lg={12}
              md={6}
              xl={8}
              xs={12}
            >
              <MaterialTableDemo />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Timetable.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['admin','department','lecturer','department'])
};

export default withStyles(styles)(Timetable);
