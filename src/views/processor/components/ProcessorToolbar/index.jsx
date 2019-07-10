import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

// Material helpers
import { withStyles , TextField } from '@material-ui/core';

// Material components
import { Button, IconButton } from '@material-ui/core';

// Material icons
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';


// Shared components
import { DisplayMode, SearchInput, PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter,
  Portlet } from 'components';

// Component styles
import styles from './styles';

class ProcessorToolbar extends Component {
  state = {
    open:false,
    addClicked: false
  }
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
  showForm() {
    if (this.state.addClicked == true) {
      const { classes, className,...rest} = this.props;
    // const rootClassName = classNames(classes.root, className);
    if (this.state.addClicked == true) {
      return(
      <Portlet
      {...rest}
      // className={rootClassName}
    >
      <PortletHeader>
        <PortletLabel
          subtitle="The information can be edited"
          title="Add A Processor"
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
              label="Sever-IP"
              margin="dense"
              required
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              label="Server Name"
              margin="dense"
              required
              variant="outlined"
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
              margin="dense"
              onChange={this.handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={this.state.status}
              variant="outlined">
              <option value="offline">offline</option>
              <option value="online">online</option>
            </TextField>
             <TextField
              className={classes.textField}
              label="Type"
              margin="dense"
              required
              variant="outlined"
            /> 
            {/* <TextField
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
        >
          Save details
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          color="primary"
          variant="contained"
        >
           Import an Excel File
        </Button>
      </PortletFooter>
    </Portlet>
      );
    }    
  }
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
    const { classes, className, selectedprocessor,processor} = this.props;
    const rootClassName = classNames(classes.root, className);
    console.log(processor)
    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          {/* {selectedprocessor.length > 0 && (
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
            <br/><br/><br/>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search Processors"
          />
          <span className={classes.spacer} />
          <DisplayMode mode="list" />
        </div>
      </div>
    );
  }
}

ProcessorToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedprocessor: PropTypes.array
};

ProcessorToolbar.defaultProps = {
  selectedprocessor: []
};

export default withStyles(styles)(ProcessorToolbar);
