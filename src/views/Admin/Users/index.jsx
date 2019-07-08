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
import AddAdmin from './AddAdmin/index';
import { height } from '@material-ui/system';

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

class UserAdmin extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes } = this.props;
    return (
      <DashboardLayout title="UserAdmin">
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
              <AddAdmin />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

UserAdmin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles) (UserAdmin);