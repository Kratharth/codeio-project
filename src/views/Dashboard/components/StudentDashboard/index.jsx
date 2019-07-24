import React from 'react';
// Material components
import { Grid,Card } from '@material-ui/core';

import {Paper,Videoplay} from 'components';
// Custom components
import {
  Students,
  Faculty,
  Videos,
  VideoVsMonChart
} from './components';


function StudentDashboard () {
  const styles={
    height: '100%'
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
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <VideoVsMonChart style={styles} />
            </Grid>

          </Grid>
    );
  }


export default StudentDashboard;
