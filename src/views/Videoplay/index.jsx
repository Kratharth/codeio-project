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
import { VideoeditDetails,Videoplay } from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Videoedit extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes,type} = this.props;

    return (
      <DashboardLayout title="Videoedit" type={type}>
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
          <Grid
            item
            lg={8}
            md={6}
            xl={8}
            xs={12}
          >
            <Videoplay />
          </Grid>

            {/* <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              <VideoeditDetails />
            </Grid> */}

          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Videoedit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videoedit);
