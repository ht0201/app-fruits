import React, { Component } from 'react';

class OrderResult extends Component {
   render() {
      var { cart } = this.props;

      return (
            <tr>
               <td colSpan="1"></td>
               <td colSpan="3" style={{ textAlign: 'center' }}>
                  <h5>
                     Tổng tiền
                  </h5>
               </td>       
               <td>
                  <h5>
                     {this.showTotalAmount(cart)} $
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

}


export default OrderResult;
