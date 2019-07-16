import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Divider } from '@material-ui/core';

// Component styles
import styles from './styles';
import MaterialTableDemo from './Table';

class AddDepartment extends Component {
  state = {
    name: '',
    code: '',
    email: '',
    viewTable: false,
  };
  
  clicked = e => {
    this.setState({
      viewTable: !this.state.viewTable,
    });
  }


  renderTable() {
    if(this.state.viewTable) return (
      <div>
        <h4>DATABASE</h4>
        <Divider />
        <MaterialTableDemo />
      </div>
    );
  }

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
    const { classes, className, ...rest } = this.props;
    const { name, code, email} = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
          <div>

            <Button
            color="primary"
            variant="contained"
            className = {classes.button}
            onClick = {this.clicked}
          >
            View Records
          </Button>
          {this.renderTable()}
          </div>
    );
  }
}

AddDepartment.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddDepartment);
