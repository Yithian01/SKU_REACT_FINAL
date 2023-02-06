import { createSlice } from '@reduxjs/toolkit'
//슬라이스 = 툴킷에서 세팅을 쉽게 해주는 방법 리듀서와 액션크리에이터를 합쳐서 세팅 해놓은 것

const initialState = [];
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        addCart : (state,action) =>{
            const equalItem = state.findIndex(item => item.id === action.payload.id);
        if(equalItem >= 0 ){
            alert('장바구니에 동일한 상품이 있습니다.');
        }else{
            state = state.push(action.payload);
            alert(`장바구니에 ${action.payload.product_name}(이)가 추가 되었습니다.`);

        }},
        deleteCart : (state, action)=>{
            const num = state.findIndex((ele)=> ele.id === action.payload[0].id)
            state = state.splice(num,1);
        },
    },  
})



export const { addCart, deleteCart } = cartSlice.actions    // 액션 생성함수 
export default cartSlice.reducer