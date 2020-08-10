import React, { Component } from 'react';

import './ProductItem.css';
import {  MSG_ADD_TO_CART_SUCCESS} from '../../constants/Message';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ProductItem extends Component {

  componentDidUpdate(prevProps) {
    
    if(prevProps.product !== this.props.product){
      this.props.onChangeMessage(MSG_ADD_TO_CART_SUCCESS);
    }
  }

 
  

  render() {
  
    var { product} = this.props;
   //  window.onload = function() {
    
   //    var placeholder = document.querySelector('.placeholder'),
   //    small = placeholder.querySelector('.img-small')
      
   //    // 1: load small image and show it
   //    var img = new Image();
   //    img.src = small.src;
   //    img.onload = function () {
   //        small.classList.add('loaded');
   //    };
      
   //    // 2: load large image
   //    var imgLarge = new Image();
   //    imgLarge.src = placeholder.dataset.large; 
   //    imgLarge.onload = function () {
   //    imgLarge.classList.add('loaded');
   //    };

   //    placeholder.appendChild(imgLarge);
   //  }
    

  //   <figure name="7012" id="7012" class="graf--figure graf--layoutFillWidth graf-after--h4">
  //   <div class="aspectRatioPlaceholder is-locked">
  //     <div class="aspect-ratio-fill" style="padding-bottom: 66.7%;"></div>
  //        <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*sg-uLNm73whmdOgKlrQdZA.jpeg" data-width="2000" data-height="1333" data-scroll="native">
  //        <img src="https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
  //         <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="47"></canvas>
  //         <img class="progressiveMedia-image js-progressiveMedia-image __web-inspector-hide-shortcut__" data-src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg" src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg">
  //         <noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg"&gt;</noscript>
  //     </div>
  //   </div>
  // </figure>
  

    return (
      <div className="col-lg-3 col-md-4 col-sm-10 mb-r">
          <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight z-depth-1">
               <img src= {product.image}
               className="img-fluid" alt={product.name} />
               <a>
               <div className="mask waves-light waves-effect waves-light"></div>
               </a>
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
    this.showSuccess();
   
  }

  showSuccess = () => {
    toast.success(MSG_ADD_TO_CART_SUCCESS);
  }


}


export default ProductItem;
