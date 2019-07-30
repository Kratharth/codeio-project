import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Typography } from '@material-ui/core';
// Material icons
import {
  Person as PersonIcon
} from '@material-ui/icons';
// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

class Budget extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="h4"
            >
              Guest Lecture
            </Typography>
            <Typography
              className={classes.value}
              variant="body1"
            >
              Time:
            </Typography>
            <Typography
              className={classes.value}
              variant="body1"
            >
              Date:
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <PersonIcon className={classes.icon} />
          </div>
        </div>
      </Paper>
    );
  }
}

Budget.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Budget);
