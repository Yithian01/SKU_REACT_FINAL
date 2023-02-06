import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import counterSlice from './counter/counterSlice'
import cartSlice from './cart/cartSlice'
import userSlice from './user/userSlice'

const rootReducer = combineReducers({
  cart:cartSlice,
  user:userSlice
})

const store = configureStore({
  reducer:rootReducer
})

export default store;