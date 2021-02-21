import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/CartConstants';

export const addToCart = (productId, qty, userId) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/product/BHA/Y01/${productId}.json`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.fPrice,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  let sellerId = productId.substr(0, 6);
  
  const res = await Axios.patch(`/users/${userId}/cart/${productId}.json`, {[sellerId] : qty} )
  
  console.log(res);
  //localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (userId, productId) => async (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });

    const res = await Axios.delete(`/users/${userId}/cart/${productId}.json`)
    console.log(res)
    //localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };