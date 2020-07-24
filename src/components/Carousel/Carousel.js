import React, { Component } from 'react';

import './Carousel.css';

class Carousel extends Component {

   render() {
      return (
         <div className="slice" >
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item placeholder active">
                     <img src="img/organic-food-1.png" className="d-block w-100 img-small" alt="1" />
                     <div className="mask waves-effect waves-light" style={{paddingBottom: "66.6%"}}></div>
                  </div>
                  <div className="carousel-item placeholder">
                     <img src="img/organic-food-2.jpg" className="d-block w-100 img-small" alt="2" />
                     <div className="mask waves-effect waves-light" style={{paddingBottom: "66.6%"}}></div>
                  </div>                          
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      );
   }
}

export default Carousel;