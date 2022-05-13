import actiontypes from "../actiontypes";

const initState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartReducer = (state = initState, action) => {

  switch(action.type){

    case actiontypes().cart.add: {
      const productRef = state.cart.find(product => product._id === action.payload._id)

      let cartItem = {
        ...action.payload,
        quantity: 1
      }

      productRef
      ? productRef.quantity += 1
      : state.cart = [...state.cart, cartItem]

      return {
        ...state,
        totalQuantity: getTotalQuantity(state.cart),
        totalAmount: getTotalAmount(state.cart)
      }
    }

    case actiontypes().cart.decrement:{
      const productRef = state.cart.find(product => product._id === action.payload)

      productRef.quantity === 1
      ? state.cart = state.cart.filter(product => product._id !== action.payload)
      : productRef.quantity -= 1

      return {
        ...state,
        totalQuantity: getTotalQuantity(state.cart),
        totalAmount: getTotalAmount(state.cart)
      }
    }

    case actiontypes().cart.removeOne: {
      state.cart = state.cart.filter(product => product._id !== action.payload)
      
      return {
        ...state,
        totalQuantity: getTotalQuantity(state.cart),
        totalAmount: getTotalAmount(state.cart)
      }
    }

    case actiontypes().cart.clearCart: {
      return {
        ...state,
        cart: [],
        totalAmount: 0,
        totalQuantity: 0
      }
    }

    default:
      return state
  }
}

export default cartReducer

const getTotalQuantity = cart => {
  let quantity = 0

  cart.forEach(product => {
    quantity += product.quantity
  })

  return quantity
}

const getTotalAmount = cart => {
  let total = 0;

  cart.forEach(product => {
    total += product.price * product.quantity
  })

  return total
}