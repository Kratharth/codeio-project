import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
// Material helpers
import { withStyles } from '@material-ui/core';
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
  TablePagination,
  IconButton,
  Button
} from '@material-ui/core';
// Shared components
import { Portlet, PortletContent, Status } from 'components';

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
class ProcessorTable extends Component {
  state = {
    selectedprocessor: [],
    rowsPerPage: 5,
    page: 0,
    sliceStart: 0,
    sliceStop: 5,
    open: false
  };

  handleSelectAll = event => {
    const { processor, onSelect } = this.props;

    // let selectedUsers;
    let selectedprocessor;

    if (event.target.checked) {
      selectedprocessor = processor.map(processor => processor.id);
    } else {
      selectedprocessor = [];
    }

    this.setState({ selectedprocessor });

    onSelect(selectedprocessor);
  };

  handleSelectOne = (id) => {
    const { onSelect } = this.props;
    const { selectedprocessor } = this.state;
    const selectedIndex = selectedprocessor.indexOf(id);
    let newSelectedProcessors = [];
    if (selectedIndex === -1) {
      newSelectedProcessors = newSelectedProcessors.concat(selectedprocessor, id);
    } else if (selectedIndex === 0) {
      newSelectedProcessors = newSelectedProcessors.concat(selectedprocessor.slice(1));
    } else if (selectedIndex === selectedprocessor.length - 1) {
      newSelectedProcessors = newSelectedProcessors.concat(selectedprocessor.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProcessors = newSelectedProcessors.concat(
        selectedprocessor.slice(0, selectedIndex),
        selectedprocessor.slice(selectedIndex + 1)
      );
    }

    this.setState({ selectedprocessor: newSelectedProcessors });

    onSelect(newSelectedProcessors);
  };

  handleChangePage = (event, page) => {
    console.log(event);
    console.log(page);
    const { rowsPerPage } = this.state;
    var stop = (page * rowsPerPage + rowsPerPage) < (this.props.processors.length) ?
      (page * rowsPerPage + rowsPerPage) : (this.props.processors.length);
    this.setState({
      page,
      sliceStart: page * rowsPerPage,
      sliceStop: stop
    });
  };

  handleChangeRowsPerPage = event => {
    // console.log('sliceStart and stop: ' + this.state.sliceStart + '  ' + this.state.sliceStop);
    const { sliceStart } = this.state;
    var newRowsPerPage = event.target.value;
    var newStart = Math.floor(sliceStart / newRowsPerPage) * newRowsPerPage;
    var stop = (newStart + event.target.value) < (this.props.processors.length) ?
      (newStart + event.target.value) : (this.props.processors.length);
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
    const { classes, className, processors } = this.props;
    const { rowsPerPage, page, sliceStart, sliceStop } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet className={rootClassName}>
        <PortletContent noPadding>
          <PerfectScrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell align="left"> */}
                  {/* <Checkbox
                      checked={selectedmapping.length === mappings.length}
                      color="primary"
                      indeterminate={
                        selectedmapping.length > 0 &&
                        selectedmapping.length < mappings.length
                      }
                      onChange={this.handleSelectAll}
                    /> */}
                  {/* Classroom
                  </TableCell> */}
                  <TableCell align="left">Server-IP</TableCell>
                  <TableCell align="left">Server Name</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {processors
                  // .filter(processor => {
                  //   if (activeTab === 1) {
                  //     return processor.returning;
                  //   }

                  //   if (activeTab === 2) {
                  //     return processor.returning;
                  //   }

                  //   return processor;
                  // })
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .slice(sliceStart, sliceStop)
                  .map(processor => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={processor.id}
                    // selected={selectedprocessor.indexOf(processor.id) !== -1}
                    >
                      <TableCell className={classes.tableCell}>
                        {processor.serverip}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {processor.servername}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {processor.type}
                      </TableCell>
                      {/* <TableCell className={classes.tableCell}>
                        {mapping.serverip}
                      </TableCell> */}
                      <TableCell>
                        <Status
                          className={classes.status}
                          color={statusColors[processor.status]}
                          size="sm"
                        />
                        &nbsp;{processor.status}
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
            count={processors.length}
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

ProcessorTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onShowDetails: PropTypes.func,
  processor: PropTypes.array.isRequired
};

ProcessorTable.defaultProps = {
  processor: [],
  onSelect: () => { },
  onShowDetails: () => { }
};

export default withStyles(styles)(ProcessorTable);
