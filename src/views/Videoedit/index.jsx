import React, { Component } from 'react';
import classNames from 'classnames';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid,Card, Typography} from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { VideoeditDetails,Videoplay,Paper } from 'components';
import { Button} from '@material-ui/core';
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';


// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  delete: {
    color : theme.palette.danger.dark
  },

    delete: {
      color : theme.palette.danger.dark
    },
    content: {
      alignItems: 'center',
      display: 'flex'
    },
    title: {
      color: theme.palette.text.secondary,
      fontWeight: 700
    },
    value: {
      marginTop: theme.spacing.unit
    },
    iconWrapper: {
      alignItems: 'center',
      backgroundColor: theme.palette.danger.main,
      borderRadius: '50%',
      display: 'inline-flex',
      height: '4rem',
      justifyContent: 'center',
      marginLeft: 'auto',
      width: '4rem'
    },
    icon: {
      color: theme.palette.common.white,
      fontSize: '2rem',
      height: '2rem',
      width: '2rem'
    },
    footer: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'center'
    },
    difference: {
      alignItems: 'center',
      color: theme.palette.danger.dark,
      display: 'inline-flex',
      fontWeight: 700
    },
    caption: {
      marginLeft: theme.spacing(1)
    }
  });



class Videoedit extends Component {
  state = { tabIndex: 0 };
forAdmin(type,classes){

     if(type=='admin')
  {
    return(  <Button
       className={classes.delete}
        variant="contained"
      >
        Delete Video
      </Button>
);
  }

}

  render() {

    const { classes,type, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <DashboardLayout title="Videoedit">
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
          <Grid
            item
            lg={8}
            md={6}
            xl={8}
            xs={12}
          >
            <Videoplay />
         </Grid>
         <Grid
           item
           lg={4}
           md={6}
           xl={8}
           xs={12}
         >
         <Paper
           {...rest}
           className={rootClassName}
         >
           <div className={classes.content}>
             <div className={classes.details}>

               <Typography
                 className={classes.value}
                 variant="h5"
               >
                 Course Code:15CS17DC
               </Typography>
               <Typography
                 className={classes.value}
                 variant="h5"
               >

                  Faculty:grp
               </Typography>
               <Typography
                 className={classes.value}
                 variant="h5"
               >

                Date :12/3/2000
               </Typography>
               <Typography
                 className={classes.value}
                 variant="h5"
               >

               </Typography>
             </div>
</div>

         </Paper>


         </Grid>
         <Grid
           item
           lg={8}
           md={6}
           xl={8}
           xs={12}
         >
        {this.forAdmin(type,classes)}
        </Grid>

            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              <VideoeditDetails />
            </Grid>

          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Videoedit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videoedit);
