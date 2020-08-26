import React, { Component } from 'react';

import './CartItem.css';
import { MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS} from '../../constants/Message';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CartItem extends Component {

  
   render() {
      var {item} = this.props;
     
      return (
         <tr className="tr">
            <td style={{ verticalAlign: "middle" }}>
               <img src={item.product.image} alt={item.product.name} />
            </td>
            <td style={{ verticalAlign: "middle" }}>         
                   {item.product.name} 
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
      this.showRemove();    
    }


    onUpdateQuantity = (product, quantity) => {
      var { onDeleteProductInCart,  onUpdateProductInCart } = this.props; 
      if(quantity > 0) {
            onUpdateProductInCart(product, quantity);
            this.showUpdate();
           
      } else {
            onDeleteProductInCart(product);
            this.showRemove();                    
      }       
    }

    showUpdate = () => {
      toast.info(MSG_UPDATE_CART_SUCCESS);
    }

    showRemove = () => {
      toast.error(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
}


export default CartItem;
