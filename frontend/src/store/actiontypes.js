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
    }
  }
}

export default actiontypes;