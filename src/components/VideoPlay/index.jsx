import React, { Component } from 'react';
import { Card,
         CardActionArea,
         Typography,
         Paper
} from '@material-ui/core';
import ReactPlayer from 'react-player';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Component styles
import styles from './styles';



class VideoPlay extends Component {

  render() {
    const { classes, className,title, description ,src, ...rest } = this.props;
  //  const { title, description ,src} = this.state;

    //const rootClassName = classNames(classes.root, className);

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <ReactPlayer
        url={src}

          poster="/myPoster.png"
          width="100%"
          height="100%"
          autoPlay
          controls
          />


        </CardActionArea>
        <div>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              {title}
          </Typography>
            <Typography component="p">

            {description}
          </Typography>
          </Paper>
        </div>

      </Card>

    );
  }
}

VideoPlay.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title:PropTypes.string,
  description:PropTypes.string,
  src:PropTypes.string

};

export default withStyles(styles)(VideoPlay);
