import React, { Component } from 'react';
//import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// Component styles
import styles from './styles';
import DepartmentTable from './Table';

// Component styles
class AddDepartment extends Component {
  state = {
    name: '',
    code: '',
    email: '',
  };
  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleChangeCode = e => {
    this.setState({
      code: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    //const { classes, className, ...rest } = this.props;
    //const { name, code, email } = this.state;

    //const rootClassName = classNames(classes.root, className);

    return (
      <div>
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
