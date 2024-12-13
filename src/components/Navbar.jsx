import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({show}) => {
  return (
    <>
    <nav className={show ? "nav mobile-nav" : "nav"}>
      <ul>
        <Link to={"/"}>  Home </Link>
        <Link to={"/about"}>  About </Link>
        <Link to={"/resume"}>  Resume </Link>
        <Link to={"/portfolio"}>  portfolio </Link>

      </ul>
       
    </nav>
    </>
  )
}

export default Navbar