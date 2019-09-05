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
import { VideoEditDetails, VideoPlay } from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class VideoEdit extends Component {

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Video Edit">
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
              <VideoPlay title="Title" description="Description" src="https://codeiovideossource.s3.ap-south-1.amazonaws.com/videos/Test.mp4"/>
            </Grid>


          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

VideoEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoEdit);
