
import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import orders from './orders';
import message from './message';


const appReducers = combineReducers({
   products,
   cart,
   orders,
   message
})

export default appReducers;