import React, { Component } from 'react';

import './Cart.css';

class Cart extends Component {
   render() {
      return (       
         <section className="section">
            <div className="title" >
                 THÔNG TIN GIỎ HÀNG 
            </div>
                 
            <div className="table-responsive">
               <table className="table">               
                  <thead >
                     <tr>
                        <th ></th>
                        <th >Tên hàng</th>
                        <th >Giá</th>
                        <th >Số lượng</th>
                        <th >Thành tiền</th>
                        <th ></th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.props.children}          
                  </tbody>
               </table>
            </div>
         </section>
      );
   }
}


export default Cart;
