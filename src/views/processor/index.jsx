import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { CircularProgress, Typography } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Shared services
// import { getUsers } from 'services/user';
import {getProcessors} from 'services/processor';

// Custom components
import { ProcessorToolbar, ProcessorTable } from './components';

// Component styles
import styles from './style';

class ProcessorList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 100,
    processor: [],
    selectedprocessor: [],
    error: null
  };

  async getProcessors() {
    try {
      this.setState({ isLoading: true });

      const { limit } = this.state;

      // const { users } = await getUsers(limit);
      const {processor, processorTotal} = await(getProcessors(limit))

      if (this.signal) {
        this.setState({
          isLoading: false,
          processor
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getProcessors();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSelect = selectedprocessor => {
    this.setState({ selectedprocessor });
  };

  renderProcessors() {
    const { classes } = this.props;
    const { isLoading, processor, error } = this.state;

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <Typography variant="h6">{error}</Typography>;
    }

    if (processor.length === 0) {
      return <Typography variant="h6">There are no Processors</Typography>;
    }

    return (
      <ProcessorTable
        //
        onSelect={this.handleSelect}
        processors={processor}
        selectedprocessors={this.state.selectedprocessor}
      />
    );
  }

  render() {
    const { classes,type } = this.props;
    const { selectedprocessor } = this.state;

    return (
      <DashboardLayout title="Processor" type={type}>
        <div className={classes.root}>
          <ProcessorToolbar selectedprocessor={selectedprocessor} processor={this.state.processor}/>
          <div className={classes.content}>{this.renderProcessors()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

ProcessorList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProcessorList);
