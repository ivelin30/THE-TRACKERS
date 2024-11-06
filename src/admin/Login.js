import React, { useState } from 'react'
import "../styles/login.css"
import axios from 'axios';
import { useContext } from 'react';
import DataProvider from '../DataProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLogged, setIsAdmin, setIsLogged} = useContext(DataProvider);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const Login = async (e) => {
    e.preventDefault();
    const params = {
      username: username,
      password: password
    };
    const result = await axios.get("http://localhost:5000/users",
     {params},
    {
        headers: { "Content-Type": "multipart/form-data" }
    }).then((res) =>{
      if(res.data.success){
        setIsAdmin(true);
        setIsLogged(true);
      }else{
        setIsLogged("wrong");
        setUsername('')
        setPassword('')
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className="main-login">
        <div className="login">
            <h1>THE TRACKERS</h1>
            <form onSubmit={Login}>
                <div className="form-control">
                <input type="text" value={username} onChange={onChangeUsername} className={"input-username"} required placeholder='Username'></input>
                </div>
                <div className="form-control">
                <input type="password" value={password} onChange={onChangePassword} required placeholder='Password'></input>
                </div>
                <div className='wrong-login'>{isLogged == "wrong" ?"Wrong username or password!!!" :""}</div>
                <button type="submit" className="btn">
                LOGIN
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login