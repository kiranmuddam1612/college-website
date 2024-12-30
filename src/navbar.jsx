import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import React from 'react'
import logo from '../edusity_assets/logo.png'
import './nav.css'
import three from "../edusity_assets/menu-icon.png"


const Navbar = () => {
    const [show, setShow] = useState(false)
    useEffect(()=>{window.addEventListener('scroll',()=>{
        if(window.scrollY>650){
            setShow(true)
            }
            else{
                setShow(false)
            }
    })},[])
    const [shows,setShows]=useState(false)
    const toggle=()=>{
      shows?setShows(false):setShows(true);
    }
  return (
    <nav className={`navbar ${show ? "darks" : ""}`}>
      <img src={logo} alt="image" className='logo' />
      <ul className={shows?'':'hidemobile'}>
        <li><Link to='image' smooth={true} offset={0} duration={500}>home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='reviews' smooth={true} offset={-260} duration={500}>campus</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={three} alt="th" className='three' onClick={toggle} />
    </nav>
  )
}

export default Navbar;
