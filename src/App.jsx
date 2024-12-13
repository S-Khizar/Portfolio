import React from 'react';
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';


const App = () => {
  const [show,setShow]= useState(false);
  return (
    <>
      <Router>
        
        <Routes>
          <Route path={"/"} element={<Home show={show} setShow={setShow}/>}/>
          <Route path={"/about"} element={<About show={show} setShow={setShow}/>}/>
          <Route path={"/resume"} element={<Resume show={show} setShow={setShow}/>}/>
          <Route path={"/portfolio"} element={<Portfolio show={show} setShow={setShow}/>}/>


          
        </Routes>
      </Router>
    </>
  )
}

export default App