import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList/ProductList';
import { actAddToCart,  actFetchProductsRequest, actChangeMessage } from '../../actions';
import ProductItem from '../../components/ProductItem/ProductItem';
import MessageContainer from '../MessageContainer';


class ProductListPage extends Component {

   render() {
      var { products} = this.props;
      
      return (
        <div className="container">
           <div className="container">
              <MessageContainer />
           </div>
           
            <ProductList>
               {this.showProducts(products)}             
            </ProductList>
           
           
         </div>     
      );
   }

   componentDidMount() {
      this.props.onFetchProduct();
   }

   showProducts(products) {
      var { onAddToCart, onChangeMessage } = this.props;
      var result = null;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return <ProductItem
               key={index}
               product={product}
               onAddToCart={onAddToCart}
               onChangeMessage={onChangeMessage}
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
      },
      onChangeMessage: (message) => {
        dispatch(actChangeMessage(message));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
