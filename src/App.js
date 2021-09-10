
import './App.css';
import Login from './components/login';
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';
import Logout from './components/logout';
function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App"> 
    {user ?   <Logout /> :   <Login />}
     
    
    </div>
  );
}

export default App;
