import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField, Typography } from '@material-ui/core';
import MaterialTableDemo from './Table';
// Component styles
import styles from './styles';

class CourseEdit extends Component {
  state = {
    coursecode: '',
    title: '',
    faculty: '',
    coursename: '',
    displayTable: false,
    displaySearchResults: false
  };

  renderTable() {
    if (this.state.displayTable) {
      return (
        <div>
          <center>Course Record</center>
          <br />
          <Divider />
          <MaterialTableDemo />
        </div>
      );
    }
  };

  renderSearchResults() {
    if (this.state.displaySearchResults) {
      return (
        <div>
          <center>Search Results</center>
          <Divider />
          <MaterialTableDemo />
        </div>
      );
    }
  }

  clicked1 = (e) => {
    this.setState({
      displayTable: !this.state.displayTable,
      displaySearchResults: false,
    });
  }

  clicked2 = (e) => {
    this.setState({
      displayTable: false,
      displaySearchResults: !this.state.displaySearchResults
    });
  }
  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  handleChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleChangeCoursecode = e => {
    this.setState({
      coursecode: e.target.value
    });
  };
  handleChangeCoursename = e => {
    this.setState({
      coursename: e.target.value
    });
  };
  handleChangefaculty = e => {
    this.setState({
      faculty: e.target.value
    });
  };


  render() {
    const { classes, className } = this.props;
    const { coursecode, coursename } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <div
        className={rootClassName}
      >
        <form
          autoComplete="off"
          noValidate
        >

          <TextField
            id="outlined-usn"
            label="Course Name"
            type="text"
            value={coursename}
            onChange={this.handleChangeCoursename}
            className={classes.textField}
            margin="normal"

          />

          <TextField
            id="outlined-usn"
            label="Course Code"
            type="text"
            value={coursecode}
            onChange={this.handleChangeCoursecode}
            className={classes.textField}
            margin="normal"

          />
          <div>
            <Divider variant='fullWidth' />
            <Button
              onClick={this.clicked2}
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Search
            </Button>
            <Typography variant="h4" component="h5" className={classes.or}>OR</Typography>
            <Button
              onClick={this.clicked1}
              color="primary"
              variant="contained"
              className={classes.button}
            >
              View All
            </Button>
          </div>
        </form>
        {this.renderTable()}
        {this.renderSearchResults()}
      </div>
    );
  }
}

CourseEdit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseEdit);
