import React, { Component } from 'react';
import './PaymentInfo.css';

class PaymentInfo extends Component {
   constructor(props){
      super(props); 
      this.state = {      
            txtname:'',
            txtphone:'',
            txtaddress:'',
            orderDate: ''      
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

   onSave = (e) => {
      e.preventDefault(); 
      var { txtname, txtphone, txtaddress } = this.state;
      var { cart } = this.props;
      var today = new Date();
    
      var buyer = {
         name: txtname,
         phone: txtphone,
         address: txtaddress,
         orderDate: today.toUTCString()
      };
      this.props.onOrder(cart, buyer);  
   }

   render() {
      return (
         <div className="payment">
            <section className="section">
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
                           <th ></th>
                        </tr>
                     </thead>
                     <tbody>
                        {this.props.children}
                     </tbody>
                  </table>
               </div>
            </section>

            <form onSubmit={this.onSave} className="form-info" action="/order">
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
                  <input type="phone" className="form-control" name="txtphone" placeholder="Số điện thoại" onChange={this.onChange}/>
               </div>
               <div className="form-group">
                  <input type="address" className="form-control" name="txtaddress" placeholder="Địa chỉ" onChange={this.onChange}/>
               </div>
               <button type="submit" 
                        className="btn btn-primary" style={{ marginLeft: "13px"}}                      
               >ĐẶT HÀNG</button>
            </form>        
         </div>
      );
   }
}

export default PaymentInfo;