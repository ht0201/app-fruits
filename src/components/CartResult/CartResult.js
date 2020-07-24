import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CartResult extends Component {
   render() {
      var { cart } = this.props;
    
      return (
         <tr>
            <td >
               <Link to='/product' className='btn btn-danger waves-effect waves-light'>
                  Mua hàng
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
            <td>
               <Link to='/payment' className='btn btn-primary waves-effect waves-light'>
                  Thanh Toán
               </Link>
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
      return <Link to='/product' />
   }
}


export default CartResult;
