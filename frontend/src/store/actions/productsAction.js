import axios from 'axios'
import actiontypes from '../actiontypes';

export const getProducts = () => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('http://localhost:4000/products')
      dispatch(setProducts(res.data))
    }
    catch(err) {
      dispatch(productsFailure(err.message))
    }
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().products.loading,
    payload
  }
}

const setProducts = (products) => {
  return {
    type: actiontypes().products.setProducts,
    payload: products
  }
}

const productsFailure = (payload) => {
  return {
    type: actiontypes().products.failure,
    payload
  }
}