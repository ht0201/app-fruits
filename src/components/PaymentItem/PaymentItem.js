import React, { Component } from 'react';

import './PaymentItem.css';

class PaymentItem extends Component {
   render() {
      var {item} = this.props;
      return (
         <tr className="tr">
            <td style={{ verticalAlign: "middle" }}>
               <img src={item.product.image} alt={item.product.name} />
            </td>
            <td style={{ verticalAlign: "middle" }}>         
                  <h5> {item.product.name} </h5>
            </td>
            <td style={{ verticalAlign: "middle" }}>{item.product.price} $</td>
            <td style={{ verticalAlign: "middle" }}>  
              <span className="qty"> {item.quantity} </span>
            </td >
            <td style={{ verticalAlign: "middle" }} >{this.showAmount(item.product.price, item.quantity)} $</td>         
         </tr>      
      );
   }

   showAmount = (price, quantity) => {
      return price * quantity;
    }
}

export default PaymentItem;
