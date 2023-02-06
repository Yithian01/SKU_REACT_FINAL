import { createSlice } from '@reduxjs/toolkit'
//슬라이스 = 툴킷에서 세팅을 쉽게 해주는 방법 리듀서와 액션크리에이터를 합쳐서 세팅 해놓은 것

const initialState = {
    value: 0
}


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        increment : (state, action)=>{
            state.value += action.payload;
            // action.type= 'SET_VALUE_INCREMENT' : 옛날방식 
        },
        decrement : (state, action)=>{
            state.value -= action.payload;
            // action.type= 'SET_VALUE_DECREMENT' : 옛날방식 

        },

    },  
})

export const { increment, decrement } = counterSlice.actions    // 액션 생성함수 
export default counterSlice.reducer