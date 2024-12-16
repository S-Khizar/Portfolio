import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {  AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Home = ({show,setShow}) => {
  return (
    <>
     
    <section className='page homePage'>
    <Navbar show={show}/>
    <TbGridDots onClick={()=>{setShow(!show)}} className='hamburger'/>
          <div className="banner">
            <h1>KHIZAR</h1>
            <h1>SOLKAR</h1>
            <p>Web Devloper</p>
            <div className='btns'>
            <Link to={"https://res.cloudinary.com/diqtivexe/image/upload/v1734348136/portfoilio_nei92h.pdf"} target='_blank'>Resume</Link>
            <Link  to={"/portfolio"} target='_blank'>Portfolio</Link>

          </div>
          </div>
          <footer>
            <ul>
              
              <a href="https://www.linkedin.com/in/khizar-solkar-446585195/" target='-blank'><AiFillLinkedin/></a>
              
              <a href='https://github.com/S-Khizar' target='-blank'><FaGithubSquare/></a>
             
            </ul>
            <a href="/KhizarSolkarResume.pdf" className='download-btn' download="KhizarSolkarResume.pdf">[Download Resume]</a>
          </footer>
          
    </section>
        
    </>
    
  )
}

export default Home