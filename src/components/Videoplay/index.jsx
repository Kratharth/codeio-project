import React, { Component } from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ReactPlayer from 'react-player'

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';


class Videoplay extends Component {
  state = {
   values:{
    title:'',
    description:'',
    edit:''
  },

  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { title,description,edit } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Card className={classes.card}>
          <CardActionArea>
          <ReactPlayer

          url="https://codeiovideossource.s3.ap-south-1.amazonaws.com/videos/Test.mp4"
          poster="/myPoster.png"
          width="auto"
          height="auto"
          autoplay
          controls
          />


         </CardActionArea>
          <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Title
          </Typography>
          <Typography component="p">

  Description about video.
          </Typography>
        </Paper>
      </div>

        </Card>

    );
  }
}

Videoplay.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videoplay);
