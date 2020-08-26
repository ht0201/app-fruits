import React, { Component } from "react";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "./Menu.css";
import HomePage from "../../containers/HomePage/HomePage";
import ProductListPage from "../../containers/ProductPage/ProductListPage";
import CartPage from "../../containers/CartPage/CartPage";
import PaymentPage from "../../containers/PaymentPage/PaymentPage";
import OrderPage from "./../../containers/OrderPage/OrderPage";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      
        <Navbar className="navbar" color="#FFF" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse className="collapse" isOpen={isOpen} navbar>
            <Nav className="nav" navbar>
              <NavItem>
                <Link to="/">
                  <img src="/img/logo.png" alt="logo" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/">TRANG CHỦ</Link>
              </NavItem>
              <NavItem>
                <Link to="/product">SẢN PHẨM</Link>
              </NavItem>
              <NavItem>
                <Link to="/cart">GIỎ HÀNG</Link>
              </NavItem>
              <NavItem>
                <Link to="/payment">THANH TOÁN</Link>
              </NavItem>
              <NavItem>
                <Link to="/order">ĐƠN HÀNG</Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product">
          <ProductListPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Menu;

// class Menu extends Component {

//    render() {

//       return (
//          <React.Fragment>
//             <div className="container">
//                <div className="menu">
//                   <ul>
//                      <li className="menu-item img-logo">
//                         <img src="/img/logo.png" alt="logo" />
//                      </li>
//                      <li className="menu-item text">
//                         <Link to="/">
//                            trang chủ
//                         </Link>
//                      </li>
//                      <li className="menu-item text">
//                         <Link to="/product">
//                            sản phẩm
//                         </Link>
//                      </li>

//                      <li className="menu-item text">
//                         <Link to="/cart">
//                            Giỏ hàng
//                         </Link>
//                      </li>
//                      <li className="menu-item text">
//                         <Link to="/payment">
//                            Thanh toán
//                         </Link>
//                      </li>

//                      <li className="menu-item text">
//                         <Link to="/order">
//                            Đơn hàng
//                         </Link>
//                      </li>

//                      <li className="menu-item img-search icon">
//                         <Link to="">
//                            <img src="/img/search.svg" alt="search" />
//                         </Link>
//                      </li>

//                      <li className="menu-item img-cart icon">
//                         <Link to="">
//                            <img src="/img/bag.svg" alt="cart" />
//                         </Link>
//                      </li>
//                   </ul>
//                </div>
//             </div>

//             <Switch>
//                <Route path="/" exact component={HomePage} />
//                <Route path="/product">
//                   <ProductListPage />
//                </Route>
//                <Route path="/cart">
//                   <CartPage />
//                </Route>
//                <Route path="/payment">
//                   <PaymentPage />
//                </Route>
//                <Route path="/order">
//                   <OrderPage />
//                </Route>
//             </Switch>
//          </React.Fragment>

//       );
//    }

// }

// export default Menu;
