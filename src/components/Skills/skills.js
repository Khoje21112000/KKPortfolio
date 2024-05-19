import React from 'react'
import './skills.css';

import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png'
import Backend from '../../assets/Backend.jpeg'
import Database from '../../assets/DatabaseDev.jpeg'

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and Passionate web developer and designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of development and design and keen eye for detail. I am proficient in HTML, CSS, JavaScript, React JS, Redux, BootStrap, Core Java, J2EE, Hibernate ORM Tool, Spring Framework, Spring Boot Rest API, MySQL Database, MongoDB, etc.</span>
        <div className='skillBars'>
          <div className='skillBar' >
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p> As a UI/UX Designer, I craft intuitive digital experiences that harmonize aesthetics with flawless functionality. Guided by user-centered design principles, I excel in user research, prototyping, and visual design to enhance user satisfaction and achieve business objectives. In collaborative settings, I blend creativity with empathy to transform complex concepts into elegant, user-centric solutions that leave a lasting impact.</p>
            </div>
          </div>
          <div className='skillBar' >
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>As a Website Designer, I craft visually captivating websites that seamlessly marry aesthetics with user-friendly functionality. Proficient in HTML, CSS, and cutting-edge design tools, I collaborate closely with clients and developers to transform concepts into polished, engaging web experiences. With a keen eye for detail and a passion for staying ahead of design trends, I create impactful digital solutions that resonate with audiences and drive business success.</p>
            </div>
          </div>
          <div className='skillBar' >
            <img src={Backend} alt='Backend' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Backend Development</h2>
              <p>As a seasoned Backend Developer adept in Java, Spring Boot, REST APIs, and MySQL, I design and implement robust backend solutions that drive scalable and secure applications. My expertise in agile practices and CI/CD methodologies enables me to deliver high-performance APIs and seamless data integrations. Collaborating effectively across teams, I tackle complex challenges with a commitment to optimizing code and fostering innovation in backend development.</p>
            </div>
          </div>
          <div className='skillBar' >
            <img src={Database} alt='Backend' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Database Developmet&Design</h2>
              <p>As a Database Development & Designer, I excel in crafting efficient, scalable databases that prioritize data integrity and performance. With expertise in SQL and database modeling, I collaborate closely with stakeholders to deliver customized solutions that meet diverse needs. My passion lies in optimizing query performance and enhancing database security, enabling organizations to make informed, data-driven decisions with confidence.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
