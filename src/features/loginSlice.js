import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
// import { userSlice } from "./userSlice"
import { successUser } from "./userSlice"

import axios from "axios"


export const authenticate = createAsyncThunk('auth/authenticate', async (data) => {
    
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL+'auth/token/',data)
        localStorage.setItem('token',res.data.key)
        return res.data.user_id
    } catch(error) {
        throw Error(error)
    }
})


export const loginSlice = createSlice({
    name: "auth",
    initialState:{
        isLoading:false,
        isAuth:false,
        isError:false,
        error:null,
    },
    reducers: {
        logoutUser:(state)=>{
            state.isAuth=false;
            state.user_id=null
            localStorage.removeItem('token')
        }
    },
    extraReducers : {
        [authenticate.pending]: (state,action) => {
            state.isLoading=true;
            state.isError=false
        },
        [authenticate.fulfilled]: (state,action)=>{
            state.isLoading=false;
            state.isAuth=true;
        },
        [authenticate.rejected]: (state,action)=>{
            state.isLoading=false;
            state.isAuth=false;
            state.error=action.error.message
            state.isError=true;
        },
        [successUser]: (state,action)=>{
            state.isAuth=true
            state.isLoading=false

        }

    }
})

export const {logoutUser} = loginSlice.actions


export const loginStates = (state)=> state.auth

export default loginSlice.reducer

