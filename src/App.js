
import './App.css';
import Login from './components/login';
import {useSelector} from "react-redux"
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { loginStates } from './features/loginSlice';
import Logout from './components/logout';
import PrivateRoute from './components/PrivateRoute';
function App() {
  const isAuth = useSelector(loginStates).isAuth
  // const user = useSelector(selectUser)
  console.log(isAuth)
  return (
    <Router>
    <div className="App"> 
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path="/">
        <Logout />
      </PrivateRoute>

      <Route path="*">
						<h1>404 Page not found</h1>
			</Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
