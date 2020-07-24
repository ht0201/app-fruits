import React, { Component } from 'react';

import './PaymentInfo.css';

import OrderPage from '../../containers/OrderPage/OrderPage';


class PaymentInfo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         txtname: '',
         txtphone: '',
         txtaddress: '',
         orderDate: '',
         toggle: false
      }
   }

   onChange = (e) => {
      var target = e.target;
      var name = target.name;
      var value = target.value;
      this.setState({
         [name]: value
      })
   }


   onSubmit = async (e) => {
      e.preventDefault();
      var { txtname, txtphone, txtaddress } = this.state;
      var { cart } = this.props;
      var today = new Date();

      var buyer = {
         name: txtname,
         phone: txtphone,
         address: txtaddress,
         orderDate: today.toDateString()
      };
      await this.props.onOrder(cart, buyer);
      await this.props.onClearCart();
      this.setState({
         toggle: true
      })
   }




   render() {
      var {toggle} = this.state;
      if(toggle === true)
      {
         return <OrderPage />
      }
     
      return (
         <div className="payment">
            <div className="section">
               <div className="title" >
                  THÔNG TIN THANH TOÁN
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

                        </tr>
                     </thead>
                     <tbody>
                        {this.props.children}
                     </tbody>
                  </table>
               </div>
            </div>

            <form className="form-info">
               <div className="title" >
                  THÔNG TIN KHÁCH HÀNG
               </div>
               <div className="form-group">
                  <input type="name"
                     className="form-control"
                     name="txtname"
                     placeholder="Tên"
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <input type="phone" className="form-control" name="txtphone" placeholder="Số điện thoại" onChange={this.onChange} />
               </div>
               <div className="form-group">
                  <input type="address" className="form-control" name="txtaddress" placeholder="Địa chỉ" onChange={this.onChange} />
               </div>
               <button type="button"
                  className="form-group btn btn-primary" style={{ marginLeft: "40px" }}
                  onClick={this.onSubmit}
               >ĐẶT HÀNG</button>

              
            </form>
         </div>
      );
   }
}


export default PaymentInfo;