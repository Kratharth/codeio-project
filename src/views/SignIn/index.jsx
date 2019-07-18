import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import {
  Grid,
  Avatar,
  Button,
  CircularProgress,
  TextField,
  Typography,
  MenuItem,
  FormHelperText,
  Select,
  Input
} from '@material-ui/core';
// Component styles
import styles from './styles';
// Form validation schema
import schema from './schema';
// user-context
import { UserContext } from 'userContext';

// Service methods
const signIn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignIn extends Component {

  static contextType = UserContext;

  state = {
    values: {
      email: '',
      password: '',
      type: 'student'
    },
    touched: {
      email: false,
      password: false,
      type: false
    },
    errors: {
      email: null,
      password: null,
      type: null
    },
    isValid: false,
    isLoading: false,
    submitError: null
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;
    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors || values.type == '' ? false : true;

    this.setState(newState);
  }, 800);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignIn = async () => {
    try {
      const { history } = this.props;
      const { values } = this.state;

      this.setState({ isLoading: true });

      await signIn(values.email, values.password);

      localStorage.setItem('isAuthenticated', true);
      history.push('/dashboard');
    } catch (error) {
      this.setState({
        isLoading: false,
        serviceError: error
      });
    }
  };

  componentWillUnmount() {
    this.context.userDetails(this.state.values);
  }

  render() {
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading
    } = this.state;

    const showEmailError = touched.email && errors.email;
    const showPasswordError = touched.password && errors.password;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteWrapper}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  Welcome To BMSCE Lecture Portal
                  </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    An online platform for all BMSCE lectures
                    </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                    Made by the students for the students
                    </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Avatar
                    alt="BMS logo"
                    className={classes.avatar}
                    src="/images/bmslogo.png"
                  />
                  <Typography
                    className={classes.title}
                    variant="h2"
                    align="center"
                  >
                    Sign in
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      type="text"
                      value={values.email}
                      variant="outlined"
                    />
                    {showEmailError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      name="password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.password[0]}
                      </Typography>
                    )}

                    <Select
                      className={classes.textField}
                      value={values.type}
                      onChange={event => this.handleFieldChange('type', event.target.value)}
                      input={<Input name="type" id="user-type" />}
                    >
                      <MenuItem value='admin'>Admin</MenuItem>
                      <MenuItem value='department'>Department</MenuItem>
                      <MenuItem value='lecturer'>Lecturer</MenuItem>
                      <MenuItem value='student'>Student</MenuItem>
                    </Select>
                    <FormHelperText>Select user type</FormHelperText>
                  </div>
                  {submitError && (
                    <Typography
                      className={classes.submitError}
                      variant="body2"
                    >
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                      <Button
                        className={classes.signInButton}
                        color="primary"
                        disabled={!isValid}
                        onClick={this.handleSignIn}
                        size="large"
                        variant="contained"
                      >
                        Sign in now
                    </Button>
                    )}
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
