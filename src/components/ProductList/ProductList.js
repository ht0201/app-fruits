import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ProductList.css';

class ProductList extends Component {

   render() {
      
      return (
         <div className="container">
            <div className="e-tabs">
               <div className="title-cate">            
                  DANH SÁCH SẢN PHẨM 
                  <div className="row">
                    {this.props.children}
                  </div>
               </div>          
            </div>
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