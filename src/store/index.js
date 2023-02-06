import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import counterSlice from './counter/counterSlice'
import cartSlice from './cart/cartSlice'
import userSlice from './user/userSlice'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'  
// reducer가 실행될 때 persist가 같이 같이 묶어서 사용
import storage from 'reduxjs-toolkit-persist/lib/storage' 
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session' // 세션스토리지


const persistConfig = {
  key: 'root',  // localStorage에 저장될 때의 key값
  storage,
}

const rootReducer = combineReducers({
  cart:cartSlice,
  user:userSlice
})

// 위의 두 개의 객체를 묶어서 사용할 수 있게 해준다.
const persistedReducer = persistReducer(persistConfig, rootReducer)
// rootReducer 와 persist를 묶어서 사용 
// redux-persist를 사용해서 로컬스토리지에 state값을 저장하고 페이지가 새로고침이 되면 
// initalState 값이 로컬스토리지에 저장된 state값으로 대체되기 때문에 초기화 되지 않는다.

const store = configureStore({
  reducer:persistedReducer,

})

const persistor = persistStore(store);

export { store , persistor } ;