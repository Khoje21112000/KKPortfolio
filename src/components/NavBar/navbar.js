
import React from 'react'
import './navbar.css'
import logo from '../../assets/klogo.jpeg';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo'></img>
      <div className='desktopMenu'>

        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>Clients</Link>


      </div>
      <button className='desktopMenubtn'>
        <img src='' alt='' className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar

