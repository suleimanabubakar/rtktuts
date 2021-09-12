import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {loginStates} from '../features/loginSlice'

import {FetchUserDetails} from '../api/userAction'

const PrivateRoute = ({children,...rest}) => {

const isAuth = useSelector(loginStates).isAuth

!isAuth && (
localStorage.getItem('token') ?  FetchUserDetails() : console.log('tokenNotFound')
)


    return (
        <Route
        {...rest}
        render={({ location }) =>
            isAuth ? (
             <> {children} </>
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />
            )
        }
    />  
    );
}
 
export default PrivateRoute;