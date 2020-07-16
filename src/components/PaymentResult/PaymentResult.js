import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaymentResult extends Component {
   render() {
      var { cart } = this.props;

      return (
         <tr>
            <td>
               <Link to='/cart' className='btn btn-danger waves-effect waves-light'>
                  Xem giỏ hàng
               </Link>
            </td>

            <td colSpan="3">
               <h5>
                  <strong>Tổng Tiền</strong>
               </h5>
            </td>
            <td>
               <h5>
                  <strong>{this.showTotalAmount(cart)} $</strong>
               </h5>
            </td>       
         </tr>

      );
   }

   showTotalAmount = cart => {
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
         total += cart[i].product.price * cart[i].quantity;
      }
      return total;
   }

   onBack = () => {
      return <Link to='/cart' />

   }
}


export default PaymentResult;
