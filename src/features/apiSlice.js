import {createSlice} from "@reduxjs/toolkit"

export const apiSlice = createSlice({
    name: "api",
    initialState:{
        apiUrl:process.env.REACT_APP_API_URL
    },
    reducers: {
        init:(state)=>{
            state.apiUrl = process.env.REACT_APP_API_URL
        }
    }
})


export const {init} = apiSlice.actions
export const apiUrls=(state)=>state.apiUrl.apiUrl
export default apiSlice.reducer

