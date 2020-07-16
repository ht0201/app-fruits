import React, { Component } from 'react';
import {connect} from 'react-redux';

import Cart from './../../components/Cart/Cart';
import CartItem from './../../components/CartItem/CartItem';
import CartResult from './../../components/CartResult/CartResult';
import { actRemoveProduct , actUpdateProductInCart, actFetchProductsRequest } from './../../actions/index';


class CartPage extends Component {
   render() {
      var {cart} =this.props;
      console.log(cart);
      return (
         <div className="container">
            <Cart>
               {this.showCartItem(cart)}
               {this.showTotalAmount(cart)}
            </Cart>

         </div>
      );
   }

   componentDidMount(){
      this.props.onFetchProductInCart();
   }

   showCartItem = cart => {
      var {onDeleteProductInCart, onUpdateProductInCart } = this.props;          
      var result = null;   
      if(cart.length > 0) {
         result = cart.map((item, index) => {
            return <CartItem 
                     key={index}
                     item={item}
                     index={index}    
                     onDeleteProductInCart={onDeleteProductInCart}                       
                     onUpdateProductInCart={onUpdateProductInCart}     
                   />
         })
      }
      return result;
   }

   showTotalAmount = cart => {
      var result = null;
      if (cart.length > 0)
        result = <CartResult cart={cart} />
  
      return result;
    }
}

const mapStateToProps = state => {
   return {
      cart: state.cart
   }
}

const mapDispatchToProps = (dispatch, action) => {
   return {
     onDeleteProductInCart: (product) => {
       dispatch(actRemoveProduct(product));
     },
    
     onUpdateProductInCart: (product, quantity) => {
       dispatch(actUpdateProductInCart(product, quantity));
     },

     onFetchProductInCart: () => {
        dispatch(actFetchProductsRequest());
     }
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
