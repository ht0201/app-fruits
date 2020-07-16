import React, { Component } from 'react';


class NotFoundPage extends Component {
   render() {
      return (
         <div className="container">
            <div className="alert">
               <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
               <h2>404 The page you requested cannot be found!</h2> 
            </div>
         </div>
      );
   }
}

export default NotFoundPage;
