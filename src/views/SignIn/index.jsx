import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';
// Material helpers
import { withStyles } from '@material-ui/core';
import { signIn } from 'services/signIn';
// Material components
import {
  Grid,
  Avatar,
  Button,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';
// Alert Dialog
import { AlertDialog } from 'components';
// Component styles
import styles from './styles';
// Form validation schema
import schema from './schema';
// user-context
import { UserContext } from 'userContext';

class SignIn extends Component {

  static contextType = UserContext;

  state = {
    values: {
      email: '',
      password: ''
    },
    touched: {
      email: false,
      password: false
    },
    errors: {
      email: null,
      password: null
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
    newState.isValid = errors ? false : true;

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
    const { history } = this.props;
    const { values } = this.state;

    this.setState({ isLoading: true });

    signIn({ email: values.email, password: values.password }).then(res => {
      if (res.success) {
        for (let i in res.res) {
          localStorage.setItem(i, res.res[i]);
        }
        history.push('/dashboard');
      }
      else {
        this.setState({ isLoading: false, submitError: res.errorMessage });
      }
    }).catch(error => {
      this.setState({
        isLoading: false,
        submitError: error
      });
    });
  }

  componentWillUnmount() {
    this.context.userDetails({ ...localStorage });
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
            lg={6}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  <strong>Welcome To BMSCE Lecture Portal</strong>
                </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="h5"
                  >
                    <strong> An online platform for all BMSCE lectures</strong>
                  </Typography>
                  <Typography
                    className={classes.bio}
                    variant="h5"
                  >
                    <strong >Made by the students for the students</strong>
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={6}
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
                  </div>
                  {submitError && (
                    <AlertDialog message="Something unexcpected has occurred :(" />
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
