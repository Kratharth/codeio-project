import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { CircularProgress, Typography } from '@material-ui/core';
// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Alert
import { AlertDialog } from 'components';
//Service methods
import { getCameras } from 'services/camera';
// Custom components
import { CameraToolbar, CameraTable } from './components';
// Component styles
import styles from './style';

class CameraList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 100,
    camera: [],
    selectedcamera: [],
    error: null
  };

  async getCameras() {
    try {
      this.setState({ isLoading: true });
      //const { limit } = this.state;
      const { camera } = await (getCameras());
      if (this.signal) {
        this.setState({
          isLoading: false,
          camera
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getCameras();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSelect = selectedcamera => {
    this.setState({ selectedcamera });
  };

  renderCameras() {
    const { classes } = this.props;
    const { isLoading, camera, error } = this.state;

    if (camera === null) {
      this.setState({ isLoading: false })
      return (
        <AlertDialog message="Something unexpected has occured :(" />
      );
    }

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <Typography variant="h6">{error}</Typography>;
    }

    // if (camera.length === 0) {
    //   return <Typography variant="h6">There are no cameras</Typography>;
    // }

    return (
      <CameraTable
        onSelect={this.handleSelect}
        cameras={camera}
        selectedcameras={this.state.selectedcamera}
      />
    );
  }

  render() {
    const { classes } = this.props;
    const { selectedcamera } = this.state;

    return (
      <DashboardLayout title="Camera" >
        <div className={classes.root}>
          <CameraToolbar selectedcamera={selectedcamera} camera={this.state.camera} />
          <div className={classes.content}>{this.renderCameras()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

CameraList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CameraList);
