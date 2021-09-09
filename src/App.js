import { useState } from 'react';
import './App.css';

import RestrictedPage from "./components/restrictedPage/RestrictedPage";

function App() {

  const [isLoggedIn, setIsLoggesIn] = useState(true);

  const Login = () => setIsLoggesIn(true);
  const Logout = () => setIsLoggesIn(false);

  const name = 'Willian';

  return (
    <div className="App">
      <div className="App-header">

       <RestrictedPage isLoggedIn = {isLoggedIn} name = {name} login = {Login}/>
       
       {isLoggedIn ?(
         <button onClick = {Logout} >Logout</button>
       ):(
         <button onClick = {Login} >Login</button>
       )}
      </div>
    </div>
  );
}

export default App;
