import actiontypes from '../actiontypes';

const initState = {
  data: [],
  loading: false,
  error: null
}

const productReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().product.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().product.setProduct:
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    
      case actiontypes().product.failure:
        return {
          data: [],
          loading: false,
          error: action.payload
        }
      
      default: 
        return state
      
  }
}

export default productReducer;