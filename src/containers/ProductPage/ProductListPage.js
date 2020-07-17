import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList/ProductList';
import { actAddToCart,  actFetchProductsRequest } from '../../actions';
import ProductItem from '../../components/ProductItem/ProductItem';


class ProductListPage extends Component {

   render() {
      var { products } = this.props;
      return (
        
            <ProductList>
               {this.showProducts(products)}             
            </ProductList>
         
      );
   }

   componentDidMount() {
      this.props.onFetchProduct();
   }

   showProducts(products) {
      var { onAddToCart } = this.props;
      var result = null;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return <ProductItem
               key={index}
               product={product}
               onAddToCart={onAddToCart}
            />
         });
      }
      return result;
   }
}

const mapStateToProps = state => {
   return {
      products: state.products
   }
}

const mapDispatchToProps = (dispatch, action) => {
   return {
      onAddToCart: (product, quantity) => {
         dispatch(actAddToCart(product, 1));
      },
      onFetchProduct: () => {
         dispatch(actFetchProductsRequest());
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
