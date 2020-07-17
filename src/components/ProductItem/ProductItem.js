import React, { Component } from 'react';

import './ProductItem.css';

class ProductItem extends Component {
  render() {
    var { product} = this.props;

    return (
      <div className="col-lg-3 col-md-4 col-sm-10 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt="abc" />
            <div className="mask waves-effect waves-light"></div>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a> {product.name} </a>
              </strong>
            </h4>

            <div className="c-footer">
              <span className="left">${product.price}</span>
              <span className="right">
                <a className="btn-floating btn-lg purple-gradient"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>



    );
  }

  onAddToCart = (product, quantity) => {
    this.props.onAddToCart(product, quantity);

  }


}


export default ProductItem;
