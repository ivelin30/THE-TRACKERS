import React, { useContext, useEffect } from 'react'
import "../styles/about.css"
import videoBg from "../resource/videos/smoke-background-optimized.mp4";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import light from '../resource/images/light.png';
import glow from "../resource/images/glow.png";
import DataProvider from '../DataProvider';
const About = () => {
    const { setIsLoading } = useContext(DataProvider);
    const person1 = require("../resource/images/about1.png");
    const person2 = require("../resource/images/about2.png");

    useEffect(() => {
        setIsLoading(true);

        const clientHight = window.innerHeight;
        const onScroll = () => {
            const clientScroll = window.scrollY;
            const HtmlElement = document.documentElement
            HtmlElement.style.setProperty("--scroll", (clientScroll/clientHight)*100);
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    },[]);


  return (
    <>
        <div className='video-background'>
          <video className='video' src={videoBg} autoPlay loop muted controls={false}/>
        </div>
        <div className='light-cont'>
          <img src={light} style={{top: "-30px"}} className="light" alt="" />
        </div>
        <div className='glow-cont'>
          <img src={glow} className="glow" alt="" />
        </div>
        <Link to={'/'} className='back-btn'><IoIosArrowBack/></Link>
        <div className='about-background'>
            <div className='about-logo'>THE TRACKERS</div>
            <div className='container-p1'> 
            <img src={person1} className='person1' alt=''/>
            </div>
            <div className='container-p2'>
                <img src={person2} className='person2' alt=''/>
            </div>
        </div>
        <div className='about-nav-down'>
            <p>ABOUT US</p>
            <div><IoIosArrowBack/></div>
        </div>
        {/* <div className='cover-info'></div> */}
        <div className='persons-info'>
            <h2>ABOUT</h2>
            <div className='person-info-text'>
                <h1>Name</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                     Aenean gravida sapien nec quam ullamcorper imperdiet. 
                     Fusce elit lacus, suscipit sed vulputate in, maximus id eros.
                      In tristique dui ornare ligula bibendum, nec commodo metus mattis.
                       Vestibulum suscipit eu magna in ullamcorper. Nunc fermentum velit ac neque ornare, a fermentum tellus efficitur. 
                       Praesent sodales dolor est, sit amet cursus lorem egestas vel.
                        Orci varius natoque penatibus et magnis dis parturient montes,
                         nascetur ridiculus mus. Curabitur eu sapien vehicula, 
                         gravida metus vitae, interdum ipsum. 
                         Etiam euismod felis magna, vel vulputate dolor posuere quis. 
                         Etiam eget leo laoreet, aliquet nunc et, molestie eros. 
                         Integer a mollis nisl. Nulla vel velit tellus. 
                         Aliquam velit dolor, 
                    aliquet in lectus vitae, eleifend feugiat orci.
                </p>

            </div>
        </div>
    </>
    
  )
}

export default About