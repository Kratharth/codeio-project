import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {postMappings} from 'services/mapping'
import MappingList from '../../../mapping'
// Material helpers
import { withStyles , TextField } from '@material-ui/core';

// Material components
import { Button, IconButton } from '@material-ui/core';

// Material icons
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  DesktopWindows
} from '@material-ui/icons';


// Shared components
import { DisplayMode, SearchInput, PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter,
  Portlet } from 'components';

// Component styles
import styles from './styles';

class MappingToolbar extends Component {
  state = {
    open:false,
    addClicked: false,
    classroom:'',
    cameraip:'',
    servername:'',
    serverip:''
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
          title="Add A Mapping"
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
              margin="dense"
              id="classroom"
              required
              variant="outlined"
              onChange={e => this.setState({classroom: e.target.value})}
            />
            <TextField
              className={classes.textField}
              label="Camera IP"
              margin="dense"
              id="cameraip"
              required
              variant="outlined"
              onChange={e => this.setState({cameraip: e.target.value})}
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
            {/* <TextField
              className={classes.textField}
              label="Select State"
              margin="dense"
              onChange={this.handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={this.state.status}
              variant="outlined">
              <option value="offline">offline</option>
              <option value="online">online</option>
            </TextField> */}
             <TextField
              className={classes.textField}
              label="Server Name"
              margin="dense"
              id="servername"
              required
              variant="outlined"
              onChange={e => this.setState({servername: e.target.value})}
            /> 
            <TextField
              className={classes.textField}
              label="Server IP"
              margin="dense"
              id="serverip"
              required
              variant="outlined"
              onChange={e => this.setState({serverip: e.target.value})}
            /> 
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
    verify(ev)
    {
        ev.preventDefault()
        if(document.getElementById("classroom").value=='')
                alert('Classroom field is empty');
         else if(document.getElementById("cameraip").value=='')
            alert('Camera IP field is empty');
            else if(document.getElementById("servername").value=='')
            alert('Server Name IP field is empty');
            else if(document.getElementById("serverip").value=='')
            alert('Server  IP field is empty');
            else 
            this.submit();
    }
    submit(){
        let classroom= this.state.classroom;
    let servername=this.state.servername;
    let cameraip=this.state.cameraip;
    let serverip=this.state.serverip;
       let data = {
            classroom,
            servername,
            cameraip,
            serverip
        }
        postMappings(data)
        .then(res => {
          console.log(res)
              if(res.mapping==='Success')
              { 
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
    const { classes, className, selectedmapping,mapping} = this.props;
    const rootClassName = classNames(classes.root, className);
    console.log(mapping)
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
            <br/><br/><br/>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search Mappings"
          />
          <span className={classes.spacer} />
          <DisplayMode mode="list" />
        </div>
      </div>
    );
  }
}

MappingToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedmapping: PropTypes.array
};

MappingToolbar.defaultProps = {
  selectedmapping: []
};

export default withStyles(styles)(MappingToolbar);
