import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ReactPlayer from 'react-player'

// Externals
//import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Component styles
import styles from './styles';


class Videoplay extends Component {
  state = {
    values: {
      title: '',
      description: '',
      edit: ''
    },

  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    //const { title, description, edit } = this.state;

    // const rootClassName = classNames(classes.root, className);

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <ReactPlayer

            url="https://codeiovideossource.s3.ap-south-1.amazonaws.com/videos/Test.mp4"
            poster="/myPoster.png"
            width="100%"
            height="100%"
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
