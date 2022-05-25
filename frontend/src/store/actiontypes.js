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
    },
    orders: {
      getAllOrders: 'GET_ALL_ORDERS',
      loading: 'LOADING',
      failure: 'ORDERS_FAILURE',
      updateOrder: 'ORDER_UPDATE'
    },
    myOrders: {
      getMyOrders: 'GET_My_ORDERS',
      loading: 'LOADING',
      failure: 'My_ORDERS_FAILURE'
    },
    orderDetails: {
      getOrderDetails: 'GET_ORDER_DETAILS',
      loading: 'LOADING',
      failure: 'ORDER_DETAILS_FAILURE'
    },
   createOrder: {
      createOrder: 'CREATE_ORDER',
      loading: 'LOADING',
      failure: 'CREATE_ORDER_FAILURE'
    },
    login: {
      userLogin: 'USER_LOGIN',
      loading: 'LOADING',
      failure: 'FAILURE',
      userLogout: 'USER_LOGOUT'
    },
    register: {
      userRegister: 'USER_REGISTER',
      loading: 'LOADING',
      failure: 'FAILURE',

    }
  }
}

export default actiontypes;