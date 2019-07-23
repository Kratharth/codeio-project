import React from 'react';
// Material components
import { Grid } from '@material-ui/core';
// Custom components
import {
  Students,
  Faculty,
  Videos,
  VideoVsDepChart
} from './components';

function AdminDashboard(){
   const styles={
     height : '100%'
   }
    return (
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
              <Students style={styles} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Faculty style={styles} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Videos style={styles} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <VideoVsDepChart style={styles} />
            </Grid>
          </Grid>
    );
  }

export default AdminDashboard;
