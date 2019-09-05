import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography, LinearProgress } from '@material-ui/core';

// Material icons
import { InsertChartOutlined as InsertChartIcon,  Videocam as VideoIcon, } from '@material-ui/icons';

// Shared components
import { Paper,VideoPlay } from 'components';

// Component styles
import styles from './styles';






class Videos extends Component {
  state = {
    title:'',
    faculty:'',
    coursename:''
  };






  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (

      <Grid
        item
        lg={3}
        sm={6}
        xl={3}
        xs={12}
      >
        <VideoPlay title="Title" description="description" src="https://codeiovideossource.s3.ap-south-1.amazonaws.com/videos/Test.mp4" />
      </Grid>


    );
  }
}

Videos.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videos);
