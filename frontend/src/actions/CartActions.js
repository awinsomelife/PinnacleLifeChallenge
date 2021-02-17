import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/CartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/products/BHA/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data[0].name,
      image: data[0].image,
      price: data[0].fPrice,
      countInStock: data[0].countInStock,
      product: data[0]._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };