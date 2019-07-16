import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Axios from 'axios';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';


class Courseedit extends Component {
  state = {
    values: {
      title: 'Title',
      coursecode: 'Coursecode',
      faculty: '',
      coursename: 'Course name'
    },
  };


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

  postfun(title, coursecode, coursename, faculty) {

    Axios.post('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/camera/mapping', { title, coursecode, coursename, faculty })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }






  render() {
    const { classes, className, ...rest } = this.props;
    const { title, coursecode, coursename, faculty } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            //subtitle="The Course details can be editted"
            title="Course edit"
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
                //helperText="Please enter the title"
                label="Title"
                margin="dense"
                required
                value={title}
                variant="outlined"
                onChange={this.handleChangeTitle}
              />
              <br />
              <br />
              <TextField
                className={classes.textField}
                label="course code"
                margin="dense"
                required
                value={coursecode}
                variant="outlined"
                onChange={this.handleChangeCoursecode}
              />
              <br />
              <br />
              <TextField
                className={classes.textField}
                label="course name"
                margin="dense"
                required
                value={coursename}
                variant="outlined"
                onChange={this.handleChangeCoursename}
              />


              <br />
              <br />
              <TextField
                className={classes.textField}
                label="faculty"
                margin="dense"
                required
                value={faculty}
                variant="outlined"
                onChange={this.handleChangefaculty}
              />


              <br /><br />




            </div>

          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.postfun(title, coursecode, coursename, faculty)}
          >
            Add/Update
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Courseedit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Courseedit);
