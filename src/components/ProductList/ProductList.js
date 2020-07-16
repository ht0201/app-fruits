import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ProductList.css';

class ProductList extends Component {

   render() {
      return (
         <div className="category">
            <ul className="e-tabs">
               <li className="title-cate">            
                  DANH SÁCH SẢN PHẨM 
                  <div className="row">
                    {this.props.children}
                  </div>
               </li>          
            </ul>
            <div className="cart">
               <Link to='/cart' className="btn btn-primary
                      btn-rounded waves-effect waves-light"
                     > 
                  XEM GIỎ HÀNG 
               </Link>
            </div>        
         </div>
      );
   }
}

export default ProductList;