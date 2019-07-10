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


class Videoedit extends Component {
  state = {
values:{
    title:'Title',
    description:'description',
    edit:'Edit'
  },


  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { title,description,edit } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            //subtitle="The Video details can be editted"
            title="Video edit"
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
              label="description"
              margin="dense"
              required
              value={description}
              variant="outlined"
            />


      <br/><br/>
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

Videoedit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videoedit);
