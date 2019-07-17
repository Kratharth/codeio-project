import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid,Card} from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
import {Paper,Videoplay} from 'components';
// Custom components
import {
  Students,
  Faculty,
  Videos,
  Profit,
  VideoVsMonChart,
  DevicesChart,
  ProductList,
  OrdersTable
} from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  }
});

class StudentDashboard extends Component {
  render() {
    const { classes,type } = this.props;
    return (
      <DashboardLayout title="Student Dashboard" type={type}> {/*pass user type here*/}
        <div className={classes.root}>
          <Grid
            container
            spacing={6}

          >

            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
          <Videoplay/>

            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
          <Videoplay/>

            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
          <Videoplay/>

            </Grid>






        {/*    <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Profit className={classes.item} />
            </Grid>
          */}
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <VideoVsMonChart className={classes.item} />
            </Grid>
            {/*
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <DevicesChart className={classes.item} />
            </Grid>
          <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <ProductList className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <OrdersTable className={classes.item} />
            </Grid>
            */}
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

StudentDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['admin','department','lecturer','student'])
};

export default withStyles(styles)(StudentDashboard);
