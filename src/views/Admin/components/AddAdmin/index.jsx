import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withStyles,
  Typography
} from '@material-ui/core';
import AdminTable from './Table';
// Component styles
import styles from './styles';

class AddAdmin extends Component {
  render() {
    const { classes, className } = this.props;
    const { id } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <center><Typography variant='h4'>Admin Details</Typography></center>
        <br />
        <AdminTable />
      </div>
    );
  }
}

AddAdmin.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddAdmin);
