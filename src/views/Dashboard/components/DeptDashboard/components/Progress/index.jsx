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

class Progress extends Component {
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
              variant="body2"
            >
              Number of Student
            </Typography>
            <Typography
              className={classes.value}
              variant="h3"
            >
              200

            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <PersonIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.footer}>
          {/* <LinearProgress
            value={75.5}
            variant="determinate"
          /> */}
        </div>
      </Paper>
    );
  }
}

Progress.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Progress);
