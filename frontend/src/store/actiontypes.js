const actiontypes = () => {
  return {
    products: {
      setProducts: 'SET_PRODUCTS',
      loading: 'LOADING',
      failure: 'PRODUCT_FAILURE'
    },
    product: {
      setProduct: 'SET_PRODUCT',
      loading: 'LOADING',
      failure: 'PRODUCT_FAILURE'
    },
    cart: {
      add: 'ADD_TO_CART',
      decrement: 'DECREMENT',
      removeOne: 'REMOVE_ONE',
      clearCart: 'CLEAR_CART',
    }
  }
}

export default actiontypes;