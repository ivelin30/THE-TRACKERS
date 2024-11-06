import React, { useContext, useEffect } from 'react'
import "../styles/loading.css"
import DataProvider from '../DataProvider'
import loadingLogo from "../resource/images/loading.png"
import circle from "../resource/images/circle.png"

const Loading = () => {
  const {isLoading, setIsLoading } = useContext(DataProvider);
  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    },2200)
  })
  return (
    <div className={isLoading ?"loading-cont loading-visible":"loading-cont"}>
      <div  className="loading-logo">
        <div className='flash'></div>
        <img src={loadingLogo} alt='' className='camera-logo'></img>
        <img src={circle} alt='' className="loading-circle"/>
      </div>
      
      
    </div>
  )
}

export default Loading