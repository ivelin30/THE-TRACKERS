import { useEffect, useContext, useState } from 'react';
import DataProvider from '../DataProvider';
import videoBg from '../resource/videos/bg-video.mp4'
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Nav from './../components/Nav';
import "../styles/home.css"
import Services from '../components/home/services';
import AboutUs from '../components/home/aboutUs';
import HomePortfolio from '../components/home/homePortfolio';

const Home = () => {
  const { allImage, setAllImage, renderAlbums,isLoading, setIsLoading } = useContext(DataProvider);
  useEffect(() => {
    setIsLoading(true);
    renderAlbums();
  }, [])
  
 
  return (
    <>
    <div style={{position: "absolute"}} className='about-nav-down'>
            <p>SEE MORE...</p>
            <div><IoIosArrowBack/></div>
        </div>
      <Nav/>
      <div className='video-background'>
          <video className='video' src={videoBg} autoPlay loop muted controls={false}/>
      </div>
      <div className='contact'>
          <div className='contact-menu'>
            <a href='#' className='instagram'><FaInstagram/></a>
            <a href='#' className='email'><TfiEmail/></a>
            <a href='#'className='facebook'><FaFacebookF/></a>
            <a href='#'className='tiktok'><FaTiktok/></a>
          </div>
      </div>
      
      
      <Services/>
      <AboutUs/>
      <HomePortfolio/>
    </>
    
    
    
  )
}

export default Home