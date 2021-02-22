import Axios from 'axios';
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = (userId) => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST,
  });
  
  try {
    
    const getYear = async () => {
      const year = await Axios.get('/year.json')
      return year;
    } 
    
    getYear().then ((axiosResult) => {
      let result = axiosResult;
      console.log(result.data.session)
    
      return getYear()
      .then(axiosResult => {
       //console.log(result)
      // console.log("userID : " + userId)
      
    if (result.data.session === "Y01")
    {
    
      const { data }  =  Axios.get(`/product/${userId}/Y01.json`)
      console.log({data})
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      
      
    }

    else if (result.data.session === "Y02")
    {
      const { data } = Axios.get(`/product/${userId}/Y02.json`);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      return data;
    }
    else 
    {
      const { data } = Axios.get(`/product/${userId}/Y03.json`);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }

  }) //return result.then(result
  } ) //then ((axiosResult)

  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
      const { data } = await Axios.get(`/product/BHA/Y01.json?orderBy="_id"&equalTo="${productId}"`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };