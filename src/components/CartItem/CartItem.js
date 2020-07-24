import React, { Component } from 'react';

import './CartItem.css';
import { MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS, MSG_CART_EMPTY, MSG_WELCOME } from '../../constants/Message';


class CartItem extends Component {

   componentDidMount() {
      var {item} = this.props;
      if(item !== null) {
         this.props.onChangeMessage(MSG_WELCOME);
      }
      else {
         this.props.onChangeMessage(MSG_CART_EMPTY);
      }
   }
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
      this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);

    }
    onUpdateQuantity = (product, quantity) => {
      var { onDeleteProductInCart,  onUpdateProductInCart } = this.props; 
      if(quantity > 0) {
            onUpdateProductInCart(product, quantity);
            this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
           
      } else {
            onDeleteProductInCart(product);
            this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);                    
      }       
    }
}


export default CartItem;
