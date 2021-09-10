import { useState } from "react";
import {useDispatch} from "react-redux"
import {login} from "../features/userSlice"
const Login = () => {

    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    const dispatch = useDispatch();

    const handleSubmit = ()=> {
        dispatch(login({
            email:email,
            password:password,
            loggedIn:true,
        }))
    }

    return ( 
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
     );
}
 
export default Login;