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
import TransferFrom from './TransferFrom';
import TransferTo from './TransferTo';
import { Button } from '@material-ui/core';


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
  },
   menu: {
     width: '80px',
     alignItems: 'center',
     justifyContent: 'center',
     position: 'relative'
   }
});

class TransferSession extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes, type} = this.props;
    return (
      <DashboardLayout title="TransferSession" type={type}>
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
              <TransferFrom/>
            </Grid>
            <Grid
              item 
              lg={6}
              md={6}
              xl={4}
              xs={12}
            >
              <TransferTo/>
            </Grid>
            <Grid
            item 
            lg={2}
            md={4}
            xl={6}
            xs={8}
            >
            <div className ={classes.menu}>
            <Button
            color="primary"
            variant="contained"
          >
            Transfer
          </Button>
            </div>
            </Grid>
            
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

TransferSession.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles) (TransferSession);