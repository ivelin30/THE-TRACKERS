import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/portfolio.css"
import DataProvider from "../DataProvider";
import { IoAlbumsSharp } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const CenterMode = () => {
    
    const { allImage, isLoading, setIsLoading } = useContext(DataProvider);
    const [centerSlide, setCenterSlide ] = useState(1)
    const albumCircle = require("../resource/images/album circle.png");

    function NextArrow(props) {
      const { onClick } = props;
      return (
        <div className={`next-arrow`} onClick={onClick} >
          <SlArrowRight/>
        </div>
      );
    }
    function PrevArrow(props) {
      const { onClick } = props;
      return (
        <div className={`prev-arrow`} onClick={onClick} >
          <SlArrowLeft/>
        </div>
      );
    }

   const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    adaptiveHight: false,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
        if(next+1 == allImage.length){
            setCenterSlide(0)
        }else{
            setCenterSlide(next+1)
        }
    },
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          
          backdropFilter: "blur(3px)"
        }}
      >
        <div style={{ margin: "0px" }}> {dots} </div>
      </div>
    ),
    
  };
  return (
    <div className="album-slider">
      <Slider {...settings}>
        {allImage == null
            ? ""
            : allImage.map((album, index) => {

                let cover = require(`../resource/albums/${album.cover}`);
            
                return (
                  <div key={album._id} className={`${centerSlide == index ?'center album':'album'} `}>
                    <div className="cover">
                        <img src={cover} alt="" className={`${centerSlide == index ?'cover-img':'cover-img back-cover-img'} `}/>
                        <div className={`${centerSlide == index ?'album-name visible-name':'album-name'} `}>{album.name}</div>
                        <div className={`${centerSlide == index ?'album-circle visible-circle':'album-circle'} `}>
                          <img src={albumCircle} alt=""/>
                          <div><IoAlbumsSharp/></div>
                        </div>
                        
                    </div>
                  </div>
                );
              })}
      </Slider>
    </div>
  );
}

export default CenterMode;