import React, { Component } from 'react';
import './OrderInfo.css';


class OrderInfo extends Component {

   render() {
      var { orders } = this.props;
      return (
         <div className="content">
            <div className="orders">
               <div className="div-item title">
                  <h4> THANK YOU </h4>
                  <div className="title-order-ok">
                     <img src="img/icons8-ok.svg" alt="img-ok"></img>
                     ĐẶT HÀNG THÀNH CÔNG
                  </div>
               </div>
               <div className="div-item infoBuyer">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="card-title mb-4">Thông tin khách hàng</h5>
                        <h6 className="card-subtitle mb-3  text-muted"> {orders.buyer.name} </h6>
                        <p className="card-text"> {orders.buyer.phone} </p>
                        <p className="card-text"> {orders.buyer.address}</p>
                        <p className="card-text"> {orders.buyer.orderDate}</p>
                     </div>
                  </div>
               </div>
               <div className="div-item infoCart">
                  <div className="card">
                     <h5 className="card-title mt-2 ml-4">Thông tin sản phẩm</h5>
                     <table className="table table-bordered">
                        <thead>
                           <tr>
                              <th> STT</th>
                              <th >Tên</th>
                              <th >Giá</th>
                              <th >Số lượng</th>
                              <th >Thành tiền</th>
                           </tr>
                        </thead>
                        <tbody>
                           {this.props.children}
                        
                        </tbody>
                     </table>
                  </div>    

               </div>
            </div>
         </div>

      );
   }

}

export default OrderInfo;