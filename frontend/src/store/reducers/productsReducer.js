import actiontypes from '../actiontypes';

const initState = {
  data: [],
  loading: false,
  error: null
}

const productsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().products.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().products.setProducts:
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    
      case actiontypes().products.failure:
        return {
          data: [],
          loading: false,
          error: action.payload
        }
      
      default: 
        return state
      
  }
}

export default productsReducer;