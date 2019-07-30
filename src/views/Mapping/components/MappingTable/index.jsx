import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
// Material helpers
import { withStyles } from '@material-ui/core';
// import passing from '../passing values'
// Material components
import {
  Dialog,
  DialogActions,
  DialogTitle,
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

// Shared components
import { Portlet, PortletContent } from 'components';

// Component styles
import styles from './styles';
import {
  Delete as DeleteIcon,
  Edit as EditIcon
}
  from '@material-ui/icons';

class MappingTable extends Component {
  state = {
    selectedmapping: [],
    rowsPerPage: 5,
    page: 0,
    sliceStart: 0,
    sliceStop: 5,
    open: false
  };

  handleSelectAll = event => {
    const { mapping, onSelect, selectedmappings } = this.props;

    // let selectedUsers;
    let selectedmapping;

    if (event.target.checked) {
      selectedmapping = mapping.map(mapping => mapping.id);
    } else {
      selectedmapping = [];
    }

    this.setState({ selectedmapping });

    onSelect(selectedmapping);
  };

  handleSelectOne = (event, id) => {
    const { onSelect } = this.props;
    const { selectedmapping } = this.state;
    const selectedIndex = selectedmapping.indexOf(id);
    let newSelectedMappings = [];
    if (selectedIndex === -1) {
      newSelectedMappings = newSelectedMappings.concat(selectedmapping, id);
    } else if (selectedIndex === 0) {
      newSelectedMappings = newSelectedMappings.concat(selectedmapping.slice(1));
    } else if (selectedIndex === selectedmapping.length - 1) {
      newSelectedMappings = newSelectedMappings.concat(selectedmapping.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedMappings = newSelectedMappings.concat(
        selectedmapping.slice(0, selectedIndex),
        selectedmapping.slice(selectedIndex + 1)
      );
    }

    this.setState({ selectedmapping: newSelectedMappings });

    onSelect(newSelectedMappings);
  };

  handleChangePage = (event, page) => {
    console.log(event);
    console.log(page);
    const { rowsPerPage, sliceStart } = this.state;
    var stop = (page * rowsPerPage + rowsPerPage) < (this.props.mappings.length) ?
      (page * rowsPerPage + rowsPerPage) : (this.props.mappings.length);
    this.setState({
      page,
      sliceStart: page * rowsPerPage,
      sliceStop: stop
    });
  };

  handleChangeRowsPerPage = event => {
    // console.log('sliceStart and stop: ' + this.state.sliceStart + '  ' + this.state.sliceStop);
    const { rowsPerPage, sliceStart, sliceStop } = this.state;
    var newRowsPerPage = event.target.value;
    var newStart = Math.floor(sliceStart / newRowsPerPage) * newRowsPerPage;
    var stop = (newStart + event.target.value) < (this.props.mappings.length) ?
      (newStart + event.target.value) : (this.props.mappings.length);
    this.setState({
      rowsPerPage: event.target.value,
      sliceStart: newStart,
      sliceStop: stop,
      page: newStart / event.target.value
    });
    // console.log('sliceStart and stop: ' + newStart + '  ' + stop);
  };
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

  render() {
    const { classes, className, mappings } = this.props;
    const { activeTab, selectedmapping, rowsPerPage, page, sliceStart, sliceStop } = this.state;

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
                  <TableCell align="left">Camera-IP</TableCell>
                  <TableCell align="left">Server Name</TableCell>
                  <TableCell align="left">Server IP</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mappings
                  // .filter(mapping => {
                  //   if (activeTab === 1) {
                  //     return mapping.returning;
                  //   }

                  //   if (activeTab === 2) {
                  //     return mapping.returning;
                  //   }

                  //   return mapping;
                  // })
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .slice(sliceStart, sliceStop)
                  .map(mapping => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={mapping.id}
                      selected={selectedmapping.indexOf(mapping.id) !== -1}
                    >
                      <TableCell className={classes.tableCell}>
                        <div className={classes.tableCellInner}>
                          {/* <Checkbox
                            checked={selectedmapping.indexOf(mapping.id) !== -1}
                            color="primary"
                            onChange={event =>
                              this.handleSelectOne(event, mapping.id)
                            }
                            value="true"
                          /> */}
                          {/* <Avatar
                            className={classes.avatar}
                            src={user.avatarUrl}
                          >
                            {getInitials(user.name)}
                          </Avatar> */}
                          {/* <Link to="#"> */}
                          <Typography
                            className={classes.nameText}
                            variant="body1"
                          >
                            {mapping.classroom}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {mapping.cameraip}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {mapping.servername}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {mapping.serverip}
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
            count={mappings.length}
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

MappingTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onShowDetails: PropTypes.func,
  mapping: PropTypes.array.isRequired
};

MappingTable.defaultProps = {
  mapping: [],
  onSelect: () => { },
  onShowDetails: () => { }
};

export default withStyles(styles)(MappingTable);
