import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// // Shared components
// import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

// Service methods
const signIn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignIn extends Component {
  state = {
    values: {
      email: '',
      password: '',
      type:'',
      open:false
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

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;
    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors||values.type=='' ?false:true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleChange = (field, value) => {
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
      console.log(values.email);
      console.log(values.password);
      console.log(values.type);
       history.push(`/${values.type}/dashboard`);
    } catch (error) {
      this.setState({
        isLoading: false,
        serviceError: error
      });
    }
  };
  handleClose = () => {
  this.setState({
    open:false
   })
  };
  handleOpen = () => {
    this.setState({
      open:true
     })
    };
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
              {/* <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                 Welcome To BMSCE Lecture Videos.
                </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    B M Srinivasayya
                  </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                   Founder at BMS College of Engineering
                  </Typography>
                </div> */}
              {/* </div> */}
             </div>  
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}
                >
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography
                    className={classes.title}
                    variant="h2"
                    align="center"
                  >
                    Sign in
                  </Typography>
                  {/* <Typography
                    className={classes.subtitle}
                    variant="body1"s
                  >
                    Sign in with social media
                  </Typography> */}
                  {/* <Button
                    className={classes.facebookButton}
                    color="primary"
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained"
                  >
                    <FacebookIcon className={classes.facebookIcon} />
                    Login with Facebook
                  </Button>
                  <Button
                    className={classes.googleButton}
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained"
                  >
                    <GoogleIcon className={classes.googleIcon} />
                    Login with Google
                  </Button> */}
                  {/* <Typography
                    className={classes.sugestion}
                    variant="body1"
                  >
                    or login with email address
                  </Typography> */}
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
                    <form>
                     <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Select your type</InputLabel>
          <Select
            open={this.state.open}
            name="type"
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={values.type}
          onChange={event =>
            this.handleChange('type',event.target.value)
      }
          inputProps={{
            name: 'type',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          <MenuItem value="admin">Administrator</MenuItem>
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="lecturer">Professor</MenuItem>
          <MenuItem value="department">Department</MenuItem>
        </Select>
      </FormControl>
    </form>
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
                  {/* <Typography
                    className={classes.signUp}
                    variant="body1"
                  >
                    Don't have an account?{' '}
                    <Link
                      className={classes.signUpUrl}
                      to="/sign-up"
                    >
                      Sign up
                    </Link>
                  </Typography> */}
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
