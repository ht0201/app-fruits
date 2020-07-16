import React, { Component } from 'react';

class OrderItem extends Component {
   render() {
      var { item, index } = this.props;
      return (
         <tr>
            <td >{index + 1}</td>
            <td >{item.product.name}</td>
            <td >{item.product.price} $</td>
            <td >{item.quantity}</td>
            <td >{this.showAmount(item.product.price, item.quantity)} $</td>
         </tr>
      );
   }

   showAmount = (price, quantity) => {
      return price * quantity;
   }
}


export default OrderItem;
