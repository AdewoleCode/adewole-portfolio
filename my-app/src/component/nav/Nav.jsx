import React from 'react'
import '../nav/Nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { MdContactMail } from 'react-icons/md';
import { MdWorkspacesFilled } from 'react-icons/md';
import { useState } from 'react';
import {Link, Route, Routes } from 'react-router-dom'
import About from '../about/About';
import Header from '../header/Header'
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import PortfolioDes from '../portfolio-desc/PortfolioDes';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')


  return (
    <>
      <nav>
        <Link to="/" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? 'active' : ''}><AiOutlineHome /></Link>
        <Link to="/about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''} ><AiOutlineUser /></Link>
        <Link to="/experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><FiBook /></Link>
        <Link to="/project" onClick={() => setActiveNav('#project')} className={activeNav === "#project" ? 'active' : ''}><MdWorkspacesFilled /></Link>
        <Link to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><MdContactMail /></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/des" element={<PortfolioDes/>} />

        
      </Routes>
    </>

  )
}

export default Nav;