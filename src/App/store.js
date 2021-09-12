import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import apiReducer from "../features/apiSlice"
import authReducer from "../features/loginSlice"

export default configureStore({
    reducer:{
        user:userReducer,
        apiUrl:apiReducer,
        auth:authReducer,
    }
}) 