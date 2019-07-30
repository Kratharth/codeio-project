import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Button, TextField, MenuItem } from '@material-ui/core';
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


class VideoEdit extends Component {
  state = {
    values: {
      title: '',
      description: '',
      edit: '',
      sem: '',
      faculty: '',
      classroom: '',
      course: ''

    },


  };


  handleChangeName = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleChangeDepartment = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      edit: e.target.value
    });
  };
  handleChangeSem = e => {
    this.setState({
      sem: e.target.value
    });
  };
  handleChangeCourse = e => {
    this.setState({
      course: e.target.value
    });
  };

  handleChangeSem = e => {
    this.setState({
      classroom: e.target.value
    });
  };
  handleChangeFaculty = e => {
    this.setState({
      faculty: e.target.value
    });
  };




  render() {
    const { classes, className, ...rest } = this.props;
    const { title, description, edit, sem, classroom, faculty, course } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            //subtitle="The Video details can be editted"
            title="Record"
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
                onChange={this.handleChangetitle}
                variant="outlined"
                required
              />
              <br />
              <br />
              <TextField
                className={classes.textField}
                //helperText="Please enter the description"
                label="description"
                margin="dense"
                required
                value={description}
                variant="outlined"
                onChange={this.handleChangedescription}
                variant="outlined"
                required
              />

              <br /><br />

              <TextField

                select
                label="Sem"
                className={classes.textField}
                value={sem}
                onChange={this.handleChangeSem}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select the sem"
                margin="dense"
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
              </TextField>

              <br /><br />



              <TextField

                select
                label="course"
                className={classes.textField}
                value={course}
                onChange={this.handleChangecourse}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select the course"
                margin="dense"
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"DC"}>DC</MenuItem>
                <MenuItem value={"DS"}>DS</MenuItem>
                <MenuItem value={"JAVA"}>JAVA</MenuItem>
              </TextField>

              <br /><br />


              <TextField

                select
                label="faculty"
                className={classes.textField}
                value={faculty}
                onChange={this.handleChangefaculty}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                //helperText="Please select the faculty"
                margin="dense"
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"grp"}>grp</MenuItem>
                <MenuItem value={"grp"}>grp</MenuItem>

              </TextField>

              <br /><br />
              <TextField


                label="class room"
                className={classes.textField}
                value={classroom}
                onChange={this.handleChangeclassroom}
                required
                helperText="Enter classroom number"
                margin="dense"
                variant="outlined"
              >

              </TextField>

              <br /><br />







              <div>

                <Button variant="contained" size="medium" color="green" className={classes.margin}>
                  Start
        </Button>
                <Button variant="contained" size="medium" color="" className={classes.margin}>
                  Pause/Resume
        </Button>
                <Button variant="contained" size="medium" color="" className={classes.margin}>
                  Stop
        </Button>


              </div>




            </div>

          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

VideoEdit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoEdit);
