import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// Component styles
import styles from './styles';
import DepartmentTable from './Table';

class AddDepartment extends Component {
  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <DepartmentTable />
      </div>
    );
  }
}

AddDepartment.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddDepartment);
