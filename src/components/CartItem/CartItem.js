import React, { Component } from 'react';

import './CartItem.css';

class CartItem extends Component {
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
               <div>
                  <label
                     onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                     className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
                     >
                     <a>—</a>
                  </label>
                  <span className="qty"> {item.quantity} </span>
                  <label
                     onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                     className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
                     >
                     <a>+</a>
                  </label>
               </div>
            </td >
            <td style={{ verticalAlign: "middle" }} >{this.showAmount(item.product.price, item.quantity)} $</td>
            <td style={{ verticalAlign: "middle" }} >
               <button type="button"
                  className="btn btn-md btn-primary waves-effect waves-light"
                  onClick={() => this.onDelete(item.product)}
               >
                  Xoá
             </button>
            </td>
         </tr>
      );
   }

   showAmount = (price, quantity) => {
      return price * quantity;
    }
    onDelete = (product) => { 
      var { onDeleteProductInCart } = this.props;
      onDeleteProductInCart(product);

    }
    onUpdateQuantity = (product, quantity) => {
      var { onDeleteProductInCart,  onUpdateProductInCart } = this.props;
      if(quantity > 0) {
        onUpdateProductInCart(product, quantity);
      } else {
         onDeleteProductInCart(product);           
      }   
    }
}


export default CartItem;
