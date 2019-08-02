import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import CourseTable from './Table';

// Component styles
import styles from './styles';

class CourseEdit extends Component {
  render() {
    const { classes, className, ...rest } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName} >
          <CourseTable />
      </div>
    );
  }
}

CourseEdit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseEdit);
