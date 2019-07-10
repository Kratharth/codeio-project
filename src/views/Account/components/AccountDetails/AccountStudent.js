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

// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama'
//   },
//   {
//     value: 'new-york',
//     label: 'New York'
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco'
//   }
// ];

class AccountStudent extends Component {
  state = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'contact@devias.io',
    phone: '9937486232',
    semester:'4',
    usn:'1BM17CS098',
    branch:'CSE'
    //state: 'Alabama',
   // country: 'USA'
  };

  // handleChange = e => {
  //   this.setState({
  //     state: e.target.value
  //   });
  // };

  render() {
    const { classes, className, ...rest } = this.props;
    const { firstName, lastName, phone,semester,usn,branch, state, country, email } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
    <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            // subtitle="The information can be edited"
            title="DETAILS"
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
                // helperText="Please specify the first name"
                label="First name"
                margin="dense"
                //required
                value={firstName}
                variant="outlined"
              /></div>
              <div className={classes.field}><TextField
                className={classes.textField}
                label="Last name"
                margin="dense"
                //required
                value={lastName}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Email Address"
                margin="dense"
                //required
                value={email}
                variant="outlined"
              /></div>
             <div className={classes.field}> <TextField
                className={classes.textField}
                label="Phone Number"
                margin="dense"
                //type="number"
                value={phone}
                variant="outlined"
              />
              
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Semester"
                margin="dense"
                //required
                value={semester}
                variant="outlined"
              />
              </div>
              <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="USN"
                margin="dense"
                //required
                value={usn}
                variant="outlined"
              />
              </div>
              <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Branch"
                margin="dense"
                //required
                value={branch}
                variant="outlined"
              />
              </div>
            {/* <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Select State"
                margin="dense"
                onChange={this.handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={state}
                variant="outlined">
                {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                className={classes.textField}
                label="Country"
                margin="dense"
                required
                value={country}
                variant="outlined"
              />
            </div> */}
          </form>
        </PortletContent>
        {/* <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </PortletFooter> */}
      </Portlet>
    );
  }
}

AccountStudent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountStudent);