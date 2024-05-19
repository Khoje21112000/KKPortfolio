import React from 'react'

import './intro.css';
import bg from '../../assets/karan.png'
import { Link } from 'react-scroll';


function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Karan</span> <br/>Software Developer</span>
            <p className='introPara'>Recent B.E. in Computer Science Graduate | Passionate about Software Engineering | <br/> Seeking Opportunities to Drive Innovation and Solve Real-World Problems |<br/> Proud Alumnus of Pune University and CDAC Act's Pune.</p>
            <Link><button className='btn'>Hire Me </button></Link>
        </div>
        <div className='personimg'>
        <img src={bg} alt="Profile" className='bg'/>
        </div>
    </section>
  )
}

export default Intro
