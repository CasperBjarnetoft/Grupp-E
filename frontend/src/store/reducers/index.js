import { combineReducers } from "redux";
import productReducer from './productReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import { userRegisterReducer, userLoginReducer } from "./authReducer";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderListReducer } from './ordersReducer'

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  UserRegister: userRegisterReducer,
  orderList: orderListReducer,
  myOrders: orderListMyReducer,
  orderDetails: orderDetailsReducer,
  orderCreate: orderCreateReducer
})