import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarDays } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <p className='p1'><span>About</span> Us</p>
      <p className='p2'>Who We <span>ARE</span>?</p>
      <Link to={"/about"}>ABOUT US</Link>
      <img src={require("../../resource/images/circle.png")} alt=''></img>
      <div className='work-info'>
        <p className='p1' style={{marginTop:"5px",marginBottom:"10px"}}><span>Our</span> Achievements</p>
        <div className='achievements'>

          <div className='achievement'>
            <FaCalendarDays className='a-icon'/>
            <p className='a-num'>2+</p>
            <p className='a-text'>YEARS WORKING</p>
          </div>
          
          <div className='achievement'>
            <AiOutlineFundProjectionScreen className='a-icon'/>
            <p className='a-num'>100+</p>
            <p className='a-text'>COMPLETED PROJECTS</p>
          </div>

          <div className='achievement'>
            <FaLightbulb className='a-icon'/>
            <p className='a-num'>1000+</p>
            <p className='a-text'>GOOD IDEAS</p>
          </div>

          <div className='achievement'>
            <MdOutlineCamera className='a-icon'/>
            <p className='a-num'>1M+</p>
            <p className='a-text'>CAPTURED FOOTAGE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs