import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { postCameras } from 'services/camera';
import { csvupload } from 'services/csv';
// Material helpers
import { withStyles, TextField } from '@material-ui/core';
// import csvtoJSON from 'convert-csv-to-json';
import csv from 'convert-csv-to-json';
// Material components
import { Button, IconButton } from '@material-ui/core';
import fs from 'fs';
// Material icons
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';


// Shared components
import {
  DisplayMode, SearchInput, PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter,
  Portlet
} from 'components';

// Component styles
import styles from './styles';

class CameraToolbar extends Component {
  state = {
    open: false,
    addClicked: false,
    classroom: '',
    cameraip: '',
    status: ''
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  // fileToBase64 = (filename) => {
  //   return new Promise(resolve => {
  //     var file = new File([filename]);
  //     var reader = new FileReader();
  //     // Read file content on file loaded event
  //     reader.onload = function(event) {
  //       resolve(event.target.result);
  //     };

  //     // Convert data to base64 
  //     reader.readAsDataURL(file);
  //   });
  // };
  // handleFile(e) {
  //   console.log(e.target.files[0], '$$$$');
  //   fileToBase64(e.target.files[0]).then(result => {
  //     console.log(result);
  //   });
  // }

  handleChange(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        const data = {
          base64String
        }
        console.log(base64String);
        //showing file converted to base64
        csvupload(data).then(res => {
          if (res.data === 'success')
            alert('Inserted Data Successfully');
        })
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }
  showForm() {
    if (this.state.addClicked == true) {
      const { classes, className, ...rest } = this.props;
      // const rootClassName = classNames(classes.root, className);
      if (this.state.addClicked == true) {
        return (
          <Portlet
            {...rest}
          // className={rootClassName}
          >
            <PortletHeader>
              <PortletLabel
                subtitle="The information can be edited"
                title="Add A Camera"
              />
            </PortletHeader>
            <PortletContent noPadding>
              <form
                autoComplete="off"
                noValidate
              >
                <div className={classes.field}>
                  <TextField
                    className={classes.textField}
                    // helperText="Please specify the Classroom"
                    label="Classroom"
                    id="classroom"
                    margin="dense"
                    required
                    variant="outlined"
                    onChange={e => this.setState({ classroom: e.target.value })}
                  />
                  <TextField
                    className={classes.textField}
                    label="Camera IP"
                    id="cameraip"
                    margin="dense"
                    required
                    variant="outlined"
                    onChange={e => this.setState({ cameraip: e.target.value })}
                  />
                </div>
                {/* <div className={classes.field}>
            <TextField
              className={classes.textField}
              label="Email Address"
              margin="dense"
              required
              value={email}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              label="Phone Number"
              margin="dense"
              type="number"
              value={phone}
              variant="outlined"
            />
          </div> */}
                <div className={classes.field}>
                  <TextField
                    className={classes.textField}
                    label="Select Status"
                    id="status"
                    margin="dense"
                    onChange={e => this.setState({ status: e.target.value })}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={this.state.status}
                    variant="outlined">
                    <option value=''></option>
                    <option value="offline">offline</option>
                    <option value="online">online</option>
                  </TextField>
                  {/* <TextField
              className={classes.textField}
              label="Server Name"
              margin="dense"
              required
              variant="outlined"
            /> 
            <TextField
              className={classes.textField}
              label="Server IP"
              margin="dense"
              required
              variant="outlined"
            />  */}
                </div>
              </form>
            </PortletContent>
            <PortletFooter className={classes.portletFooter}>
              <Button
                color="primary"
                variant="contained"
                onClick={this.verify.bind(this)}
              >
                Save details
        </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Bulk Upload : </label>&nbsp;
              <input type="file" id="files" name="files" onChange={this.handleChange} width='1000px' />
              <br />
              {/* <textarea id="base64" rows="5"></textarea> */}
              <br /><br />
              <Link to="/cameradownload.ods" target="_blank" download>Download</Link>
            </PortletFooter>
          </Portlet>
        );
      }
    }
  }
  verify(ev) {
    ev.preventDefault()
    if (document.getElementById("classroom").value == '')
      alert('Classroom field is empty');
    else if (document.getElementById("cameraip").value == '')
      alert('Camera IP field is empty');
    else if (document.getElementById("status").value == '')
      alert('Status field is empty');
    else
      this.submit();
  }
  submit() {
    let classroom = this.state.classroom;
    let cameraip = this.state.cameraip;
    let status = this.state.status;
    let link = 'https://www.google.com';
    console.log(classroom)
    console.log(cameraip)
    console.log(status)
    console.log(link)

    let data = {
      classroom,
      cameraip,
      status,
      link
    }
    postCameras(data)
      .then(res => {
        console.log(res)
        if (res.camera === 'Success') {
          alert("Inserted Data");
          window.location.reload();
        }
      })
      .catch(err => {
        alert(err);
      })
  }
  addClicked = () => {
    this.setState({
      addClicked: !this.state.addClicked
    })
  }
  showButton() {
    if (this.state.addClicked)
      return <Button
        color="primary"
        size="small"
        variant="outlined"
        onClick={this.addClicked}
      >
        Cancel
    </Button>
    else {
      return (
        <Button
          color="primary"
          size="small"
          variant="outlined"
          onClick={this.addClicked}
        >
          Add
      </Button>
      );
    }
  }
  render() {
    const { classes, className, selectedcamera, camera } = this.props;
    const rootClassName = classNames(classes.root, className);
    // console.log(mapping)
    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          {/* {selectedmapping.length > 0 && (
            <IconButton
              className={classes.deleteButton}
              onClick={this.handleClickOpen}
            >
              <DeleteIcon />
            </IconButton>
          )}
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
           {selectedmapping.length > 0 && selectedmapping.length < 2 && (
            <IconButton
              className={classes.editButton}
              onClick={this.handleDeletemapping}
              >
              <EditIcon />
            </IconButton>
          )}
          &nbsp;  &nbsp;  &nbsp; */}
          {/* <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={this.addClicked}
            >
            {this.buttonText()}
          </Button> */}
          {this.showButton()}
        </div>
        <div>
          {this.showForm()}
        </div>
        <br /><br /><br />
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search Cameras"
          />
          {/* <span className={classes.spacer} />
          <DisplayMode mode="list" /> */}
        </div>
      </div>
    );
  }
}

CameraToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedcamera: PropTypes.array
};

CameraToolbar.defaultProps = {
  selectedcamera: []
};

export default withStyles(styles)(CameraToolbar);
