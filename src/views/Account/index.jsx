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
import { AccountAdmin, AccountLecturer, AccountStudent } from './components/AccountDetails';
import { AccountDept } from './components/AccountDetails';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Account extends Component {
  state = { tabIndex: 0 };
  accountDetailType = (type)=>{
    switch(type){
      case 'admin':return <AccountAdmin/>
      case 'lecturer':return <AccountLecturer/>
      case 'student':return <AccountStudent/>
      case 'department': return <AccountDept />
      default :return null;
    
    }
  }

  render() {
    const { classes,type} = this.props;

    return (
      <DashboardLayout title="Account" type={type}>
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
            { <Grid
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
              <AccountProfile />
            </Grid>  }
            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              {/* <AccountDetails /> */}
              {this.accountDetailType(type)}
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['admin','department','lecturer','student']).isRequired
};

export default withStyles(styles)(Account);
