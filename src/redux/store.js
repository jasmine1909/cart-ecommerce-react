import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

// import {createStore, combineReducers} from 'redux';
// import cartItems from '../reducers/cartItems';
// import getPayment from '../reducers/getPayment';

// const rootReducer = combineReducers({
//     cartItems,
//     getPayment,
//       });

// export default store = createStore(rootReducer)
