import axios from "axios";
import { useState, useEffect, useContext} from "react";
import DataProvider from "../DataProvider";
import "../styles/adminPanel.css"
import AdminNav from "../components/adminNav.js";
import AddAlbum from "../components/admin/addAlbum.js";

const ControlPanel = () => {
  
  return (
    
    <div className="main">
      <AdminNav/>
      <AddAlbum/>
    </div>
  )
}

export default ControlPanel