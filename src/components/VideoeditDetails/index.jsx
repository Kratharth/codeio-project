import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

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


class VideoeditDetails extends Component {
  state = {
   values:{
    title:'',
    description:'',
    edit:''
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
            title="VideoeditDetails"
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
            <TextField
              className={classes.textField}
              label="description"
              margin="dense"

              value={description}
              variant="outlined"
            />
            



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

VideoeditDetails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoeditDetails);
