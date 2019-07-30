import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { CircularProgress, Typography } from '@material-ui/core';
// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
//Alert
import { AlertDialog } from 'components';
//Service method
import { getMappings } from 'services/mapping';
// Custom components
import { MappingToolbar, MappingTable } from './components';
// Component styles
import styles from './style';

class MappingList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 100,
    mapping: [],
    selectedmapping: [],
    error: null
  };

  async getMappings() {
    try {
      this.setState({ isLoading: true });

      const { limit } = this.state;

      const { mapping } = await (getMappings(limit));

      if (this.signal) {
        this.setState({
          isLoading: false,
          mapping
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
    this.getMappings();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSelect = selectedmapping => {
    this.setState({ selectedmapping });
  };

  renderMappings() {
    const { classes } = this.props;
    const { isLoading, mapping, error } = this.state;

    if (mapping === null) {
      this.setState({ isLoading: false });
      return (
        <AlertDialog message="Something unexpected has occurred :( " />
      );
    }

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

    // if (mapping.length === 0) {
    //   return <Typography variant="h6">There are no mapping</Typography>;
    // }

    return (
      <MappingTable
        //
        onSelect={this.handleSelect}
        mappings={mapping}
        selectedmappings={this.state.selectedmapping}
      />
    );
  }

  render() {
    const { classes } = this.props;
    const { selectedmapping } = this.state;

    return (
      <DashboardLayout title="Mapping">
        <div className={classes.root}>
          <MappingToolbar selectedmapping={selectedmapping} mapping={this.state.mapping} />
          <div className={classes.content}>{this.renderMappings()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

MappingList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MappingList);
