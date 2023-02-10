import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

export const getProduct = createAsyncThunk(
    "GET_PRODUCT",
    async (keyword) => {
        try{
            const res = await axios.get(`my-json-server.typicode.com/Yithian01/SKU_REACT_FINAL/productList?q=${keyword}`);
            // my-json-server.typicode.com/user/repo/posts
           
            return res.data;
        }catch(err){
            console.log(err);
        }
    }
)



 const productSlice = createSlice({
    name: 'product',
    initialState:{
        value:[]
    },
    reducers:{

    },
    extraReducers :(builder) =>{
        builder.addCase(getProduct.fulfilled,(state, action)=>{ // .fulfilled = 함수가 완료 되었을 때 상태를 제어
            state.value=action.payload;
        })
    }
})

export default productSlice.reducer