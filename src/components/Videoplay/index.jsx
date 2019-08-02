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

  render() {
    const { classes, className,title, description ,src, ...rest } = this.props;
  //  const { title, description ,src} = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <ReactPlayer
        url={src}

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

Videoplay.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title:PropTypes.string,
  description:PropTypes.string,
  src:PropTypes.string

};

export default withStyles(styles)(Videoplay);
