import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button } from '@material-ui/core';

// Shared components
import { DisplayMode, SearchInput } from 'components';

// Component styles
import styles from './styles';
//for the drop down
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class ProductsToolbar extends Component {
  state = {
    course: 'none'
  };

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  }
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          {/* <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            Add
          </Button> */}
        </div>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search video"
          />
          <Select
            native
            className={classes.selectInput}
            value={this.state.course}
            onChange={this.handleChange('course')}
            inputProps={{
              name: 'course',
              id: 'course-native-simple',
            }}
          >
            <option value="none" disabled >Course</option>
            <option value={10}>LA</option>
            <option value={20}>OS</option>
            <option value={30}>DBMS</option>
            <option value={40}>COA</option>
            <option value={50}>WP</option>
            <option value={60}>PYTHON</option>
            <option value={70}>DC</option>
          </Select>
          <span className={classes.spacer} />
          <DisplayMode mode="grid" />
        </div>
      </div>
    );
  }
}

ProductsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductsToolbar);
