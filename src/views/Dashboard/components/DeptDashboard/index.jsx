import React from 'react';
// Material components
import { Grid } from '@material-ui/core';
// Custom components
import {
  Budget,
  Users,
  Progress,
  Profit,
  SalesChart,
  Guest
} from './components';

function DeptDashboard(){
    const styles={
      height : '100%'
    }
    return (
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget style={styles} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Users style={styles} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Progress style={styles} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <SalesChart style={styles} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Guest style={styles} />
            </Grid>
          </Grid>
    );
  }

export default DeptDashboard;
