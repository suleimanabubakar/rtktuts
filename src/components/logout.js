import {useSelector,useDispatch} from 'react-redux'
import { logout,selectUser } from '../features/userSlice'
const Logout = () =>  {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoff =()=> {
        console.log('wow')
        dispatch(logout())
    }
    return ( 
    <>
    <h1>Welcome {user.email}</h1>
    <button onClick={logoff} >Logout</button>
    </>        
     );
}
 
export default Logout;