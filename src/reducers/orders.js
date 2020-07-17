import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('ORDERS'));
var initialState = data ? data : null;

const orders = (state = initialState, action) => {
   var { cart, buyer } = action;
   switch (action.type) {
      case Types.ORDER:
         
         state = {
            cart,
            buyer
         }
         localStorage.setItem('ORDERS', JSON.stringify(state));
         window.onbeforeunload = function() {
            localStorage.removeItem('ORDERS');
            localStorage.removeItem('CART');
            return '';
          };
         return state;
      default:
         return state;
   }
}

export default orders;