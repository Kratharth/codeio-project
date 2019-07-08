import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';


import {
    Portlet,
    PortletHeader,
    PortletLabel,
    PortletContent,
    PortletFooter
  } from 'components';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit * 1,
      width: '420px',
      maxWidth: '100%',
      marginRight: theme.spacing.unit * 3
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    root: {
    },
    field: {
        margin: theme.spacing.unit * 3
    },

    portletFooter: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
  }));

    class AddAdmin extends React.Component {
        state = {
            name: 'John',
            email: 'contact@devias.io',
        };
        
        handleChange = e => {
            this.setState({
                state: e.target.value
            });
        };
        
        render() {
            // const { classes, className, ...rest } = this.props;
            const { name, email } = this.state;
        
            // const rootClassName = classNames(useStyles.root, className);
            const classes = useStyles;
            return (
                <Portlet
                    className={classes.root}
                >
                    <PortletHeader>
                        <PortletLabel
                            subtitle="The information can be edited"
                            title="Profile"
                        />
                    </PortletHeader>
                    <PortletContent noPadding>
                        <form
                            autoComplete="off"
                            noValidate
                        >
                            <div className={classes.field}>
                                <TextField
                                    id="name"
                                    className={classes.textField}
                                    label="Name"
                                    margin="dense"
                                    required
                                    value={name}
                                    onChange={this.handleChange('name')}
                                />
                            </div>
                            <div className={classes.field}>
                            <TextField
                                id="email"
                                className={classes.textField}
                                label="Email Address"
                                margin="dense"
                                required
                                value={email}
                                onChange={this.handleChange('email')}
                            />
                            </div>
                        </form>
                    </PortletContent>
                    <PortletFooter className={classes.portletFooter}>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Send
                        </Button>
                    </PortletFooter>
                </Portlet>
            );
        } 
    }

    AddAdmin.propTypes = {
        className: PropTypes.string,
        classes: PropTypes.object.isRequired
      };
      
      export default withStyles(useStyles)(AddAdmin);