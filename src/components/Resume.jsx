import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'
import Skills from './sub-components/Skills'
import Hobbies from './sub-components/Hobbies'
import Education from './sub-components/Education'

const Resume = ({ show, setShow }) => {
  return (
    <>
      <section className='page resumePage'>
        <Navbar show={show} />
        <TbGridDots onClick={() => { setShow(!show) }} className='hamburger' />
        <div className="banner">
          <div className="first-column">
            <Skills />
            <Education />
            <div >
              <h3> ADDITIONAL EXPERTISE</h3>
              <p>Responsive Design - 
                <span>  Api Integration</span>
                
                

              </p>

            </div>
          </div>
          
          <div className="second-column">
          <Hobbies />

            
            <div>
              <h3>PERSONAL SKILLS</h3>
              <p>Creativity - Team Work - Continue Learner
              </p>
            </div>
            <div>
              <h3>WHAT CAN I DO</h3>
              <p>Web Developement- Frontend Developement{" "}
                <span>Problem-Solving</span>
               
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Resume