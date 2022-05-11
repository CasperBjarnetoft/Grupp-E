import axios from 'axios'
import actiontypes from '../actiontypes';

export const getProduct = (_id) => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('http://localhost:4000/products/' + _id)
      dispatch(setProduct(res.data))
    }
    catch(err) {
      dispatch(productFailure(err.message))
    }
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().product.loading,
    payload
  }
}

const setProduct = (product) => {
  return {
    type: actiontypes().product.setProduct,
    payload: product
  }
}

const productFailure = (payload) => {
  return {
    type: actiontypes().product.failure,
    payload
  }
}