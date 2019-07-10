import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

// Material helpers
import { withStyles } from '@material-ui/core';
// import passing from '../passing values'
// Material components
import {
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  IconButton,
  Button
} from '@material-ui/core';

// Shared helpers
import { getInitials } from 'helpers';

// Shared components
import { Portlet, PortletContent,Status } from 'components';

// Component styles
import styles from './styles';
import {
  Delete as DeleteIcon,
  Edit as EditIcon
}
from '@material-ui/icons';
// 
 const statusColors = {
   online: 'success',
   offline: 'danger'
};
class CameraTable extends Component {
  state = {
    selectedcamera: [],
    rowsPerPage: 5,
    page: 0,
    sliceStart: 0,
    sliceStop: 5,
    open:false
  };

  handleSelectAll = event => {
    const { camera, onSelect,selectedcameras } = this.props;

    // let selectedUsers;
    let selectedcamera;

    if (event.target.checked) {
      selectedcamera = camera.map(camera => camera.id);
    } else {
      selectedcamera = [];
    }

    this.setState({ selectedcamera });

    onSelect(selectedcamera);
  };

  handleSelectOne = (event, id) => {
    const { onSelect } = this.props;
    const { selectedcamera } = this.state;
    const selectedIndex = selectedcamera.indexOf(id);
    let newSelectedCameras = [];
     if (selectedIndex === -1) {
      newSelectedCameras = newSelectedCameras.concat(selectedcamera, id);
    } else if (selectedIndex === 0) {
      newSelectedCameras = newSelectedCameras.concat(selectedcamera.slice(1));
    } else if (selectedIndex === selectedcamera.length - 1) {
      newSelectedCameras = newSelectedCameras.concat(selectedcamera.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCameras = newSelectedCameras.concat(
        selectedcamera.slice(0, selectedIndex),
        selectedcamera.slice(selectedIndex + 1)
      );
    }

    this.setState({ selectedcamera: newSelectedCameras });

    onSelect(newSelectedCameras);
  };

  handleChangePage = (event, page) => {
    console.log(event);
    console.log(page);
    const { rowsPerPage, sliceStart } = this.state;
    var stop = (page * rowsPerPage + rowsPerPage) < (this.props.cameras.length)?
           (page * rowsPerPage + rowsPerPage) :  (this.props.cameras.length);
    this.setState({
      page,
      sliceStart: page * rowsPerPage,
      sliceStop:  stop
    });
  };

  handleChangeRowsPerPage = event => {
    // console.log('sliceStart and stop: ' + this.state.sliceStart + '  ' + this.state.sliceStop);
    const { rowsPerPage, sliceStart, sliceStop } = this.state;
    var newRowsPerPage = event.target.value;
    var newStart = Math.floor(sliceStart / newRowsPerPage) * newRowsPerPage;
    var stop = (newStart  + event.target.value) < (this.props.cameras.length)?
           (newStart  + event.target.value) :  (this.props.cameras.length);
    this.setState({
      rowsPerPage: event.target.value,
      sliceStart: newStart,
      sliceStop: stop,
      page: newStart/event.target.value
    });
    // console.log('sliceStart and stop: ' + newStart + '  ' + stop);
  };
  handleClickOpen = () => {
    this.setState({
      open:true,
    })
  }
  handleClose = () => {
    this.setState({
      open:false
    })
  }

  render() {
    const { classes, className, cameras } = this.props;
    console.log(cameras)
    const { activeTab, selectedcamera, rowsPerPage, page, sliceStart, sliceStop } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet className={rootClassName}>
        <PortletContent noPadding>
          <PerfectScrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    {/* <Checkbox
                      checked={selectedmapping.length === mappings.length}
                      color="primary"
                      indeterminate={
                        selectedmapping.length > 0 &&
                        selectedmapping.length < mappings.length
                      }
                      onChange={this.handleSelectAll}
                    /> */}
                  Classroom
                  </TableCell>
                  {/* <TableCell align="left">Classroom</TableCell> */}
                  <TableCell align="left">Camera-IP</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Link</TableCell>
                   <TableCell align="left">Actions</TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
                 {cameras
                  // .filter(camera => {
                  //   if (activeTab === 1) {
                  //     return camera.returning;
                  //   }

                  //   if (activeTab === 2) {
                  //     return camera.returning;
                  //   }

                  //   return camera;
                  // })
                  /* //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */
                  .slice(sliceStart, sliceStop)
                  .map(camera => ( 
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={camera.id}
                      // selected={selectedcamera.indexOf(cameras.id) !== -1}
                    >
                      <TableCell className={classes.tableCell}>
                       {camera.classroom}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {camera.cameraip}
                      </TableCell>
                      <TableCell>
                      <Status
                            className={classes.status}
                            color={statusColors[camera.status]}
                            size="sm"
                          />
                          &nbsp;{camera.status}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {camera.link}
                      </TableCell>
                      <TableCell>
            <IconButton
              className={classes.deleteButton}
              onClick={this.handleClickOpen}
            >
              <DeleteIcon />
            </IconButton>
          
             <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete the mapping?"}</DialogTitle>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            No
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Yes
          </Button>
            </DialogActions>
          </Dialog>
         
            <IconButton
              className={classes.editButton}
              onClick={this.handleDeletemapping}
              >
              <EditIcon />
            </IconButton>

                      </TableCell> 
                     
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            backIconButtonProps={{
              'aria-label': 'Previous Page'
            }}
            component="div"
            count={cameras.length}
            nextIconButtonProps={{
              'aria-label': 'Next Page'
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </PortletContent>
      </Portlet>
    );
  }
}

CameraTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onShowDetails: PropTypes.func,
  camera: PropTypes.array.isRequired
};

CameraTable.defaultProps = {
  camera: [],
  onSelect: () => {},
  onShowDetails: () => {}
};

export default withStyles(styles)(CameraTable);
