import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import {successUser} from '../features/userSlice'

const apiUrl = process.env.REACT_APP_API_URL

export const  FetchUserDetails = async () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const res = await axios.get(apiUrl+'auth/user/'+token)
    res.status = 200 ? dispatch(successUser(res.data.user))  : console.log('Error')
}