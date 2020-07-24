import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';


export const actFetchProductsRequest = () => {
   return (dispatch) => {
      return callApi('products', 'GET', null).then(res => {

         dispatch(actFetchProducts(res.data));
      });
   }
}

export const actFetchProducts = (products) => {
   return {
      type: Types.FETCH_PRODUCT,
      products
   }
}


export const actAddToCart = (product, quantity) => {
   return {
      type: Types.ADD_TO_CART,
      product,
      quantity
   }
}


export const actChangeMessage= message => {
   return {
       type: Types.CHANGE_MESSAGE,
       message
   }
}

export const actRemoveProduct= product => {
   return {
       type: Types.DELETE_PRODUCT_INCART,
       product
   }
}

export const actUpdateProductInCart= (product, quantity) => {
   return {
       type: Types.UPDATE_PRODUCT_INCART,
       product,
       quantity
   }
}

export const actOrders= (cart, buyer) => {
   return {
       type: Types.ORDER,
       cart, 
       buyer
   }
}

export const actClearCart= () => {
   return {
      type: Types.CLEAR_CART,  
   }
}

