import { useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { Redirect } from "react-router";
import {apiUrls,init} from "../features/apiSlice"
import { authenticate,loginSlice,loginStates } from "../features/loginSlice";
import {FetchUserDetails} from '../api/userAction'

const Login = () => {

    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const dispatch = useDispatch();
    
    const isAuth = useSelector(loginStates).isAuth



    const api = useSelector(apiUrls)
 


    const handleSubmit = ()=> {
        dispatch(authenticate({'username':email,'password':password}))
    }

        !isAuth && (
        localStorage.getItem('token') ?  FetchUserDetails() : console.log('tokenNotFound')
        )


    return ( 
        <>
        { isAuth  ? <Redirect
            to={{
                pathname: "/",
            }}
        /> : 
        <>
        <p>Login Page</p>
        <div>
            <label htmlFor="#">Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        <div>
            <label htmlFor="#">Password</label>
            <input type="text"  onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <button onClick={handleSubmit} >Login</button>
        </>

    }
    </>
     );
}
 
export default Login;