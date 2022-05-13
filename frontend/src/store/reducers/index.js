import { combineReducers } from "redux";
import productReducer from './productReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer
})