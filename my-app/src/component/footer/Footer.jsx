import React from 'react'
import '../footer/Footer.css';

import {SiGithub} from 'react-icons/si';
import {GrTwitter} from 'react-icons/gr';
import {GrInstagram} from 'react-icons/gr';

const Footer = () => {
  return (
    <footer >
        <a href="" id='#' className='footer-logo'>ADEWOLE</a>

        <ul className='permalinks'>
            <li><a href="#home"></a>Home</li>
            <li><a href="#about"></a>About</li>
            <li><a href="#experience"></a>Experience</li>
            <li><a href="#project"></a>Projects</li>
            <li><a href="#contact"></a>Contact</li>
        </ul>

        <div className="footer-socials">
            <a href="https://twitter.com"><SiGithub /></a>
            <a href="https://github.com"><GrTwitter /></a>
            <a href="https://instagram.com"><GrInstagram /></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; ADEWOLE. all rights reserved</small>
        </div>

    </footer>
        
  )
}

export default Footer