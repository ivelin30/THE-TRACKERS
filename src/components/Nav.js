import { useContext } from 'react'
import { Link } from "react-router-dom"
import '../styles/nav.css'
import DataProvider from '../DataProvider'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5"


const Nav = () => {
  
  const {navScroll, setNavScroll, isOpen, setIsOpen, menuIsOpen, setMenuIsOpen} = useContext(DataProvider);
    window.addEventListener('scroll', () =>{
    let scroll = window.scrollY;
    if (scroll > navScroll) {
      setNavScroll(scroll);
      setIsOpen(false);
      setMenuIsOpen(false);
    }else{
      setNavScroll(scroll);
      setIsOpen(true);
    }
    });
  const OpenCloseMenu = () =>{
    menuIsOpen ?setMenuIsOpen(false) :setMenuIsOpen(true);
  };

  return (
    <>
      <div className='navigation'>

        <div className={isOpen ?'left-side-nav' :'left-side-nav close'}>
            <Link to="/about" className='nav-button'>ABOUT US</Link>
        </div>

        <Link to='/' className={isOpen ?'logo-link' :'logo-link close-logo'}>THE TRACKERS</Link>

        <div className={isOpen ?'right-side-nav' :'right-side-nav close'}>  
            <Link to="/portfolio" className='nav-button'>PORTFOLIO</Link>
            <Link to="/contact" className='nav-button'>CONTACT</Link>
        </div>
        <div className={isOpen ?'menu-button' :'menu-button close-drop-menu-button'} onClick={OpenCloseMenu}>{menuIsOpen ?<IoClose/> :<HiMenu/> }</div>
        <div className={menuIsOpen ?'drop-menu' :'drop-menu close-drop-menu'}>
          <Link to="/portfolio" onClick={OpenCloseMenu} className='menu-drop-button'>PORTFOLIO</Link>
          <Link to="/contact" onClick={OpenCloseMenu} className='menu-drop-button'>CONTACT</Link>
          <Link to="/about" onClick={OpenCloseMenu} className='menu-drop-button'>ABOUT US</Link>
        </div>
      </div>
    </>
    
    
  )
}

export default Nav