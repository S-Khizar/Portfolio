import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'

const About = ({ show, setShow }) => {
  return (
    <section className='page aboutPage'>
      <Navbar show={show} />
      <TbGridDots onClick={() => { setShow(!show) }} className='hamburger' />
      <div className="banner">
        <div className="content">
          <div>
            <h1>About</h1>
            <h3> <MdEmail /> solkarkhizar27@gmail.com</h3>
          </div>
          <div>
            My name is Khizar Solkar, a 2023 Computer Engineering graduate, and I have been enhancing my frontend skills over the past year in HTML, CSS, JavaScript, React, and Tailwind CSS. My projects include a website for mental health professionals to schedule client meetings, a recipe application showcasing various food dishes, and a GitHub Finder project demonstrating API handling with Fetch to display user data. I also developed Travel Tribe, a React-based website featuring hotel listings, booking functionalities, and property listings.{" "}
            <span>
              {" "}
              These projects highlight my expertise in frontend development, including React hooks and libraries. I am confident in my ability to contribute effectively as a frontend developer and look forward to connecting with your company.{" "}
            </span>
          </div>
          <div>
            <p>Maharashtra,India</p>
            <p>Ulwe,Navi Mumbai</p>
          </div>
        </div>
        <div className="profileImage">
          <img src="./my.png" alt="profileImage" />
        </div>


      </div>
    </section>
  )
}

export default About