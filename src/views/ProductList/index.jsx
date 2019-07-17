import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  IconButton,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';

// Material icons
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Shared services
import { getCourseVideos } from 'services/coursevideo';
import { getProducts } from 'services/product';

// Custom components
import {ProductCard} from 'components';
import { ProductsToolbar } from './components';


// Component styles
import styles from './styles';
//import Videoedit from 'views/Videoedit';

class ProductList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 6,
    products: [],
    productsTotal: 0,
    error: null,
    searchData:{},
    products:[]
  };

  async getProducts() {
    try {
      this.setState({ isLoading: true });
      console.log(this.state.searchData);
      // const { coursevideo } = await getCourseVideos(this.state.searchData);
      const { products } = await getProducts();

      if (this.signal) {
        this.setState({
          isLoading: false,
          products
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

  handleSearch=(searchData)=>{
   this.setState({
    searchData: searchData
    })

  }

  componentWillMount() {
    this.signal = true;

    const { limit } = this.state;

    this.getProducts(); // api call for sem and dept here
  }

  componentWillUnmount() {
    this.signal = false;
  }

  renderProducts() {
    const { classes } = this.props;
    const { isLoading, products } = this.state;

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <Typography variant="h6">There are no videos available</Typography>
      );
    }



    return (
      <Grid
        container
        spacing={3}
      >
        {products.map(product => (
          <Grid
            item
            key={product.id}
            lg={4}
            md={6}
            xs={12}
          >
            <Link to={`/${this.props.type}/Videoedit`} >
              <ProductCard product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    );

  }

  render() {
    const { classes,type } = this.props;

    return (
      <DashboardLayout title="Videos" type={type}>
        <div className={classes.root}>
          <ProductsToolbar searchData={this.handleSearch}/>
          <div className={classes.content}>{this.renderProducts()}</div>
          <div className={classes.pagination}>
            <Typography variant="caption">1-6 of 20</Typography>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
      </DashboardLayout>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['admin','department','lecturer','student'])
};

export default withStyles(styles)(ProductList);
