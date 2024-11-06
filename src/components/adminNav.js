import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/adminNav.css";

const AdminNav = () => {
  return (
    <div className='admin-nav'>
        <div className='logo'>THE TRACKERS <p>Control Panel</p></div>
        <div>
            <Link to="/" className='nav-btn' >HOME</Link>
            <Link to="/portfolio" className='nav-btn'>PORTFOLIO</Link>
        </div>

    </div>
  )
}

export default AdminNav