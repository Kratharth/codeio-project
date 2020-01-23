import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Button, TextField, Select, Input, MenuItem } from '@material-ui/core';
//search icon
import SearchIcon from '@material-ui/icons/Search';
// Shared components
import { DisplayMode } from 'components';

// Component styles
import styles from './styles';

class ProductsToolbar extends Component {
  state = {
    sem: 'none',
    department: 'none',
    searchText: 'none'
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchData(this.state);
  };

  render() {
    const { classes, className } = this.props;
    const { sem, department } = this.state
    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
        </div>
        <div className={classes.row}>
          <form onSubmit={this.handleSubmit}>
            <Select className={classes.selectInput}
              value={sem}
              onChange={(event) => this.handleFieldChange('sem', event.target.value)}
              input={<Input name="sem" id="sem" />}
            >
              <MenuItem value='none' disabled>Sem</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
            <Select className={classes.selectInput}
              value={department}
              onChange={(event) => this.handleFieldChange('department', event.target.value)}
              input={<Input name="department" id="department" />}
            >
              <MenuItem value="none" disabled>Dept</MenuItem>
              <MenuItem value="CSE">Computer Science and Engineering</MenuItem>
              <MenuItem value="ISE">ISE</MenuItem>
            </Select>
            <TextField className={classes.searchInput} placeholder="Search Video"
              onChange={(event) => this.handleFieldChange('searchText', event.target.value)}
            />
            <Button className={classes.button} type="submit"><SearchIcon /></Button>
          </form>
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
