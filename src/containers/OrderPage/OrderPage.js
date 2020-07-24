import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderItem from './../../components/OrderItem/OrderItem';
import OrderInfo from './../../components/OrderInfo/OrderInfo';
import OrderResult from '../../components/OrderResult/OrderResult';

class OrderPage extends Component {

   componentDidUpdate(){

   }

   render() {
      var { orders }  = this.props;
      var { cart } = orders;
      console.log("ORD ",this.props);
      return (
         <div className="container">
            <OrderInfo orders={orders}>
               {this.showOrderItem(cart)}
               {this.showTotalAmount(cart)}
            </OrderInfo>
           
         </div>
      );
   }

   showOrderItem = (cart) => {  
      var result = null;   
      if(cart.length > 0) {
         result = cart.map((item, index) => {
            return <OrderItem
                     key={index}
                     item={item}
                     index={index}
                   />
         })
      }
      return result;
   }

   showTotalAmount = cart => {
      var result = null;
      if (cart.length > 0)
        result = <OrderResult cart={cart} />
  
      return result;
    }

}

const mapStateToProps = state => {
   return {
      orders: state.orders
   }
}

export default connect(mapStateToProps, null)(OrderPage);
