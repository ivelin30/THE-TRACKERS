import "../styles/portfolio.css";
import Nav from './../components/Nav';
import { useContext, useEffect } from 'react';
import  DataProvider  from './../DataProvider';
import CenterMode from "../components/albumsSlider.js";
import videoBg from '../resource/videos/smoke-background-optimized.mp4';
import light from '../resource/images/light.png';
const Portfolio = () => {
  const { allImage, renderAlbums, setIsLoading } = useContext(DataProvider);
  
  useEffect(() =>{
    setIsLoading(true);
    renderAlbums();
  },[])

  return (
    <div className="container">
        <div className='video-background'>
          <video className='video' src={videoBg} autoPlay loop muted controls={false}/>
        </div>
        <div className='light-cont'>
          <img src={light} className="light" alt="" />
        </div>
        <Nav/>

        
        <CenterMode/>
          {/* {allImage == null
            ? ""
            : allImage.map((album) => {

                let cover = require(`../resource/albums/${album.cover}`);
            
                return (
                  <div key={album._id} className="album">

                    <img src={cover} alt="" className="cover"/>

                    <div className="info-album">
                      <div className="album-name">{album.name}</div>
                    </div>
                  </div>
                );
              })}  */}
        
    </div>
  )
}

export default Portfolio;