import './App.css';
import './fonts_link.css'
import React, {useState} from 'react';
import LoginForm from './components/LoginForm'

function App() {
  const adminUser = {email:"junyi0811ng@gmail.com",password:"admin0811"}
  const AdminUser = {email:"jb200497@foonyew.edu.my",password:"admin0497"}
  
  const [user,setUser] = useState({name:"",email:""});

  const Login = details =>{
    

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In")
      console.log(details);
      setUser({
        name:details.name,
        email:details.email
      })
    }else{
      console.log("Details do not match")
    }
    if(details.email === AdminUser.email && details.password === AdminUser.password){
      console.log("Logged In")
      console.log(details);
      setUser({
        name:details.name,
        email:details.email
      })
    }else{
      console.log("Details do not match")
    }
  }

  const Logout = () =>{
    console.log("Logout");
    setUser({name:"",email:""})
  }
  return (
      <div className="App allct bd_h bd_w">
        {(user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button className="btn" onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login}/>
        )}
      </div>
  );
}

export default App;
