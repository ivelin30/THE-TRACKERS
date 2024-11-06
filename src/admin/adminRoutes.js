import React, { useEffect, useContext } from 'react'
import {Routes, Route, useNavigate}  from 'react-router-dom';
import ControlPanel from './AdminPanel.js';
import Login from './Login.js';
import  DataProvider from '../DataProvider';

const AdminRoutes = () => {
  const navigate = useNavigate()
  const { isAdmin , isLogged } = useContext(DataProvider);
  
  useEffect(()=>{
    if (isAdmin && isLogged) {
      navigate("panel")
    }else{
      navigate("login")
    }
  },[isAdmin])
  
  return (
    <>
      <Routes>
          <Route path={"/panel"} element={<ControlPanel/>}/>
          <Route path={"/login"} element={<Login/>}/>
      </Routes>
    </>
    
  )
}

export default AdminRoutes