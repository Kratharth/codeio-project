import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';


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
values:{
    title:'Title',
    coursecode:'Coursecode',
    faculty:'name',
    coursename:'Course name'

  },


  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { title,coursecode,coursename,faculty } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            //subtitle="The Course details can be editted"
            title="Courseedit"
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
            />
            <br/>
            <br/>
            <TextField
              className={classes.textField}
              label="coursecode"
              margin="dense"
              required
              value={coursecode}
              variant="outlined"
            />
            <br/>
            <br/>
            <TextField
              className={classes.textField}
              label="coursename"
              margin="dense"
              required
              value={coursename}
              variant="outlined"
            />


            <br/>
            <br/>
            <TextField
              className={classes.textField}
              label="faculty"
              margin="dense"
              required
              value={faculty}
              variant="outlined"
            />


      <br/><br/>




          </div>

          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
          save
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
