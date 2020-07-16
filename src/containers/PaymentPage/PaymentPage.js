import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actOrders } from '../../actions';
import PaymentItem from './../../components/PaymentItem/PaymentItem';
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo';
import PaymentResult from './../../components/PaymentResult/PaymentResult';

class PaymentPage extends Component {

   render() {
      var { cart, onOrder } = this.props;
      
      return (
         <div className="container">
            <PaymentInfo onOrder={onOrder} cart={cart}>
               {this.showPaymentItem(cart)}
               {this.showTotalAmount(cart)}
               
            </PaymentInfo>
         </div>
      );
   }

   showPaymentItem = (cart) => {  
      var {onOrder} = this.props;     
      var result = null;   
      if(cart.length > 0) {
         result = cart.map((item, index) => {
            return <PaymentItem
                     key={index}
                     item={item}
                     index={index}
                     onOrder={onOrder}
                   />
         })
      }
      return result;
   }

   showTotalAmount = cart => {
      var result = null;
      if (cart.length > 0)
        result = <PaymentResult cart={cart} />
  
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
      onOrder: (cart, buyer) => {
         dispatch(actOrders(cart, buyer));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
