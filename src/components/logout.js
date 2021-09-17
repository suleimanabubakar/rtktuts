import {useSelector,useDispatch} from 'react-redux'
import { LogoutF } from '../api/userAction'
import { loginStates,logoutUser } from '../features/loginSlice'


const Logout = () =>  {

    // const user_id = useSelector(loginStates).user_id
    
    const dispatch = useDispatch()
    const logoff =()=> {
        console.log('wow')
       dispatch(LogoutF())
        // dispatch(logoutUser())
    }
    return ( 
    <>
    <h1>Welcome </h1>
    <button onClick={logoff} >Logout</button>
    </>        
     );
}
 
export default Logout;