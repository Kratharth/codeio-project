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
import { AccountProfile } from './components';
import { AccountAdmin, AccountDept, AccountLecturer, AccountStudent } from './components/AccountDetails';
//User Context
import { UserContext } from 'userContext';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    minHeight: '100vh'
  }
});

class Account extends Component {

  static contextType = UserContext;

  accountDetailType = (type) => {
    switch (type) {
      case 'Admin': return <AccountAdmin />
      case 'Lecturer': return <AccountLecturer />
      case 'Student': return <AccountStudent />
      case 'Department': return <AccountDept />
      default: return null;

    }
  }

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Account" >
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
            {<Grid
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
              <AccountProfile />
            </Grid>}
            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              {this.accountDetailType(this.context.user.type)}
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
