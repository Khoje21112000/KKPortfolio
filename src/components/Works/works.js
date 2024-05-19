import React from 'react'
import './works.css'
import HealthCare from '../../assets/HealthInsurance.jpg'
import Agriculter from '../../assets/Farm-Management1.png'
import Bank from '../../assets/bank-management.jpg'
function Works() {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'>My portfolio showcases a strong track record in delivering innovative solutions across healthcare, agriculture, and banking domains. With a focus on leveraging advanced technologies and a commitment to continuous learning, I am dedicated to driving technological advancements and delivering impactful results in every project I undertake.</span>
        <hr ></hr>
        <div className='worksImgs'>
          <div className='OneRowImg'>
          <div>
            <img src={HealthCare} alt='HealthCare' className='worksImg'></img> <br/>
            <h2 className='project1'><button  className='project1btn'><a href='https://github.com/Khoje21112000/CDACProjectSept23.git' target="_blank">HealthCare Domain Project</a> </button></h2>
          </div>
          <div>
            <img src={Agriculter} alt='Agriculter' className='worksImg2'/><br/>
            <h2 className='project1'><button  className='project1btn'><a href='https://github.com/Khoje21112000/FarmSenseProject.git' target="_blank">Agriculture Domain Project</a> </button></h2>
          </div>
          <div>
            <img src={Bank} alt='Bank' className='worksImg'/><br/>
            <h2 className='project1'><button  className='project1btn'><a href='https://github.com/Khoje21112000/BankAccount.git' target="_blank">Banking Domain Project</a> </button></h2>
          </div>
          </div>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works
