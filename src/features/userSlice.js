import {createSlice} from "@reduxjs/toolkit"




export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null
    },
    reducers: {
        successUser:(state,action) => {
            state.user=action.payload
        },

    },
})


export const {successUser} = userSlice.actions;

export const selectUser=(state)=>state.user

export default userSlice.reducer